import { useNavigate } from "react-router-dom";
import "./UnSignedPage.css"

function UnSignedPage(){

    const navigate = useNavigate();

    const goBack = ()=>{
        navigate(-1);
    }

    return <div className="unsigned-page">
        <h1>Sorry Page Not Available !!!</h1>
        <button type="button" className="btn btn-outline-primary" onClick={goBack}>Click here to go Back !</button>
    </div>
}

export default UnSignedPage;
