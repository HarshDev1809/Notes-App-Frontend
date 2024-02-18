import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getNoteById, updateNote } from "../../api/notes/notes.api";
import HomePageHeader from "../../Components/HomePageHeader/HomePageHeader";
import Loader from "../../Components/Loader/Loader";
import { inputDate , outputDate} from "../../Modules/date";
import "./EditNotePage.css"

function EditNotePage() {
    const navigate = useNavigate();
  const { id } = useParams();
  const [noteDate, setNoteDate] = useState("");
  const [noteHeading, setNoteHeading] = useState("");
  const [noteBody, setNoteBody] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [inputNoteDate, setInputNoteDate] = useState("")
  const noteDetails = {
    date: noteDate,
    heading : noteHeading,
    body : noteBody
  }

  const fetchNote = async () => {
    const response = await getNoteById(id);
    console.log();
    setNoteDate(response.data.date);
    setInputNoteDate(inputDate(response.data.date));
    setNoteHeading(response.data.heading);
    setNoteBody(response.data.body);
    setIsLoading(false);
  };

  const cancelChanges = () => {
    if(window.confirm("Cancel Changes ?")){
        navigate("/home");
    }
  };

  const saveChanges = async (e) =>{
    e.preventDefault()
    if(window.confirm("Save Changes ?")){
        const date = outputDate(noteDate);
        // setNoteDate(date)
        console.log(date);
        console.log(noteDetails)    
        await updateNote(id,noteDetails);
        navigate("/home");
    }
  }

  const changeDate =  (e) =>{
    setInputNoteDate(e.target.value);
    setNoteDate(outputDate(e.target.value));
  }

  const changeHeading = (e) =>{
    setNoteHeading(e.target.value);
  }

  const changeBody = (e) => {
    setNoteBody(e.target.value);
  }

  const showNote = () => {
    return (
      <div className="edit-note-div">
        <div className="edit-note">
          <form onSubmit = {saveChanges}>
            <div className="date">
              <input type="date" value={inputNoteDate} onChange = {changeDate}></input>
            </div>
            <div className="heading">
              <input type="text" value={noteHeading} onChange = {changeHeading}></input>
            </div>
            <div className="body">
              <textarea value={noteBody} required onChange = {changeBody}></textarea>
            </div>
            <div className="footer-div">
              <button type="button" onClick={cancelChanges}>
                Cancel
              </button>
              <button type="submit">save</button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  useEffect(() => {
    fetchNote();
  }, []);

  return (
    <div className="edit-note-div-main">
      <HomePageHeader />
      {isLoading ? <Loader /> : showNote()}
    </div>
  );
}

export default EditNotePage;
