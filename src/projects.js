import javaLogo from "./assets/images/java-logo.png";
import mysqlLogo from "./assets/images/mysql-logo.png";
import reactLogo from "./assets/images/react-logo.png";
import nodeLogo from "./assets/images/node-logo.png";
import expressLogo from "./assets/images/express-js.png";
import sequelize from "./assets/images/sequelize.png";

const PROJECTS = [
  {
    name: "Z - Employee Management System",
    tech: ["Java", "MySQL", "React", "Express.js", "Node.js"],
    description: `This project was created to simulate a real-life employee management system, where an admin is allowed to perform CRUD operations and full-time employees are only able to view their data. \
    Z is a company with 40 full-time employees and will triple their workforce within the next 18 months. \
    We have provided them a new employee management system that will help them maintain their employee data as it continues to grow.`,
    images: [javaLogo, mysqlLogo, reactLogo, nodeLogo, expressLogo],
    link: "https://github.com/psong1/z-ems",
  },
  {
    name: "Track Finder",
    tech: ["MySQL", "React", "Express.js", "Node.js"],
    description:
      "A web application that allows users to search for track and field stadiums and their respective information. \
      Users that are registered and logged in are able to save tracks to their profile. The goal is for users to be able to find nearby tracks and if they are available to the public. \
      This application will be beneficial for those that want to train on a track, but do not know if they are available to the public.",
    images: [mysqlLogo, sequelize, reactLogo, nodeLogo, expressLogo],
    link: "https://github.com/psong1/track-finder",
  },
];

export default PROJECTS;
