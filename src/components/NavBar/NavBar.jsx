import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navItems = [
  { name: "HOME", id: "home" },
  { name: "ABOUT", id: "about" },
  { name: "PROJECTS", id: "projects" },
  { name: "CONTACT", id: "contact" },
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((e) => e.isIntersecting);
        if (!visibleEntries.length) return;

        const mostVisible = visibleEntries.reduce((max, entry) =>
          entry.intersectionRatio > max.intersectionRatio ? entry : max,
        );

        const id = mostVisible.target.id;
        if (id) {
          setActiveSection(id);
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Mobile Hamburger Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 right-4 z-[60] p-2 bg-black/50 backdrop-blur-md rounded-lg text-white hover:text-[#3bbbf6] transition-colors"
      >
        {isMobileMenuOpen ? (
          <XMarkIcon className="h-8 w-8" />
        ) : (
          <Bars3Icon className="h-8 w-8" />
        )}
      </button>

      {/* NavBar Content */}
      <nav
        className={`fixed left-0 top-0 h-screen w-full md:w-[200px] bg-black/90 md:bg-black/10 backdrop-blur-md z-50 flex items-center justify-center shadow-[2px_0_10px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        <ul className="list-none m-0 po8 md:p-4 flex flex-col gpa-8 w-full">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li
                key={item.id}
                className={`w-full transition-transform duration-200 ${isActive ? "scale-100" : ""}`}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-center md:text-left bg-none border-none cursor-pointer py-3 px-4 transition-all duration-200 border-l-4 ${
                    isActive
                      ? "text-[#3bbbf6] font-bold text-xl md:text-lg border-[#3bbbf6] bg-blue-500/15"
                      : "text-white font-medium text-2xl md:text-base border-transparent hover:text-[#3bbbf6] hover:border-[#3bbbf6] hover:bg-blue-500/10"
                  } focus:outline-none focus:ring-2 focus:ring-[#3bbbf6] focus:ring-offset-2 focus:ring-offset-black`}
                  aria-label={`Maps to ${item.name}`}
                >
                  {item.name}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
