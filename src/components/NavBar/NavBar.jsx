import { useState, useEffect } from "react";
import "./NavBar.css";

const navItems = [
  { name: "HOME", id: "home" },
  { name: "ABOUT", id: "about" },
  { name: "PROJECTS", id: "projects" },
  { name: "CONTACT", id: "contact" },
];

export default function NavBar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Prefer IntersectionObserver for reliable section tracking
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    if (!("IntersectionObserver" in window) || sections.length === 0) {
      // Fallback to scroll handler if IntersectionObserver is not available
      const handleScroll = () => {
        const viewportCenter = window.innerHeight / 2;

        let current = "home";
        navItems.forEach((item) => {
          const element = document.getElementById(item.id);
          if (!element) return;

          const rect = element.getBoundingClientRect();
          if (rect.top <= viewportCenter && rect.bottom >= viewportCenter) {
            current = item.id;
          }
        });

        setActiveSection(current);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();

      return () => window.removeEventListener("scroll", handleScroll);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the section with the greatest visible area
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
        // Trigger updates as visibility changes
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
  };

  return (
    <nav className="navbar-container">
      <ul className="navbar-list">
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <li
              key={item.id}
              className={`navbar-item ${isActive ? "navbar-item-active" : ""}`}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className="navbar-link"
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
