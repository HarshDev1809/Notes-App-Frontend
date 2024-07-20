import "./SearchBar.css";
import "../../GlobalCSS/GlobalCSS.css";
import { useDispatch, useSelector } from "react-redux";
import { setValue } from "./searchBarSlice";
import { useState } from "react";

function SearchBar() {

  const searchValue = useSelector((state)=>state.searchBar.value);
  const [inputValue, setInputValue] = useState(searchValue);
  const dispatch = useDispatch();

  const clearValue = ()=>{
    dispatch(setValue(""));
  }

  const updateValue = (e)=>{
    setInputValue(e.target.value);
    dispatch(setValue(e.target.value));
  }

  return (
    <div className="search-bar-div">
      <div className="input-group mb-3 w-25 text-centre">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon2"
          value={searchValue}
          onChange={updateValue}
        >
        </input>
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={clearValue}
        >
          clear
        </button>
        {/* <button type="button" className="btn-close btn btn-outline-secondary" aria-label="Close"></button> */}
      </div>
    </div>
  );
}

export default SearchBar;
