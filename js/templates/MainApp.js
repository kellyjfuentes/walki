import { ProfileScreen } from './ProfileScreen.js';
import { ExploreScreen } from './ExploreScreen.js';
import { HomeIcon, ExploreIcon, MedalIcon, CommunityIcon, ProfileIcon } from '../icons.js';

export const MainApp = () => `
  <div id="app-container" class="bg-gray-50 min-h-screen font-sans w-full max-w-md mx-auto shadow-lg relative pb-20">
      <main class="overflow-y-auto">
        ${ProfileScreen()}
        ${ExploreScreen()}
        <div id="screen-Medallas" class="p-4 text-center" style="display: none;">Medallas - Próximamente</div>
        <div id="screen-Comunidad" class="p-4 text-center" style="display: none;">Comunidad - Próximamente</div>
        <div id="screen-Perfil" class="p-4 space-y-6" style="display: none;">${ProfileScreen().replace('id="screen-Inicio"','')}</div>
      </main>
      <div class="fixed bottom-0 left-0 right-0 w-full max-w-md mx-auto bg-white border-t border-gray-200 shadow-t-lg">
          <div id="bottom-nav" class="flex justify-around"></div>
      </div>
  </div>
`;

export function renderBottomNav(activeScreen) {
  const navItems = [
    { label: 'Inicio', icon: HomeIcon() }, { label: 'Explorar', icon: ExploreIcon() },
    { label: 'Medallas', icon: MedalIcon() }, { label: 'Comunidad', icon: CommunityIcon() },
    { label: 'Perfil', icon: ProfileIcon() },
  ];
  const navContainer = document.getElementById('bottom-nav');
  if (navContainer) {
    navContainer.innerHTML = navItems.map(item => `
      <button data-screen="${item.label}" class="nav-item flex flex-col items-center justify-center w-1/5 pt-2 pb-1 transition-colors duration-200 ${activeScreen === item.label ? 'text-green-700' : 'text-gray-400 hover:text-green-600'}">
        ${item.icon}
        <span class="text-xs mt-1">${item.label}</span>
      </button>
    `).join('');
  }
}
