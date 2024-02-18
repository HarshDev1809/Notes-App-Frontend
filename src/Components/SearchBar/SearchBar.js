import "./SearchBar.css";
import "../../GlobalCSS/GlobalCSS.css"

function SearchBar(){

    return <div className="search-bar-div flex jcc b2">
        <form >
            <input type="text" placeholder="Search"></input>
            <button type="button">
                <span class="material-symbols-outlined">
                    search
                </span>
            </button>
        </form>
    </div>

}

export default SearchBar;