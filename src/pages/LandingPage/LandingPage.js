import SignInPanel from "../../Components/SignInPanel/SignInPanel";
import WelcomePanel from "../../Components/WelcomePanel/WelcomePanel";
import "./LandingPage.css"


function LangingPage(){
    return <div className="landing-page-main-div">
        <SignInPanel/>
        <WelcomePanel/>
    </div>
}

export default LangingPage;