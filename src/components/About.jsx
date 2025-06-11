import pnc10Img from "../assets/images/pnc_10.png";
import peachtreeImg from "../assets/images/peachtree.png";

const images = [peachtreeImg, pnc10Img];

function AboutMe() {
  return (
    <section className="max-w-full px-6 py-12 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        About Me
      </h1>
      <div className="inline-flex justify-center">
        <div className="inline-block">
          {images &&
            images.map((image, idx) => (
              <img
                key={idx}
                src={image}
                className="w-[300px] h-[450px] rounded-lg mb-2"
              />
            ))}
        </div>
        <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 shadow-lg max-w-[50%]">
          <p className="text-lg leading-relaxed">
            In my early career, I wanted to pursue a career in Physical Therapy
            as I had a passion for health, solving problems, and using my skills
            to help others. Many people in my life have contributed so much to
            help me be the person that I am today, and my main goal is to give
            back to them and more. I earned a B.S. Ed in Exercise Science from
            the University of Georgia in 2019 and soon began working at Emory
            Healthcare as a Rehab Tech to gain inpatient experience.
            <br />
            <br />
            During my time at Emory Healthcare, I contributed to a multitude of
            roles. From Rehab Tech to Patient Access Scheduler, I helped manage
            the therapy schedules of an average of 46 patients, assisted during
            therapy treatments for many different diagnoses, and collaborated
            with different departments to ensure an exceptional patient
            experience. This role helped me hone my problem-solving, time
            management, and organizational skills.
            <br />
            <br />
            After four years, I really felt like I needed a change from
            healthcare and decided to pursue a career as a Software Engineer.
            Oddly enough, I remember telling my high school counselor that I
            wanted to study computer science when I entered college. In 2022, I
            enrolled into a Full-Stack Web Development Program offered by
            Georgia Tech's Professional Education, but I also wanted the
            foundational knowledge of computers, which is why I am pursuing a
            B.S. in Computer Science at Georgia State Univeristy.
            <br />
            <br />
            In my spare time, I really enjoy running, which helps me clear my
            mind and stay healthy. This hobby not only keeps me physically
            active but also fuels my determination and discipline—qualities I
            bring into my work as a software engineer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
