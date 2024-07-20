import { useNavigate } from "react-router-dom";
import "./AddBtn.css"

function AddBtn(){

    const navigate = useNavigate();
    
    function goToCreatePage(){
        navigate("/note/create");
    }

    return <div className="add-btn-div flex">
        <button type="button" className="new-btn flex border" onClick={goToCreatePage}>
            <span class="material-symbols-outlined full-size flex">
                sticky_note
            </span>
        </button>
    </div>
}

export default AddBtn;