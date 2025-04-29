import homeIcon from '../../../assets/icons/home.svg';
import projectsIcon from '../../../assets/icons/projects.svg';
import certificatesIcon from '../../../assets/icons/certificates.svg';
import contractIcon from '../../../assets/icons/contract.svg';
import commentsIcon from '../../../assets/icons/comments.svg';
import SidebarButton from './SidebarButton';
import './Sidebar.css';
import { useScrollVisibility } from '../../../hooks/useScrollVisibility';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

function Sidebar({ activeSection, setActiveSection }: SidebarProps) {
  const isVisible = useScrollVisibility(1000);

  const buttons = [
    { id: 'home', icon: <img src={homeIcon} alt="Home" />, label: 'Home' },
    { id: 'contact', icon: <img src={contractIcon} alt="Contact" />, label: 'Contact' },
    { id: 'projects', icon: <img src={projectsIcon} alt="Projects" />, label: 'Projects' },
    { id: 'certificates', icon: <img src={certificatesIcon} alt="Certificates" />, label: 'Certificates' },
    { id: 'testimonials', icon: <img src={commentsIcon} alt="Testimonials" />, label: 'Testimonials' },
  ];

  return (
    <div className={`sidebar ${isVisible ? 'visible' : ''}`}>
      {buttons.map(button => (
        <SidebarButton
          key={button.id}
          icon={button.icon}
          isActive={activeSection === button.id}
          onClick={() => setActiveSection(button.id)}
          label={button.label}
        />
      ))}
    </div>
  );
}

export default Sidebar;