import linkedInLogo from "../assets/images/linkedin.png";
import resumeFile from "../assets/pds_dev_resume.pdf";
import resumeLogo from "../assets/images/resume-icon.png";

const linkedInLink = "https://www.linkedin.com/in/paulsong11/";

const links = [
  {
    logo: linkedInLogo,
    path: linkedInLink,
  },
  {
    logo: resumeLogo,
    path: resumeFile,
  },
];

export default function Links() {
  return (
    <div className="inline-flex block">
      {links &&
        links.map((link, idx) => (
          <div key={idx} className="flex justify-center px-4">
            <a
              className=" bg-white rounded-md  gap-2 mt-4"
              target="_blank"
              rel="noopener noreferrer"
              href={link.path}
            >
              <img
                src={link.logo}
                alt="Linkedin Logo"
                className="h-28 w-28 object-contain"
              />
            </a>
          </div>
        ))}
    </div>
  );
}
