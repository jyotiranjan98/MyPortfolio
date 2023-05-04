import "../App.css";
import { useState } from "react";
import resume from "./JyotiranjanResume.pdf"

function Navbar() {
  const [toggle, settoggle] = useState(false);
  const [small, setsmall] = useState("");

  const handleclick = () => {
    window.open(
      "https://drive.google.com/file/d/1W7XhLpd4x6Hen1KtbGlOKwii5h5GBvF4/view?usp=sharing"
    );
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img
          src="https://thumbs.dreamstime.com/z/elegant-dynamic-letter-j-wing-linear-design-can-be-used-any-transportation-service-sports-areas-vector-illustration-146231107.jpg"
          width="50px"
          height="50px"
          alt=""
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div
        className="menu_toggle"
        onClick={() => {
          settoggle(!toggle);
          setsmall("small");
        }}
      >
        <img
          src="https://cdn2.iconfinder.com/data/icons/flat-and-simple-part-2/128/menu-512.png"
          width="50px"
          height="50px"
          alt=""
        />
      </div>
      <div
        className={
          toggle && small === "small" ? "small_nav right--nav" : "right--nav"
        }
      >
        <div
          className="active"
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#top">Home</a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#about">About</a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#tech">Skills</a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#projects">Project</a>
        </div>
        <div
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <a href="#contact">Contact Me</a>
        </div>
        <div className="cv">
          <a
          onClick={handleclick}
            href={resume}
            target="blank"
            download
            style={{ color: "#000" }}
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
