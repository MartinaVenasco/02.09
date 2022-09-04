
import './index.css';

const Navbar = ({TopRated}) => {

      const scrollTopRated = () => {
        window.scrollTo({
          top: TopRated.current.offsetTop,
          left: 0,
          behavior: "smooth",
        });
      };

  return (
    <div className="Navbar">
      <ul className="Navbar__list">
       
        <li>
          <a href="#topS" onClick={() => {scrollTopRated(TopRated);}}>TOP RATED</a>
        </li>
        <li>
          <a href="/">FAVORITE</a>
        </li>
        <li>
          <a href="#topM">UP COMING</a>
        </li>
        
      </ul>
    </div>
  )
  ;
  }
export default Navbar;