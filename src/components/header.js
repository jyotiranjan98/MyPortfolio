function Header() {
  return (
    <div className="header">
      <div className="header--div1">
        <p className="header-hi fadeLeft">Hi, i am </p>
        <h1 className="header--name fadeRight">Jyotiranjan Das</h1>
        <h3 className="header--work fadeLeft">FULL STACK WEB DEVELOPER </h3>
        <p className="fadeRight">
          I’m a MERN stack developer with the
          <br />
          development skills .
        </p>
        <button className="btn fadeLeft">
          <a href="#contact" style={{ color: "#000" }}>
            Contact me
          </a>
        </button>
      </div>
      
    </div>
  );
}

export default Header;
