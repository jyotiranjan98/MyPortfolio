import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import "./animation.css";
import Navbar from "./components/navbar.js";
import Header from "./components/header.js";
import About from "./components/about";
import TechStack from "./components/techstack";
import Toproject from "./components/topProject";
import Projects from "./components/project";
import Footer from "./components/footer";
import GitHub from "./components/github";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
    setTimeout(function () {
      AOS.refresh();
    }, 500);
  }, []);
  return (
    <div id="top">
      <Navbar />
      <Header />

      <div id="about" data-aos={"fade-left"} style={{ height: "15vh" }}>
        <div className="stack-header">
          <p className="highlight">To Know</p>
          <h2 className="head">About me</h2>
        </div>
      </div>
      <About />

      <div id="tech" style={{ height: "15vh" }}></div>
      <TechStack />

      <div id="projects" style={{ height: "15vh" }}></div>
      <div>
        <div className="stack-header" data-aos={"zoom-in"}>
          <p className="highlight">My projects</p>
          <h2 className="head">Top Project</h2>
        </div>
        {/* <div className="top_right" data-aos={"zoom-in"}>
          <Toproject
            projectdata={"Levo Labz(External Project)"}
            description={
              "Levo is an one of the leading platfrom which provides services in many tech category like Web Development Mobile Applications Custom Softwares UI/UX Graphic Design SEO Optimization Performance Marketing and Staff Augmentation Tech Stack: HTML | Tailwind Css | Javascript | NextJs . "
            }
            techStack={[
              // "tech/html5.svg", "tech/css3.svg", "tech/js.svg"
              "tech/html_img.png",
              "tech/tailwindcss.svg",
              "tech/nextjs-icon.svg",
            ]}
            imges={["levo1.jpeg", "levo2.jpeg", "levo3.jpeg"]}
            links={[
              "https://team9-levolabz-clone.vercel.app/",
              "https://github.com/mdshahbajalam7/team9-levolabz-clone",
              // "https://player.vimeo.com/video/689858253?h=1744dc5262",
            ]}
          />
        </div> */}
                <div className="top_right mt" data-aos={"zoom-in-down"}>
          <Toproject
            projectdata={"Levo Labz(External Project)"}
            description={
              "Levo is an one of the leading platfrom which provides services in many tech category like Web Development Mobile Applications Custom Softwares UI/UX Graphic Design SEO Optimization Performance Marketing and Staff Augmentation Tech Stack: HTML | Tailwind Css | Javascript | NextJs . "
            }
            techStack={[
              // "tech/html5.svg", "tech/css3.svg", "tech/js.svg"
              "tech/html_img.png",
               "tech/tailwind.jpg",
               "tech/js.jpg",
               "tech/nextjs.png",
               
            ]}
            imges={["levo1.jpeg", "levo2.jpeg", "levo3.jpeg"]}
            links={[
              "https://team9-levolabz-clone.vercel.app/",
              "https://github.com/mdshahbajalam7/team9-levolabz-clone",
              // "https://player.vimeo.com/video/689858253?h=1744dc5262",
            ]}
          />
        </div>
        <div className="top_left" data-aos={"zoom-in-up"}>
          <Toproject
            projectdata={"The Bowl Company Clone"}
            description={
              "The bowl company is the a online food Delivery website, from where you can buy a various types of food items in a special bowl.We used HTML,CSS,Java-Script.We implement functionality like home,menu,about us,campaign pages. Team of 5 members."
            }
            techStack={[
              "tech/html_img.png",
              "tech/css.png",
              "tech/js.jpg",
              "tech/express.png",
              "tech/node.webp",
              "tech/mongo.png",
              "tech/postman.png",
            ]}
            imges={["bowl.png", "bowl2.png", "bowl3.png"]}
            links={[
              "https://the-bowl-company.vercel.app/",
              "https://github.com/MadhanM282/the-bowl-company",
              // "https://player.vimeo.com/video/689858338?h=1e538fdf27",
            ]}
          />
        </div>
        <div className="top_right mt" data-aos={"zoom-in-down"}>
          <Toproject
            projectdata={"Meesho Clone"}
            description={
              "Our project is regarding cloning meesho website, an online shopping store to buy various products Features:Sign-in/Sign-up User authentication Product details & Purchase page. Tech Stack: HTML | CSS | Javascript. "
            }
            techStack={[
              // "tech/html5.svg", "tech/css3.svg", "tech/js.svg"
              "tech/html_img.png",
              "tech/css.png",
              "tech/js.jpg",
            ]}
            imges={["meesho1.png", "meesho2.png", "meesho3.png"]}
            links={[
              "https://meesho-clone-teal.vercel.app/",
              "https://github.com/pooja171195/meeshoClone",
              // "https://player.vimeo.com/video/689858253?h=1744dc5262",
            ]}
          />
        </div>
        
        <div
          className="stack-header"
          style={{ marginBottom: "45px" }}
          data-aos={"fade-right"}
        >
          <p className="highlight">Mini Project's</p>
        </div>
        <div className="project_div">
          <Projects />
        </div>

        <div className="github_div">
            <GitHub/>
        </div>
      </div>
      <div id="contact" style={{ height: "15vh" }}></div>
      <Footer />
    </div>
  );
}

export default App;
