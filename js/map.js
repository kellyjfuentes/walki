import { mockDestinations } from './data.js';

const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_MAPS_API_KEY_HERE'; // IMPORTANTE: Reemplazar con tu clave real

function loadGoogleMapsScript(callback) {
  if (typeof google !== 'undefined' && google.maps) {
    callback();
    return;
  }
  if (document.getElementById('googleMapsScript')) {
      document.getElementById('googleMapsScript').addEventListener('load', callback);
      return;
  }
  const script = document.createElement('script');
  script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}`;
  script.id = 'googleMapsScript';
  script.async = true;
  script.defer = true;
  script.onload = callback;
  script.onerror = () => console.error("El script de Google Maps no se pudo cargar.");
  document.head.appendChild(script);
}

export function initMap(userLocation) {
    if (!GOOGLE_MAPS_API_KEY || GOOGLE_MAPS_API_KEY === 'YOUR_GOOGLE_MAPS_API_KEY_HERE') {
        document.getElementById('map-container').innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gray-100 text-center p-4"><p class="text-sm text-gray-600">La clave de API de Google Maps no está configurada.</p></div>';
        return;
    }

    loadGoogleMapsScript(() => {
        const mapContainer = document.getElementById('map-container');
        if (!mapContainer || !userLocation) return;

        const userCoords = { lat: userLocation.coords.latitude, lng: userLocation.coords.longitude };
        const map = new google.maps.Map(mapContainer, {
            center: userCoords, zoom: 9, disableDefaultUI: true, zoomControl: true,
            styles: [{featureType: "poi", stylers: [{ visibility: "off" }]}, {featureType: "transit", stylers: [{ visibility: "off" }]}]
        });
        
        new google.maps.Marker({
            position: userCoords, map: map, title: "Tu ubicación",
            icon: { path: google.maps.SymbolPath.CIRCLE, scale: 8, fillColor: "#4285F4", fillOpacity: 1, strokeColor: "white", strokeWeight: 2 }
        });

        mockDestinations.forEach(dest => {
            const destMarker = new google.maps.Marker({ position: { lat: dest.latitude, lng: dest.longitude }, map: map, title: dest.name });
            const infowindow = new google.maps.InfoWindow({
                content: `<div style="font-family: sans-serif; padding: 5px;"><h3 style="font-weight: bold; font-size: 1rem; margin: 0 0 4px;">${dest.name}</h3><p style="font-size: 0.8rem; color: #555; margin: 0;">${dest.description}</p><p style="font-size: 0.75rem; color: #888; margin: 4px 0 0;">${dest.altitude} m - ${dest.difficulty}</p></div>`
            });
            destMarker.addListener('click', () => infowindow.open({ anchor: destMarker, map }));
        });
    });
}
