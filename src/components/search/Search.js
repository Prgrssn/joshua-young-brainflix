import "../avatar/Avatar";
import Avatar from "../avatar/Avatar";
import "./Search.scss";

export default function Search() {
  return (
    <div className="search">
      <form className="search__bar" action="/" method="get">
        <input id="search-bar" type="text" placeholder="Search" />
      </form>
      <Avatar className="search__button" />
    </div>
  );
}
