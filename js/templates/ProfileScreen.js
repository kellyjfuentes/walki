import { RouteIcon, MountainIcon, ClockIcon } from '../icons.js';

export const ProfileScreen = () => `
  <div id="screen-Inicio" class="p-4 space-y-6">
      <header class="flex items-center justify-between">
          <div>
              <h1 class="text-2xl font-bold text-gray-800">¡Hola, Diego!</h1>
              <p class="text-gray-500">¿Listo para tu próxima aventura?</p>
          </div>
          <div class="w-16 h-16 bg-gray-200 rounded-full"></div>
      </header>
      <div class="p-4 bg-white rounded-2xl shadow-sm">
          <div class="flex justify-between items-center mb-1"><span class="font-bold text-gray-800">Nivel 5</span><span class="text-xs text-gray-500">4000 / 5000 XP</span></div>
          <div class="w-full bg-gray-200 rounded-full h-2.5"><div class="bg-green-600 h-2.5 rounded-full" style="width: 80%;"></div></div>
          <p class="text-xs text-center text-gray-500 mt-2">1000 XP para el siguiente nivel</p>
      </div>
      <div class="flex space-x-4">
          <div class="flex-1 p-4 bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center text-center"><div class="mb-2 text-green-700">${RouteIcon("w-6 h-6")}</div><p class="text-xl font-bold text-gray-800">12</p><p class="text-xs text-gray-500">Rutas</p></div>
          <div class="flex-1 p-4 bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center text-center"><div class="mb-2 text-green-700">${MountainIcon("w-6 h-6")}</div><p class="text-xl font-bold text-gray-800">103 km</p><p class="text-xs text-gray-500">Altitud</p></div>
          <div class="flex-1 p-4 bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center text-center"><div class="mb-2 text-green-700">${ClockIcon("w-6 h-6")}</div><p class="text-xl font-bold text-gray-800">182 h</p><p class="text-xs text-gray-500">Tiempo</p></div>
      </div>
      <div class="space-y-2">
          <h3 class="text-lg font-bold text-gray-800">Última Actividad</h3>
          <div class="bg-white rounded-2xl shadow-sm flex p-3 items-center space-x-4">
              <img src="https://picsum.photos/200/200?image=106" alt="Pico del Águila" class="w-20 h-20 rounded-xl object-cover" />
              <div><h4 class="font-bold text-gray-900">Pico del Águila</h4><p class="text-sm text-gray-500 mt-1">Lorem ipsum dolor sit amet consectetur adipiscing elit, hendrerit a porta fermentum lacus.</p><p class="text-xs text-gray-400 mt-2">Hace 2 días</p></div>
          </div>
      </div>
      <div class="space-y-2">
          <h3 class="text-lg font-bold text-gray-800">Reto Semanal</h3>
          <div class="bg-white rounded-2xl shadow-sm p-4"><p class="font-semibold text-gray-800">Conquistador de Alturas</p><p class="text-sm text-gray-500">Completa 3 rutas de más 1500m</p><div class="flex justify-between items-center mt-3 mb-1"><span class="text-xs text-gray-500">Progreso</span><span class="text-xs font-semibold text-gray-600">2/3</span></div><div class="w-full bg-gray-200 rounded-full h-2"><div class="bg-yellow-500 h-2 rounded-full" style="width: 66.6%;"></div></div></div>
      </div>
      <div class="pt-4"><button class="w-full py-4 bg-green-700 text-white font-bold rounded-full hover:bg-green-800 transition-transform transform hover:scale-105 shadow-lg">+ Nueva Actividad</button></div>
  </div>
`;
