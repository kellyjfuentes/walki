
import React from 'react';
import { HomeIcon, ExploreIcon, MedalIcon, CommunityIcon, ProfileIcon } from './icons/NavIcons';
import { AppScreen } from '../types';

interface BottomNavProps {
  activeScreen: AppScreen;
  setActiveScreen: (screen: AppScreen) => void;
}

const NavItem: React.FC<{
  label: AppScreen;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, icon, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-1/5 pt-2 pb-1 transition-colors duration-200 ${
      isActive ? 'text-green-700' : 'text-gray-400 hover:text-green-600'
    }`}
  >
    {icon}
    <span className="text-xs mt-1">{label}</span>
  </button>
);

const BottomNav: React.FC<BottomNavProps> = ({ activeScreen, setActiveScreen }) => {
  const navItems: { label: AppScreen; icon: React.ReactNode }[] = [
    { label: 'Inicio', icon: <HomeIcon /> },
    { label: 'Explorar', icon: <ExploreIcon /> },
    { label: 'Medallas', icon: <MedalIcon /> },
    { label: 'Comunidad', icon: <CommunityIcon /> },
    { label: 'Perfil', icon: <ProfileIcon /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 w-full max-w-md mx-auto bg-white border-t border-gray-200 shadow-t-lg">
      <div className="flex justify-around">
        {navItems.map((item) => (
          <NavItem
            key={item.label}
            label={item.label}
            icon={item.icon}
            isActive={activeScreen === item.label}
            onClick={() => setActiveScreen(item.label)}
          />
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
