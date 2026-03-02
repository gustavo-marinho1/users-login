import { useState, useEffect, useRef } from 'react';
import { Settings, UserCircle, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode
}

const UserDropdown = ({children}: Props) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      
      {/* Trigger */}
      <button onClick={() => setIsOpen(!isOpen)}>
        {children}
      </button>

      {/* Dropdown */}
      <div 
        className={`
          absolute right-0 mt-2 w-48 origin-top-right rounded-md shadow-lg transition-all duration-200 ease-out border
          ${isOpen
            ? 'transform opacity-100 scale-100 translate-y-0 pointer-events-auto' 
            : 'transform opacity-0 scale-95 -translate-y-2 pointer-events-none'
          }
        `}
      >
        <div className="p-1 flex flex-col gap-1">
          <button onClick={() => navigate("/settings")}>
            <Settings className="size-4" /> Settings
          </button>
          <button onClick={() => navigate("/profile")}>
            <UserCircle className="size-4" /> Profile
          </button>
          <button onClick={() => navigate("/login")}>
            <LogOut className="size-4" /> Logout
          </button>
        </div>
      </div>

    </div>
  );
}

export { UserDropdown }