import AddBtn from "../../Components/AddBtn/AddBtn";
import HomePageHeader from "../../Components/HomePageHeader/HomePageHeader";
import NavBar from "../../Components/NavBar/NavBar";
import Note from "../../Components/Note/Note";
import Notes from "../../Components/Notes/Notes";
import SearchBar from "../../Components/SearchBar/SearchBar";

function HomePage(){
    return <div>
        <HomePageHeader />
        {/* <NavBar /> */}
        <SearchBar />
        <Notes />
        <AddBtn />
    </div>
}

export default HomePage;