import { Link, useLocation } from "react-router-dom";

const baseLinkClasses =
  "text-white hover:text-red-500 transition-colors duration-200";

export default function NavBar() {
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "PROJECTS", path: "/projects" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="bg-black w-full fixed top-0 z-50 justify-center right-0.5">
      <nav className="max-w-5xl mx-auto px-6 py-4">
        <ul className="flex justify-center gap-10">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`${baseLinkClasses} ${
                  location.pathname === item.path
                    ? "text-red-500 font-semibold"
                    : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
