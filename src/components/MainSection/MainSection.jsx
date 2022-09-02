import { useState, useEffect } from "react";
import MainCard from "../MainCard";
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
  }, []);

  return (
    <div className="MainSection">
    <div className="Voted">{movieLists.topRated && (
        <Voted
          modalVisibility={modalVisibility}
          cardData={movieLists.topRated.filter(
                (movie) => movie.vote_average >= 8.7
              )}
        />
      )}</div>
      {movieLists.popular && (
        <MainCard
          modalVisibility={modalVisibility}
          cardData={movieLists.popular[0]}
        />
      )}
      {movieLists.topRated && (
        <TopRatedList
          modalVisibility={modalVisibility}
          cardData={movieLists.topRated}
        />
      )}
      {movieLists.upcoming && (
        <UpComingList
          modalVisibility={modalVisibility}
          cardData={movieLists.upcoming}
        />
      )}
      
    </div>
  );
};

export default MainSection;
