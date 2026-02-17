import headshotImg from "../../assets/images/headshot.png";
import "./Home.css";

export default function Home() {
  // const scrollToSection = (id) => {
  //   const element = document.getElementById(id);
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth", block: "start" });
  //   }
  // };

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-image-wrapper">
          <div className="home-image-border">
            <img
              className="home-image"
              src={headshotImg}
              alt="image of Paul Song"
            />
          </div>
        </div>

        <div className="home-text-content">
          <h1 className="home-title">
            Hi, I'm <span className="home-title-accent">Paul Song</span>
          </h1>
          <p className="home-subtitle">Full-Stack Developer</p>

          <p className="home-description">
            Experienced in providing solutions to complex problems and building
            user-friendly applications.
          </p>

          <div className="home-buttons"></div>
        </div>
      </div>
    </div>
  );
}
