import "./NoteFooterBtn.css";
import "../../GlobalCSS/GlobalCSS.css";

function NoteFooterBtn() {
  return (
    <div className="btn-div b2 flex jcse aic">
      <button type="button">Cancel</button>
      <button type="button">Save</button>
    </div>
  );
}

export default NoteFooterBtn;