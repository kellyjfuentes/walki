
import React, { useState, useEffect } from 'react';
import { Destination } from '../types';
import { SearchIcon, MapPinIcon } from './icons/MiniIcons';

const mockDestinations: Destination[] = [
  { id: 1, name: "Pico del Águila", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, hendrerit a porta fermentum lacus.", altitude: 2829, difficulty: "Avanzada", category: "Roca", imageUrl: "https://picsum.photos/400/300?image=106" },
  { id: 2, name: "Sendero del Bosque", description: "Hac magnis class metus risus per dapibus iaculis vestibulum nec.", altitude: 1100, difficulty: "Principiante", category: "Tierra", imageUrl: "https://picsum.photos/400/300?image=119" },
  { id: 3, name: "Glaciar Escondido", description: "Porta fermentum lacus, hac magnis class metus risus per dapibus iaculis vestibulum nec.", altitude: 3500, difficulty: "Avanzada", category: "Nieve", imageUrl: "https://picsum.photos/400/300?image=25" },
  { id: 4, name: "Cañón del Río Verde", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, hendrerit a porta.", altitude: 850, difficulty: "Intermedio", category: "Acuático", imageUrl: "https://picsum.photos/400/300?image=1015" },
  { id: 5, name: "Ruta de las Cascadas", description: "Metus risus per dapibus iaculis vestibulum nec.", altitude: 1300, difficulty: "Principiante", category: "Tierra", imageUrl: "https://picsum.photos/400/300?image=1037" },
];

const categories = ['Todos', 'Tierra', 'Roca', 'Nieve', 'Acuático'];

const DifficultyBadge: React.FC<{ difficulty: Destination['difficulty'] }> = ({ difficulty }) => {
    const colorMap = {
        Principiante: 'bg-green-500 text-white',
        Intermedio: 'bg-yellow-500 text-white',
        Avanzada: 'bg-red-500 text-white',
    };
    return <span className={`absolute top-2 right-2 text-xs font-bold px-2 py-1 rounded-full ${colorMap[difficulty]}`}>{difficulty}</span>;
};


const ExploreScreen: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [location, setLocation] = useState<GeolocationPosition | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleGetLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation(position);
                    setError(null);
                },
                (err) => {
                    setError(`Error al obtener la ubicación: ${err.message}`);
                }
            );
        } else {
            setError("La geolocalización no es soportada por este navegador.");
        }
    };

    const filteredDestinations = activeCategory === 'Todos'
        ? mockDestinations
        : mockDestinations.filter(d => d.category === activeCategory);

    return (
        <div className="p-4 space-y-6">
            <header className="flex items-center justify-between">
                {/* Placeholder for boot icon from wireframe */}
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
            </header>

            <div className="relative">
                <input 
                    type="text" 
                    placeholder="Buscar destinos..." 
                    className="w-full pl-10 pr-4 py-3 bg-gray-100 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            </div>

            <div className="p-4 bg-white rounded-2xl shadow-sm text-center">
                <h3 className="text-lg font-bold text-gray-800">Mapa Interactivo</h3>
                <p className="text-sm text-gray-500 mt-1 mb-3">Descubre lugares cercanos a ti.</p>
                {location ? (
                    <div className="text-sm text-green-600">
                        Ubicación: {location.coords.latitude.toFixed(4)}, {location.coords.longitude.toFixed(4)}
                        <div className="h-40 bg-gray-200 mt-2 rounded-lg flex items-center justify-center text-gray-500">
                           [Aquí se mostraría el mapa de Google Maps]
                        </div>
                    </div>
                ) : (
                    <button onClick={handleGetLocation} className="flex items-center justify-center mx-auto px-4 py-2 bg-green-600 text-white rounded-full text-sm font-semibold hover:bg-green-700 transition">
                       <MapPinIcon className="w-4 h-4 mr-2"/> Activar ubicación
                    </button>
                )}
                {error && <p className="text-xs text-red-500 mt-2">{error}</p>}
            </div>

            <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Categorías</h3>
                <div className="flex space-x-2 overflow-x-auto pb-2">
                    {categories.map(cat => (
                        <button 
                            key={cat} 
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors whitespace-nowrap ${activeCategory === cat ? 'bg-green-700 text-white' : 'bg-white text-gray-700 border'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">Destinos</h3>
                <div className="space-y-4">
                    {filteredDestinations.map(dest => (
                        <div key={dest.id} className="bg-white rounded-2xl shadow-sm overflow-hidden flex">
                            <img src={dest.imageUrl} alt={dest.name} className="w-1/3 object-cover"/>
                            <div className="p-4 flex flex-col justify-between w-2/3 relative">
                                <DifficultyBadge difficulty={dest.difficulty} />
                                <div>
                                    <h4 className="font-bold text-gray-900">{dest.name}</h4>
                                    <p className="text-xs text-gray-500 mt-1">{dest.description}</p>
                                    <p className="text-xs text-gray-400 mt-2">{dest.altitude} m</p>
                                </div>
                                <button className="mt-3 w-full text-center px-3 py-1.5 border border-green-600 text-green-600 rounded-full text-xs font-semibold hover:bg-green-50 transition">
                                    + Agregar a Checklist
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ExploreScreen;
