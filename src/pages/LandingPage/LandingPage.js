import { useState, useEffect } from "react";
import SignInPanel from "../../Components/SignInPanel/SignInPanel";
import WelcomePanel from "../../Components/WelcomePanel/WelcomePanel";
import "./LandingPage.css";

function LangingPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="landing-page-main-div">
      <SignInPanel />
      {windowWidth >= 768 ? <WelcomePanel /> : <></>}
    </div>
  );
}

export default LangingPage;
