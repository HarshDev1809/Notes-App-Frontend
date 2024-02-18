import { useNavigate } from "react-router-dom"
import "./UnAuthenticatedHome.css"

function UnAuthenticatedHome(){

    const navigate = useNavigate()

    function goToHome(){
        navigate("/");
    }

    return <div className="ua-div">
        <div className = "ua-nav-div">
            <p>Sticky Notes</p>
            <button type = "button" onClick={goToHome}>Sign In</button>
        </div>
        <div className = "ua-body">
            <p>PLease <a onClick = {goToHome}>Sign in</a> to Continue</p>
        </div>
    </div>
}

export default UnAuthenticatedHome;