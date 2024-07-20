import { useState } from "react";
import { signUpApi } from "../../api/auth/signup/signup.api";
import { useNavigate } from "react-router-dom";
import "./SignUpPanel.css";

function SignUpPanel() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const userDetails = {
    name: name,
    userName: userName,
    password: password,
    emailId: email,
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateUserName = (e) => {
    setUserName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const signUp = async (e) => {
    setErrorMessage("");
    e.preventDefault();
    try {
      const response = await signUpApi(userDetails);
      if (response.response) {
        setErrorMessage(response.response.data.message);
      } else {
        const token = response.data.accessToken;
        const emailId = response.data.emailId;
        const name =  response.data.name;
        const userName = response.data.userName;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("emailId",emailId);
        sessionStorage.setItem("name",name);
        sessionStorage.setItem("userName",userName);
        navigate("/home");
      }
    } catch (err) {
      console.log("Something Went Wrong!");
    }
  };

  const goToSignupPage = () => {
    navigate("/");
  };

  return (
    <div className="main-div">
      <div className="signup-panel-div p-1">
        <div className="header-div">
          <h3>Welcome to Sticky Notes!</h3>
          <p>Sign up to continue</p>
        </div>
        <div className="form-div">
          {/* <form className="input-form" onSubmit = {signIn}>
                    <input className = "signin-input" type="text" onChange = {changeUserName} value = {userName} placeholder="Username"></input>
                    <input className = "signin-input" type="password" onChange = {changePassword} value = {password} placeholder="Password"></input>
                    <button className="signin-btn" type="submit" placeholder="Sign in">sign in</button>
                    <div className = "error-div">
                        {errorMessage}
                    </div>
                    <div className="footer-div">
                        <span className="mt-5 hover" onClick={goToSignUpPage}>New User ? Sign up</span>
                        <span className="mt-5 hover" onClick={goToSkipPage}>Skip</span>
                    </div>
                </form> */}
          <form className="input-form-signup" onSubmit={signUp}>
            <input
              className="signup-input"
              type="text"
              onChange={updateName}
              value={name}
              placeholder="Name"
            ></input>
            {/* <div className="mb-3">
              <label for="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" value={name} onChange={updateName}/>
            </div> */}
            <input
              className="signup-input"
              type="text"
              onChange={updateUserName}
              value={userName}
              placeholder="User Name"
            ></input>
            {/* <div className="mb-3">
              <label for="user-name" className="form-label">
                User Name
              </label>
              <input type="text" className="form-control" id="user-name" value={userName} onChange={updateUserName}/>
            </div> */}
            <input
              className="signup-input"
              type="email"
              onChange={updateEmail}
              value={email}
              placeholder="Email"
            ></input>
            {/* <div className="mb-3">
              <label for="email" className="form-label">
                Email address
              </label>
              <input type="email" className="form-control" id="email" value={email} onChange={updateEmail}/>
            </div> */}
            <input
              className="signup-input"
              type="password"
              onChange={updatePassword}
              value={password}
              placeholder="Password"
            ></input>
            {/* <div className="mb-3">
              <label for="password" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="password" value={password} onChange={updatePassword}/>
            </div> */}
            {/* <button type="submit" className="btn btn-primary">
              Sign up
            </button> */}
            <button className="signup-btn" type="submit" placeholder="Sign up">
              sign up
            </button>
            <div className="error-div">{errorMessage}</div>
            <div className="footer-div">
              <span className="mt-5 hover" onClick={goToSignupPage}>
                New User ? Sign up
              </span>
              {/* <span className="mt-5 hover" onClick={goToSkipPage}>
                Skip
              </span> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPanel;
