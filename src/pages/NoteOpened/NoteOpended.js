import { useNavigate, useParams } from "react-router-dom";
import HomePageHeader from "../../Components/HomePageHeader/HomePageHeader";
import { useEffect, useState } from "react";
import Loader from "../../Components/Loader/Loader";
import { deleteNoteId, getNoteById } from "../../api/notes/notes.api";
import "./NoteOpened.css";

function NoteOpened() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [isLoading, changeIsLoading] = useState(true);
  const [noteDate, setNoteDate] = useState("");
  const [noteHeading, setNoteHeading] = useState("");
  const [noteBody, setNoteBody] = useState("");

  const fetchNote = async () => {
    try {
      let response = await getNoteById(id);
      setNoteDate(response.data.date);
      setNoteHeading(response.data.heading);
      setNoteBody(response.data.body);
    } catch (err) {
      console.log(err);
    }
    changeIsLoading(false);
  };

  const deleteNote = async () => {
    if (window.confirm("Delete Note ?")) {
      await deleteNoteId(id);
      navigate("/home");
    }
  };

  const editNote = () => {
    if (window.confirm("Edit Note ?")) {
      navigate(`/note/edit/${id}`);
    }
  };

  function showNotes() {
    return (
      <div className="open-note w-100">
        <div className="date">
          <h6 className="rounded-2 p-2 border">{noteDate}</h6>
        </div>
        <div className="heading">
          <h1 className="rounded-2 border p-2">{noteHeading}</h1>
        </div>
        <div className="body">
          <pre className="rounded-2 border p-2 h-100">{noteBody}</pre>
        </div>
        <div className="footer-div">
          <button type="button" className="rounded border" onClick={deleteNote}>
            delete
          </button>
          <button type="button" className="rounded border" onClick={editNote}>
            Edit
          </button>
        </div>
      </div>
    );
  }

  useEffect(() => {
    fetchNote();

    return () => {};
  });

  return (
    <div className="opened-note-div">
      <HomePageHeader />
      {isLoading ? <Loader /> : showNotes()}
    </div>
  );
}

export default NoteOpened;
