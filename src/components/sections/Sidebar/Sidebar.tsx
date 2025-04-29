import { useCallback } from 'react';
import homeIcon from "../../../assets/icons/home.svg";
import projectsIcon from "../../../assets/icons/projects.svg";
import certificatesIcon from "../../../assets/icons/certificates.svg";
import contractIcon from "../../../assets/icons/contract.svg";
import commentsIcon from "../../../assets/icons/comments.svg";
import SidebarButton from "./SidebarButton";
import "./Sidebar.css";
import { useScrollVisibility } from "../../../hooks/useScrollVisibility";

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const isVisible = useScrollVisibility(1000);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) {
      console.warn(`Section with id '${sectionId}' not found`);
      return;
    }

    const headerOffset = 80; // ajuste conforme seu header
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const targetPosition = elementPosition - headerOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 600; // ms
    let start: number | null = null;

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min(progress / duration, 1);
      window.scrollTo(0, startPosition + distance * easeInOutQuad(percent));
      if (progress < duration) {
        window.requestAnimationFrame(step);
      }
    }

    function easeInOutQuad(t: number) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    window.requestAnimationFrame(step);

    setTimeout(() => {
      setActiveSection(sectionId.toLowerCase());
    }, duration);
  }, [setActiveSection]);

  const buttons = [
    {
      id: "home",
      icon: <img src={homeIcon} alt="Home" />,
      label: "Home",
      onClick: () => scrollToSection("Home"),
    },
    {
      id: "contact",
      icon: <img src={contractIcon} alt="Contact" />,
      label: "Contact",
      onClick: () => scrollToSection("Contact"),
    },
    {
      id: "projects",
      icon: <img src={projectsIcon} alt="Projects" />,
      label: "Projects",
      onClick: () => scrollToSection("Projects"),
    },
    {
      id: "certificates",
      icon: <img src={certificatesIcon} alt="Certificates" />,
      label: "Certificates",
      onClick: () => scrollToSection("Certificates"),
    },
    {
      id: "testimonials",
      icon: <img src={commentsIcon} alt="Testimonials" />,
      label: "Testimonials",
      onClick: () => scrollToSection("Testimonials"),
    },
  ];

  return (
    <div className={`sidebar ${isVisible ? "visible" : ""}`}>
      {buttons.map((button) => (
        <SidebarButton
          key={button.id}
          icon={button.icon}
          isActive={activeSection === button.id}
          onClick={() => {
            scrollToSection(button.label); 
            setActiveSection(button.id);
          }}
          label={button.label}
        />
      ))}
    </div>
  );
}

export default Sidebar;
