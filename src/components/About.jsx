import React from "react";

function AboutMe() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 text-white">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        About Me
      </h1>
      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-8 shadow-lg">
        <p className="text-lg leading-relaxed">
          My name is Paul Song and I am from Milledgeville, Georgia. I earned a
          B.S. Ed in Exercise Science from UGA and a Full-Stack Web Development
          Certificate from Georgia Tech. Currently, I am pursuing a B.S. in
          Computer Science to deepen my understanding of computing fundamentals.
          I have four years of professional work experience at Emory Healthcare
          where I served as a Patient Access Scheduler and helped manage an
          inpatient rehab facility. My passion lies in solving complex problems
          with technology, which is why I am dedicated to becoming a full-time
          software engineer.
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
