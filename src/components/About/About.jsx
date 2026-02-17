import ugaLogo from "../../assets/images/uga-logo.png";
import gsuLogo from "../../assets/images/gsu-logo.jpg";
import emoryLogo from "../../assets/images/emory-hc.png";
import gtLogo from "../../assets/images/gatech-logo.png";
import "./About.css";

const images = [ugaLogo, emoryLogo, gtLogo, gsuLogo];

export default function About() {
  return (
    <section className="about-container">
      <h1 className="about-title">About Me</h1>
      <p className="about-subtitle">
        From healthcare to software engineering - a journey of learning and
        growth.
      </p>

      <div className="about-content">
        <div className="about-images">
          {images.map((image, idx) => (
            <div key={idx} className="about-image-wrapper">
              <img
                src={image}
                alt={`About me image ${idx + 1}`}
                className="about-image"
              />
            </div>
          ))}
        </div>

        <div className="about-text">
          <p className="about-text-content">
            <span className="about-paragraph">
              In 2019, I earned my first degree from the University of Georgia
              which was a Bachelor of Science in Exercise Science. Earning this
              degree taught me the fundamentals of being able to take in
              critical information and be able to solve complex problems. Soon
              after graduating, I began working at Emory Healthcare as a
              Rehabilitation Technician and contributed to a multitude of roles.
              From Rehabilitation Technician to Patient Access Scheduler, I
              helped manage the daily therapy schedules for more than 40
              patients, assisted during therapy treatments for many different
              diagnoses, and collaborated with different departments to ensure
              an exceptional patient experience. This role helped me hone my
              problem-solving, time management, and organizational skills.
            </span>

            <span className="about-paragraph">
              While working at Emory, I graduated from Georgia Tech's
              Professional Education's Full-Stack Web Development Program. This
              program taught me the fundamentals of web development using HTML,
              CSS, JavaScript, and many more technologies. I worked in small
              teams using agile methodologies and worked on projects that helped
              us learn how to make applications that were both functional,
              user-friendly, and aesthetically pleasing.
            </span>

            <span className="about-paragraph">
              My hunger for knowledge and growth led me to pursue a second
              degree in Computer Science from Georgia State University. This
              degree taught me the fundamentals of computer science and how to
              apply these concepts to solve real-world problems. I have a strong
              ability to analyze data, make informed decisions, and work
              collaboratively to achieve goals.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
