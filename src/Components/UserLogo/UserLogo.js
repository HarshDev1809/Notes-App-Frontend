import "../../GlobalCSS/GlobalCSS.css";
import "./UserLogo.css";

function UserLogo(props) {
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  return (
    <div className="dropdown">
      <button onClick={myFunction} className="dropbtn br5">
        ajdjandkjandkjandkjnakjdnandknakjdnkjand
      </button>
      <div id="myDropdown" className="dropdown-content">
        <button type="button"></button>
        <button type="button"></button>
      </div>
    </div>
  );
}

export default UserLogo;
