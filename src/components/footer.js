import Form from "./from";
import "../styles/footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="stack-header">
        <p className="highlight">To connect with me</p>
        <h2 className="head">Contact me</h2>
      </div>
      <Form />
      <div className="credit maghia-details">
        <p><b>Email</b> - jyoti.das955@gmail.com</p>
        <p><b>Phone No - </b>+91-9556362078</p>
      </div>
      <div className="footer__div">
        <div>
          <span>
            <a
              href="https://www.linkedin.com/in/jyotiranjan-das-2bb1291b3/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="change-my-color"
                src="https://www.svgrepo.com/show/128403/linkedin.svg"
                width="30px"
                height="30px"
                alt=""
              />
              <p>Linkedin</p>
            </a>
          </span>
          <span>
            <a
              href="https://github.com/jyotiranjan98"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.svgrepo.com/show/325236/github.svg"
                width="30px"
                height="30px"
                alt=""
                className="change-my-color"
              />
              <p>Github</p>
            </a>
          </span>
          <span>
            <a
              href="https://medium.com/@jyoti.das955"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="change-my-color"
                src="https://www.svgrepo.com/show/346109/medium-fill.svg"
                width="30px"
                height="30px"
                alt=""
              />
              <p>Medium</p>
            </a>
          </span>
          
          <span>
            <a
              href="https://twitter.com/Jyotiranjan955"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="change-my-color"
                src="https://www.svgrepo.com/show/201339/twitter.svg"
                width="30px"
                height="30px"
                alt=""
              />
              <p>Twitter</p>
            </a>
          </span>
        </div>
        <div className="credit">
          <span>Designed & Built by</span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
            alt=""
            width="25px"
            height="25px"
          />
          <span>Jyotiranjan Das</span>
        </div>
        <div className="credit" style={{ color: "#00ffbb" }}>
          <span>&copy; 2023</span>
        </div>
        <div className="topDiv">
          <a href="#top">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXP_IqIxI2RoBhbIlY7GnRRE6h64Wv2MrjVVWYJGQYIoh0rjT1mGeEixSHQ9pKPkJtY8U&usqp=CAU"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
