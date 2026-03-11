import ugaLogo from "../../assets/images/about-logos/uga-logo.png";
import gsuLogo from "../../assets/images/about-logos/gsu-logo.jpg";
import emoryLogo from "../../assets/images/about-logos/emory-hc.png";
import gtLogo from "../../assets/images/about-logos/gatech-logo.png";

const images = [ugaLogo, emoryLogo, gtLogo, gsuLogo];

export default function About() {
  return (
    <section className="mx-auto py-12 px-6 text-white w-full max-w-[1200px]">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        About Me
      </h1>
      <p className="text-center text-gray-400 mb-8 max-w-2xl mx-auto">
        From healthcare to software engineering - a journey of learning and
        growth.
      </p>

      <div className="flex flex-col items-center gap-12">
        <div className="w-full flex justify-center">
          <div className="inline-block grid grid-cols-2 gap-5 lg:gap-6 max-w-[300px] lg:max-w-[480px]">
            {images.map((image, idx) => (
              <div
                key={idx}
                className="overflow-hidden shadow-2xl rounded-lg aspect-square transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={image}
                  alt={`About me image ${idx + 1}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 shadow-lg w-full lg:w-3/4 border border-white/10 mx-auto">
        <p className="text-base md:text-lg leading-relaxed text-gray-200 flex flex-col gap-4">
          <span className="block">
            In 2019, I earned my first degree from the University of Georgia
            which was a Bachelor of Science in Exercise Science. Earning this
            degree taught me the fundamentals of being able to take in critical
            information and be able to solve complex problems. Soon after
            graduating, I began working at Emory Healthcare as a Rehabilitation
            Technician and contributed to a multitude of roles. From
            Rehabilitation Technician to Patient Access Scheduler, I helped
            manage the daily therapy schedules for more than 40 patients,
            assisted during therapy treatments for many different diagnoses, and
            collaborated with different departments to ensure an exceptional
            patient experience. This role helped me hone my problem-solving,
            time management, and organizational skills.
          </span>

          <span className="block">
            While working at Emory, I graduated from Georgia Tech's Professional
            Education's Full-Stack Web Development Program. This program taught
            me the fundamentals of web development using HTML, CSS, JavaScript,
            and many more technologies. I worked in small teams using agile
            methodologies and worked on projects that helped us learn how to
            make applications that were both functional, user-friendly, and
            aesthetically pleasing.
          </span>

          <span className="block">
            My hunger for knowledge and growth led me to pursue a second degree
            in Computer Science from Georgia State University. This degree
            taught me the fundamentals of computer science and how to apply
            these concepts to solve real-world problems. I have a strong ability
            to analyze data, make informed decisions, and work collaboratively
            to achieve goals.
          </span>
        </p>
      </div>
    </section>
  );
}
