import SignUpPanel from "../../Components/SignUpPanel/SignUpPanel"
import WelcomePanel from "../../Components/WelcomePanel/WelcomePanel"
import "./SignUp.css"

function SignUpPage(){
    return <div className="sign-up-page">
        <SignUpPanel />
        <WelcomePanel />
    </div>
}

export default SignUpPage