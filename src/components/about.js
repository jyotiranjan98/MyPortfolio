import "../styles/about.css";
function About() {
  return (
    <div className="container" data-aos={"fade-right"}>
      <div className="container__image">
        <div className="container__info container__author">
          Hi There!,
          
        </div>
        <div className="container__info container__location">
          <p>
            I am <em></em>
            <a href="#" className="link">
              Jyotiranjan Das
            </a>{" "}
            , self-motivated, hardworking aspiring full-stack web developer with
            in-depth knowledge of frontend. I love to build websites/application
            that serves the world. <br></br>and always want to enhance my
            knowledge & adpot new technologies that make impact on people.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
