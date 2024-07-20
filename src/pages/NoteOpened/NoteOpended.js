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

  const noteDetail = {
    date: noteDate,
    heading: noteHeading,
    body: noteBody,
  };

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

  const goToHome = () => {
    navigate("/home");
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
    )
    // <div className="open-note">
    {
      /* <div className="card text-break d-block">
          <div className="card-header">{noteDate}</div>
          <div className="card-body d-block">
            <h1 className="card-title d-block py-3 fs-1">{noteHeading}</h1>
            <pre className="fs-6">{noteBody}</pre>
            <div className="d-flex justify-content-evenly">
              <button type="button" className="btn btn-primary" onClick={deleteNote}>
                <span class="material-symbols-outlined">delete</span>
              </button>
              <button type="button" className="btn btn-primary" onClick={editNote}>
                <span class="material-symbols-outlined">edit</span>
              </button>
            </div>
          </div>
        </div> */
    }

    // </div>

    // <div className="open-note bg-warning-subtle">
    {
      /* <button
          type="button"
          className="btn d-flex btn-outline-primary home-btn align-items-center justify-content-center"
          onClick={goToHome}
        >
          <span class="material-symbols-outlined">home</span>
        </button> */
    }
    //   <div className="note-div">
    //     <div className="date rounded-2 bg-warning-subtle my-1">
    //       <p>{noteDate}</p>
    //     </div>
    //     <div className="heading rounded-2 text-wrap bg-warning-subtle my-1">
    //       <h4>{noteHeading}</h4>
    //     </div>
    //     <div className="body rounded-2 bg-warning-subtle my-1">

    //       <pre>{noteBody}</pre>
    //     </div>
    //     <div className="footer-div">
    //       <button
    //         type="button"
    //         class="btn btn-outline-warning d-flex justify-content-center align-items-center"
    //         onClick={deleteNote}
    //       >
    //         <span class="material-symbols-outlined">delete</span>
    //       </button>
    //       <button
    //         type="button"
    //         class="btn btn-outline-light d-flex justify-content-center align-items-center"
    //         onClick={editNote}
    //       >
    //         <span class="material-symbols-outlined">edit</span>
    //       </button>
    //     </div>
    //   </div>
    // </div>

    // );
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
