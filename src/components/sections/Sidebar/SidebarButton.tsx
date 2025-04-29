import './SidebarButton.css';

interface SidebarButtonProps {
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
  label: string;
}

function SidebarButton({ icon, isActive, onClick, label }: SidebarButtonProps) {
  return (
    <button 
      className={`sidebar-button ${isActive ? 'active' : ''}`} 
      onClick={onClick}
      title={label}
    >
      {icon}
    </button>
  );
}

export default SidebarButton;