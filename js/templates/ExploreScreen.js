import { BootIcon, SearchIcon, MapPinIcon } from '../icons.js';
import { mockDestinations, categories } from '../data.js';

export const ExploreScreen = () => `
  <div id="screen-Explorar" class="p-4 space-y-6" style="display: none;">
      <header class="flex items-center justify-start">${BootIcon("w-10 h-10")}</header>
      <div class="relative"><input type="text" placeholder="Buscar destinos..." class="w-full pl-10 pr-4 py-3 bg-gray-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-green-500" />${SearchIcon("absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400")}</div>
      <div id="map-widget" class="p-4 bg-white rounded-2xl shadow-sm text-center"></div>
      <div>
          <h3 class="text-lg font-bold text-gray-800 mb-3">Categorías</h3>
          <div id="categories-container" class="flex space-x-2 overflow-x-auto pb-2"></div>
      </div>
      <div>
          <h3 class="text-lg font-bold text-gray-800 mb-3">Destinos</h3>
          <div id="destinations-list" class="space-y-4"></div>
      </div>
  </div>
`;

export function renderExploreContent(userLocation, locationError, handleGetLocation) {
    renderCategories();
    renderMapWidget(userLocation, locationError, handleGetLocation);
    renderDestinations('Todos');
}

function renderCategories() {
  const categoriesContainer = document.getElementById('categories-container');
  if (!categoriesContainer || categoriesContainer.hasChildNodes()) return;

  categories.forEach(cat => {
      const button = document.createElement('button');
      button.textContent = cat;
      button.className = 'px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap bg-white text-gray-700 border';
      button.onclick = () => {
          document.querySelectorAll('#categories-container button').forEach(btn => btn.className = 'px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap bg-white text-gray-700 border');
          button.className = 'px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap bg-green-700 text-white';
          renderDestinations(cat);
      };
      categoriesContainer.appendChild(button);
  });
  categoriesContainer.firstChild.className = 'px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap bg-green-700 text-white';
}

function renderDestinations(category) {
  const listEl = document.getElementById('destinations-list');
  if (!listEl) return;
  const filtered = category === 'Todos' ? mockDestinations : mockDestinations.filter(d => d.category === category);
  
  const difficultyBadge = (difficulty) => {
      const colorMap = { Principiante: 'bg-green-500', Intermedio: 'bg-yellow-500', Avanzada: 'bg-red-500' };
      return `<span class="absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full text-white ${colorMap[difficulty]}">${difficulty}</span>`;
  };
  
  listEl.innerHTML = filtered.map(dest => `
      <div class="bg-white rounded-2xl shadow-sm overflow-hidden flex">
          <img src="${dest.imageUrl}" alt="${dest.name}" class="w-1/3 object-cover"/>
          <div class="p-4 flex flex-col justify-between w-2/3 relative">
              ${difficultyBadge(dest.difficulty)}
              <div>
                  <h4 class="font-bold text-gray-900">${dest.name}</h4>
                  <p class="text-xs text-gray-500 mt-1">${dest.description}</p>
                  <p class="text-xs text-gray-400 mt-2">${dest.altitude} m</p>
              </div>
              <button class="mt-3 w-full text-center px-3 py-1.5 border border-green-600 text-green-600 rounded-full text-xs font-semibold hover:bg-green-50 transition">+ Agregar a Checklist</button>
          </div>
      </div>
  `).join('');
}

export function renderMapWidget(userLocation, locationError, handleGetLocation) {
    const widgetEl = document.getElementById('map-widget');
    if (!widgetEl) return;

    let content = `<h3 class="text-lg font-bold text-gray-800">Mapa Interactivo</h3><p class="text-sm text-gray-500 mt-1 mb-3">Descubre lugares cercanos a ti.</p>`;
    if (locationError) {
        content += `<p class="text-xs text-red-500 mt-2">${locationError}</p>`;
    }
    
    if (userLocation) {
        content += `<div><p class="text-xs text-gray-600 text-center mb-2">Ubicación: ${userLocation.coords.latitude.toFixed(4)}, ${userLocation.coords.longitude.toFixed(4)}</p><div id="map-container" class="h-48 bg-gray-200 mt-2 rounded-lg overflow-hidden shadow-inner"></div></div>`;
    } else {
        content += `<button id="get-location-btn" class="flex items-center justify-center mx-auto px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold hover:bg-green-700 transition">${MapPinIcon("w-4 h-4 mr-2")} Activar ubicación</button>`;
    }
    
    widgetEl.innerHTML = content;
    
    const locationBtn = document.getElementById('get-location-btn');
    if(locationBtn) {
      locationBtn.onclick = handleGetLocation;
    }
}
