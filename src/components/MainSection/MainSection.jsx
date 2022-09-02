import { useState, useEffect } from "react";

import {RiStarSLine} from 'react-icons/ri'
import TopRatedList from "../TopRatedList";
import Voted from "../Voted";
import { GET } from "../../utils/api";
import UpComingList from "../UpComingList";
import "./index.css";

const MainSection = ({ modalVisibility }) => {
  const [movieLists, setMovieLists] = useState({});

const [page, setPage] = useState("1")
  useEffect(() => {
    GET("movie", "popular", "&language=en-US&page=", page).then((data) =>
      setMovieLists((prev) => ({ ...prev, popular: data.results }))
    );

    GET("movie", "top_rated", "&language=en-US&page=1")
      .then((data) =>
        setMovieLists((prev) => ({ ...prev, topRated: data.results }))
      );
      

    GET("movie", "upcoming", "&language=en-US&page=1").then((data) =>
      setMovieLists((prev) => ({ ...prev, upcoming: data.results }))
    );
  }, [page]);

  return (
    <div className="MainSection">
    <div className="Voted">{movieLists.topRated && (
        <Voted
          modalVisibility={modalVisibility}
          cardData={movieLists.topRated.filter(
                (movie) => movie.vote_average >= 8.6
              )}
        />
      )}</div>
     
      <div className="TopRated_Section">
      <h1 className="toprated_h1">Top Rated <i className="star_1" ><RiStarSLine/> </i></h1>
      {movieLists.topRated && (
        <TopRatedList
          modalVisibility={modalVisibility}
          cardData={movieLists.topRated}
        />
      )}</div>
      <div className="UpComing_Section">
      {movieLists.upcoming && (
        <UpComingList
          modalVisibility={modalVisibility}
          cardData={movieLists.upcoming}
        />
      )}
      </div>
    </div>
  );
};

export default MainSection;
