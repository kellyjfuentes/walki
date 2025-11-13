# WALKi - Tu compañero de montaña 🏔️

![WALKi Banner](https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6)

WALKi es una aplicación web progresiva diseñada para excursionistas y amantes de la montaña. Descubre nuevos destinos, rastrea tu actividad, visualiza rutas en un mapa interactivo y conecta con una comunidad de aventureros.

## ✨ Características

- 🗺️ **Mapa Interactivo**: Integración con Google Maps para visualizar destinos cercanos
- 📍 **Geolocalización**: Encuentra rutas y destinos cerca de tu ubicación
- 🏆 **Sistema de Niveles**: Gana XP y sube de nivel completando actividades
- 🎯 **Retos Semanales**: Desafíos para mantener tu motivación
- 📊 **Estadísticas**: Seguimiento de rutas, altitud acumulada y tiempo de actividad
- 🏔️ **Categorías**: Filtra destinos por tipo (Tierra, Roca, Nieve, Acuático)
- 👥 **Comunidad**: Comparte tus experiencias con otros excursionistas

## 🛠️ Tecnologías

- **Vanilla JavaScript** (ES6 Modules)
- **HTML5** & **CSS3**
- **Tailwind CSS** (vía CDN)
- **Google Maps API**
- **GitHub Pages** (Deployment)

## 📁 Estructura del Proyecto

```
walki/
├── .github/
│   └── workflows/
│       └── static.yml          # GitHub Actions para deployment
├── js/
│   ├── main.js                 # Lógica principal y orquestación
│   ├── data.js                 # Datos mock de destinos
│   ├── icons.js                # Componentes SVG
│   ├── map.js                  # Integración Google Maps
│   └── templates/
│       ├── SplashScreen.js     # Pantalla de carga
│       ├── OnboardingScreen.js # Login/Registro
│       ├── MainApp.js          # Estructura principal
│       ├── ProfileScreen.js    # Perfil de usuario
│       └── ExploreScreen.js    # Exploración de destinos
├── index.html                  # Punto de entrada
├── style.css                   # Estilos personalizados
├── metadata.json               # Metadata del proyecto
├── .gitignore                  # Archivos ignorados por Git
└── README.md                   # Este archivo
```

## 🚀 Instalación y Uso Local

### Prerrequisitos

- Un navegador web moderno
- Un servidor local (por ejemplo, Live Server de VS Code)

### Pasos

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/walki.git
   cd walki
   ```

2. **Configura tu API Key de Google Maps:**
   
   Abre `js/map.js` y reemplaza la clave de API:
   ```javascript
   const GOOGLE_MAPS_API_KEY = 'TU_CLAVE_AQUI';
   ```
   
   > 💡 Obtén tu clave gratuita en [Google Cloud Console](https://console.cloud.google.com/)

3. **Inicia un servidor local:**
   
   - **Usando Python:**
     ```bash
     python -m http.server 8000
     ```
   
   - **Usando Node.js (npx):**
     ```bash
     npx serve
     ```
   
   - **Usando VS Code:**
     Instala la extensión "Live Server" y haz clic derecho en `index.html` → "Open with Live Server"

4. **Abre tu navegador:**
   ```
   http://localhost:8000
   ```

## 🌐 Deployment en GitHub Pages

El proyecto está configurado para desplegarse automáticamente en GitHub Pages usando GitHub Actions.

### Configuración Inicial

1. **Habilita GitHub Pages:**
   - Ve a Settings → Pages
   - En "Source", selecciona "GitHub Actions"

2. **Push a la rama main:**
   ```bash
   git add .
   git commit -m "Deploy WALKi"
   git push origin main
   ```

3. **El workflow se ejecutará automáticamente** y tu app estará disponible en:
   ```
   https://tu-usuario.github.io/walki/
   ```

### Workflow de Deployment

El archivo `.github/workflows/static.yml` maneja el deployment automático:

```yaml
# Se ejecuta en cada push a main
# Despliega todo el contenido estático
# No requiere configuración adicional
```

## 🎨 Personalización

### Cambiar Datos de Destinos

Edita `js/data.js` para agregar tus propios destinos:

```javascript
export const mockDestinations = [
  {
    id: 1,
    name: "Tu Montaña",
    description: "Descripción del lugar",
    altitude: 2500,
    difficulty: "Intermedio",
    category: "Roca",
    imageUrl: "url-de-imagen",
    latitude: 40.85,
    longitude: -3.85
  }
];
```

### Modificar Estilos

- **Tailwind CSS**: Modifica las clases directamente en los templates
- **CSS Personalizado**: Edita `style.css` para animaciones y estilos únicos

## 📱 Responsive Design

WALKi está optimizado para:
- 📱 Mobile (320px - 480px)
- 📱 Tablet (481px - 768px)
- 💻 Desktop (769px+)

El diseño es mobile-first con un ancho máximo de `max-w-md` centrado.

## 🔒 Seguridad

> ⚠️ **Importante**: La API Key de Google Maps está expuesta en el código cliente. Para producción:
> - Restringe la clave por dominio en Google Cloud Console
> - Considera usar un backend proxy para proteger la clave
> - Limita las APIs habilitadas solo a Maps JavaScript API

## 🤝 Contribuciones

Las contribuciones son bienvenidas:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Kelly** - Desarrollo con apoyo de AI Studio

## 🙏 Agradecimientos

- Iconos y componentes visuales diseñados con SVG personalizado
- Imágenes de ejemplo de [Picsum Photos](https://picsum.photos)
- Inspiración de la comunidad de excursionistas

---

<div align="center">
  <p>Hecho con ❤️ para los amantes de la montaña</p>
  <p>
    <a href="https://tu-usuario.github.io/walki/">Ver Demo</a> •
    <a href="https://github.com/tu-usuario/walki/issues">Reportar Bug</a> •
    <a href="https://github.com/tu-usuario/walki/issues">Solicitar Feature</a>
  </p>
</div>