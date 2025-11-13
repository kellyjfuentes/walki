
export type AppScreen = 'Inicio' | 'Explorar' | 'Medallas' | 'Comunidad' | 'Perfil';

export interface Destination {
  id: number;
  name: string;
  description: string;
  altitude: number;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzada';
  category: 'Tierra' | 'Roca' | 'Nieve' | 'Acuático';
  imageUrl: string;
}
