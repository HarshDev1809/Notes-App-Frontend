import { Navigate, useNavigate } from "react-router-dom";
import "./SignInPanel.css";
import { useEffect, useState } from "react";
const {signInApi} = require("../../api/auth/signin/signin.api")
const {verifyUser} = require("../../api/auth/verify/verify.user.api")

function SignInPanel(){

    const navigate = useNavigate()


    const [userName,setUserName] = useState("");
    const [password,setPassword] = useState("");
    const [errorMessage,setErrorMessage] = useState("")

    const userDetails = {
        userName : userName,
        password : password
    }

    const showPage = async()=>{
        const isVerified = await verifyUser();
        console.log(isVerified)
        if(isVerified){
            navigate("/home");
        }
    }

    useEffect(()=>{
        showPage()
    },[])

    function changeUserName(e){
        setUserName(e.target.value);
    }

    function changePassword(e){
        setPassword(e.target.value);
    }

    async function signIn(e){
        setErrorMessage("");
        e.preventDefault();
        try{
            const response = await signInApi(userDetails);
            if(response.response){
                setErrorMessage(response.response.data.message);
            }else{
                const token = response.data.accessToken;
                sessionStorage.setItem("token",token);
                navigate("/home")
            }
        }catch(err){
            console.log("Something Went Wrong!");
        }
        
    }

    return <div className="main-div">
        <div className="signin-panel-div">
            <div className="header-div">
                <h2>Welcome to Sticky Notes!</h2>
                <p>Sign in to continue</p>
            </div>
            <div className="form-div">
                <form className="input-form" onSubmit = {signIn}>
                    <input className = "signin-input" type="text" onChange = {changeUserName} value = {userName} placeholder="Username"></input>
                    <input className = "signin-input" type="password" onChange = {changePassword} value = {password} placeholder="Password"></input>
                    <button className="signin-btn" type="submit" placeholder="Sign in">sign in</button>
                    <div className = "error-div">
                        {errorMessage}
                    </div>
                    <div className="footer-div">
                        <span className="mt-5 hover">New User ? Sign up</span>
                        <span className="mt-5 hover">Skip</span>
                    </div>
                </form>
            </div>
        </div>
    </div>
}

export default SignInPanel;