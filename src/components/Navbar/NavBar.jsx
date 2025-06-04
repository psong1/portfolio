import { Link } from "react-router-dom";

const linkClasses = "text-white hover:text-amber-200";

export default function NavBar() {
  return (
    <div className="w-full fixed top-0 z-50 justify-center right-0.5">
      <nav className="inline-flex justify-center py-4">
        <ul className="flex gap-8">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about" className={linkClasses}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/projects">PROJECTS</Link>
          </li>
          <li>
            <Link to="contact">CONTACT</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
