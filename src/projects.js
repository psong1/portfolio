import javaLogo from "./assets/images/tech-logos/java-logo.png";
import mysqlLogo from "./assets/images/tech-logos/mysql-logo.png";
import reactLogo from "./assets/images/tech-logos/react-logo.png";
import nodeLogo from "./assets/images/tech-logos/node-logo.png";
import expressLogo from "./assets/images/tech-logos/express-js.png";
import sequelize from "./assets/images/tech-logos/sequelize.png";
import springBootLogo from "./assets/images/tech-logos/sb-logo.svg";
import pythonLogo from "./assets/images/tech-logos/python-logo.png";
import fastAPILogo from "./assets/images/tech-logos/fastapi-logo.jpg";
import pyTorchLogo from "./assets/images/tech-logos/pytorch-logo.png";
import matplotlibLogo from "./assets/images/tech-logos/mpl-logo.webp";
import vueLogo from "./assets/images/tech-logos/vue-logo.png";
import scikitLearnLogo from "./assets/images/tech-logos/scikit-learn-logo.png";
import pandasLogo from "./assets/images/tech-logos/pandas-logo.png";

const PROJECTS = [
  {
    name: "Z - Employee Management System",
    tech: ["Java", "MySQL", "React", "Express.js", "Node.js"],
    category: "Full-Stack",
    description: `This project was created to simulate a real-life employee management system, where an admin is allowed to perform CRUD operations and full-time employees are only able to view their data. \
    Z is a company with 40 full-time employees and will triple their workforce within the next 18 months. \
    We have provided them a new employee management system that will help them maintain their employee data as it continues to grow.`,
    images: [javaLogo, mysqlLogo, reactLogo, nodeLogo, expressLogo],
    link: "https://github.com/psong1/z-ems",
  },
  {
    name: "runWRLD",
    tech: ["MySQL", "React", "Express.js", "Node.js"],
    category: "Full-Stack",
    description:
      "A web application that allows users to search for track and field stadiums and their respective information. \
      Users that are registered and logged in are able to save tracks to their profile. The goal is for users to be able to find nearby tracks and if they are available to the public. \
      This application will be beneficial for those that want to train on a track, but do not know if they are available to the public.",
    images: [mysqlLogo, sequelize, reactLogo, nodeLogo, expressLogo],
    link: "https://github.com/psong1/runWRLD",
  },
  {
    name: "Lord Byron's Enterprises",
    tech: ["Java", "MySQL", "Spring Boot", "React"],
    category: "Full-Stack",
    description:
      "An e-commerce data solution for a small business in Eleuthera, Bahamas, which allows them to manage their inventory, sales, customers, and employess. \
      This user-friendly application is designed for their specific workflow and staff. It incorporates features such as role-based access control, inventory management, sales tracking, \
      and customer management.",
    images: [javaLogo, mysqlLogo, springBootLogo, reactLogo],
    link: "https://github.com/psong1/lord-byron-enterprises",
  },
  {
    name: "careQueue",
    tech: ["Python", "FastAPI", "Vue.js", "PostgreSQL"],
    category: "Full-Stack",
    description: "A full-stack medical admission dashboard designed to streamline patient intake and triage. \
    This application demonstrates a modern FastAPI + Vue 3 + PostgreSQL architechture with a focus on clean, modular code and healthcare domain efficiency.",
    images: [pythonLogo, fastAPILogo, vueLogo],
    link: "https://github.com/psong1/carequeue"
  },
  {
    name: "Deepfake Detection",
    tech: ["Python", "PyTorch", "Matplotlib"],
    category: "Machine Learning",
    description: "A modular, hardware-accelerated deep learning pipeline designed to detect facial manipulations in images in videos. \
    This projects utilizes ResNet18 backbone for spatial feature extraction and MTCNN for robust face localization, optimized for NVIDIA RTX 40-series GPUs.",
    images: [pythonLogo, pyTorchLogo, matplotlibLogo],
    link: "https://github.com/psong1/deepfake-detection"
  },
  {
    name: "Spam vs. Ham: Email Classifier",
    tech: ["Python", "Scikit-Learn", "Pandas"],
    category: "Machine Learning",
    description: "A machine learning model that classifies emails as spam or ham using the Scikit-Learn library. \
    This project uses a Naive Bayes classifier to classify emails based on their content and features.",
    images: [pythonLogo, scikitLearnLogo, pandasLogo],
    link: "https://github.com/psong1/spam-vs-ham-email-classifier"
  },
  {
    name: "Classification",
    tech: ["Python", "Scikit-Learn", "Pandas"],
    category: "Machine Learning",
    description: "This project trains and evaluates classification models on four related datasets, automatically choosing\
     an appropriate pipeline for high‑dimensional and low‑dimensional feature spaces.",
    images: [pythonLogo, scikitLearnLogo, pandasLogo],
    link: "https://github.com/psong1/classification"
  }
];

export default PROJECTS;
