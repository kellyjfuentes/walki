
import React from 'react';
import { RouteIcon, MountainIcon, ClockIcon } from './icons/MiniIcons';

const StatCard: React.FC<{ icon: React.ReactNode; value: string; label: string }> = ({ icon, value, label }) => (
    <div className="flex-1 p-4 bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center text-center">
        <div className="mb-2 text-green-700">{icon}</div>
        <p className="text-xl font-bold text-gray-800">{value}</p>
        <p className="text-xs text-gray-500">{label}</p>
    </div>
);

const ProfileScreen: React.FC = () => {
    return (
        <div className="p-4 space-y-6">
            <header className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">¡Hola, Diego!</h1>
                    <p className="text-gray-500">¿Listo para tu próxima aventura?</p>
                </div>
                <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
            </header>

            <div className="p-4 bg-white rounded-2xl shadow-sm">
                <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-gray-800">Nivel 5</span>
                    <span className="text-xs text-gray-500">4000 / 5000 XP</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
                <p className="text-xs text-center text-gray-500 mt-2">1000 XP para el siguiente nivel</p>
            </div>

            <div className="flex space-x-4">
                <StatCard icon={<RouteIcon className="w-6 h-6" />} value="12" label="Rutas" />
                <StatCard icon={<MountainIcon className="w-6 h-6" />} value="103 km" label="Altitud" />
                <StatCard icon={<ClockIcon className="w-6 h-6" />} value="182 h" label="Tiempo" />
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-800">Última Actividad</h3>
                <div className="bg-white rounded-2xl shadow-sm flex p-3 items-center space-x-4">
                    <img src="https://picsum.photos/200/200?image=106" alt="Pico del Águila" className="w-20 h-20 rounded-xl object-cover" />
                    <div>
                        <h4 className="font-bold text-gray-900">Pico del Águila</h4>
                        <p className="text-sm text-gray-500 mt-1">Lorem ipsum dolor sit amet consectetur adipiscing elit, hendrerit a porta fermentum lacus.</p>
                        <p className="text-xs text-gray-400 mt-2">Hace 2 días</p>
                    </div>
                </div>
            </div>

            <div className="space-y-2">
                <h3 className="text-lg font-bold text-gray-800">Reto Semanal</h3>
                <div className="bg-white rounded-2xl shadow-sm p-4">
                    <p className="font-semibold text-gray-800">Conquistador de Alturas</p>
                    <p className="text-sm text-gray-500">Completa 3 rutas de más 1500m</p>
                    <div className="flex justify-between items-center mt-3 mb-1">
                        <span className="text-xs text-gray-500">Progreso</span>
                        <span className="text-xs font-semibold text-gray-600">2/3</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '66.6%' }}></div>
                    </div>
                </div>
            </div>

            <div className="pt-4">
                <button className="w-full py-4 bg-green-700 text-white font-bold rounded-full hover:bg-green-800 transition-transform transform hover:scale-105 shadow-lg">
                    + Nueva Actividad
                </button>
            </div>
        </div>
    );
};

export default ProfileScreen;
