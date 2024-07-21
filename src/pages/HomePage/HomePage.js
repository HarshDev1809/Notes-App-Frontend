import AddBtn from "../../Components/AddBtn/AddBtn";
import HomePageHeader from "../../Components/HomePageHeader/HomePageHeader";
import Notes from "../../Components/Notes/Notes";
import SearchBar from "../../features/searchBar/SearchBar";

function HomePage(){
    return <div>
        <HomePageHeader />
        <SearchBar />
        <Notes />
        <AddBtn />
    </div>
}

export default HomePage;