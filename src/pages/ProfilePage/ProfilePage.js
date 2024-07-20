import { useState } from "react";
import HomePageHeader from "../../Components/HomePageHeader/HomePageHeader";
import "./ProfilePage.css"

function ProfilePage() {

    const [name, setName] = useState(sessionStorage.getItem("name"));
    const [emailId, setEmailId] = useState(sessionStorage.getItem("emailId"));
    const [userName, setUserName] = useState(sessionStorage.getItem("userName"));

  return (
    <div className="page d-flex justify-content-center flex-column align-items-center">
      <HomePageHeader />
      <div className="profile-page-div d-flex justify-content-start flex-column p-4">
        <div class="mb-3 w-50">
          <label for="exampleFormControlInput1" class="form-label">
            Name
          </label>
          <p class="form-control" id="exampleFormControlInput1">
            {name}
          </p>
        </div>
        <div class="mb-3 w-50">
          <label for="exampleFormControlInput1" class="form-label">
            User Name
          </label>
          <p class="form-control" id="exampleFormControlInput1">
            {userName}
          </p>
        </div>
        <div class="mb-3 w-50">
          <label for="exampleFormControlInput1" class="form-label">
            Email address
          </label>
          <p class="form-control" id="exampleFormControlInput1">
            {emailId}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
