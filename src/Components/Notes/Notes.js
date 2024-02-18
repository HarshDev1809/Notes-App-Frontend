import "./Notes.css";
import "../../GlobalCSS/GlobalCSS.css";
import { useEffect, useState } from "react";
import Note from "../Note/Note";
import { getNotes } from "../../api/notes/notes.api";
import { getToken } from "../../Modules/token";
import Loader from "../Loader/Loader";
import { verifyUser } from "../../api/auth/verify/verify.user.api";
import { useNavigate } from "react-router-dom";

function Notes() {

    const navigate = useNavigate()

  const [isUser, changeIsUser] = useState(true);

  const [isLoading, changeIsLoading] = useState(true);

  const [notes, setNotes] = useState([]);

  const fetchNotes = async () => {
    const verifyResponse = await verifyUser();
    if (verifyResponse) {
        const response = await getNotes();
        console.log(response.data)
        setNotes(response.data)
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
        {notes.map((note)=>{
            console.log(note)
            return <Note noteDetails={note}/>
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
