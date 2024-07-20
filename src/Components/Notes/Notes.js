import "./Notes.css";
import "../../GlobalCSS/GlobalCSS.css";
import { useEffect, useState } from "react";
import Note from "../Note/Note";
import { getNotes } from "../../api/notes/notes.api";
import { getToken } from "../../Modules/token";
import Loader from "../Loader/Loader";
import { verifyUser } from "../../api/auth/verify/verify.user.api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../../features/notesData/notesDataSlice";

function Notes() {

  const navigate = useNavigate()

  const [isUser, changeIsUser] = useState(true);

  const [isLoading, changeIsLoading] = useState(true);

  // const [notes, setNotes] = useState([]);

  const dispatch = useDispatch();
  const noteData = useSelector((state)=>state.notesData.value);
  const searchValue = useSelector((state)=>state.searchBar.value);

  const fetchNotes = async () => {
    const verifyResponse = await verifyUser();
    if (verifyResponse) {
        const response = await getNotes();
        dispatch(setData(response.data));
        // setNotes(response.data) 
        changeIsLoading(false);
    }
    else (
        navigate("/")
    )

  };
  useEffect(() => {
    fetchNotes();

    return () => {};
  }, []);

  function showThis() {
    console.log("hello");
  }


  function showNotes(){
    return <div className="notes-div">
        {noteData.map((note)=>{
            if(note.heading.includes(searchValue) || note.body.includes(searchValue)){
              return <Note noteDetails={note}/>
            }else{
              return
            }
        })}
    </div>
  }

  return (
    <div className="notes">
    {isLoading ? <Loader /> : showNotes()}
    </div>
  );
}

export default Notes;
