# 📱 Guía de Instalación PWA - WALKi

## 🚀 Paso 1: Preparar los Archivos

### 1.1 Generar los Iconos

1. Abre el archivo `generate-icons.html` en tu navegador
2. Los iconos se generarán automáticamente
3. Descarga cada ícono haciendo clic en "📥 Descargar"
4. Guarda los archivos en la **raíz** de tu proyecto con estos nombres exactos:
   - `icon-72.png`
   - `icon-96.png`
   - `icon-128.png`
   - `icon-144.png`
   - `icon-152.png`
   - `icon-192.png`
   - `icon-384.png`
   - `icon-512.png`

### 1.2 Estructura de Archivos Final

```
walki/
├── index.html          ← Actualizado
├── style.css           ← Actualizado
├── manifest.json       ← NUEVO
├── service-worker.js   ← NUEVO
├── icon-72.png         ← NUEVO
├── icon-96.png         ← NUEVO
├── icon-128.png        ← NUEVO
├── icon-144.png        ← NUEVO
├── icon-152.png        ← NUEVO
├── icon-192.png        ← NUEVO
├── icon-384.png        ← NUEVO
├── icon-512.png        ← NUEVO
├── js/
│   ├── main.js
│   └── ...
└── ...
```

## 🌐 Paso 2: Desplegar en GitHub Pages

### 2.1 Subir los Cambios

```bash
git add .
git commit -m "feat: Convertir a PWA instalable"
git push origin main
```

### 2.2 Verificar el Deployment

1. Ve a tu repositorio en GitHub
2. Click en "Actions" → Verifica que el workflow se ejecute
3. Espera 2-3 minutos
4. Tu PWA estará disponible en: `https://tu-usuario.github.io/walki/`

## 📲 Paso 3: Instalar en Móvil

### En Android (Chrome/Edge)

1. **Abre la URL** en Chrome o Edge: `https://tu-usuario.github.io/walki/`

2. **Verás un banner verde** en la parte superior con el botón "Instalar"
   - Si no aparece, espera unos segundos o recarga la página

3. **Método alternativo** (menú del navegador):
   - Toca el menú (⋮) → "Instalar aplicación" o "Agregar a pantalla de inicio"
   
4. **Confirma la instalación**
   - Toca "Instalar"
   - La app se agregará a tu cajón de aplicaciones

5. **Abre WALKi** desde tu cajón de aplicaciones como cualquier app nativa

### En iOS/iPhone (Safari)

> ⚠️ **Importante**: En iOS solo funciona en Safari, no en Chrome

1. **Abre la URL** en Safari: `https://tu-usuario.github.io/walki/`

2. **Toca el botón de compartir** (el cuadro con flecha hacia arriba)

3. **Desplázate hacia abajo** y toca "Agregar a pantalla de inicio"

4. **Personaliza el nombre** (opcional) y toca "Agregar"

5. **Abre WALKi** desde tu pantalla de inicio como cualquier app

### En Desktop (Chrome/Edge)

1. **Abre la URL** en Chrome o Edge

2. **Busca el ícono de instalación** en la barra de direcciones (➕ o ⬇️)

3. **Click en "Instalar"**

4. **La app se abrirá en su propia ventana** sin barra de navegador

## ✅ Paso 4: Verificar la Instalación

### Comprobar que funciona como PWA:

1. **Abre la app instalada** desde tu dispositivo

2. **Verifica estos indicadores**:
   - ✅ Se abre en pantalla completa (sin barra del navegador)
   - ✅ El ícono de WALKi aparece en tu cajón de apps
   - ✅ Funciona sin conexión (después de la primera carga)

3. **Prueba el modo offline**:
   - Abre la app
   - Activa modo avión
   - La app debe seguir funcionando (excepto el mapa)

## 🔍 Troubleshooting

### El banner de instalación no aparece

**Soluciones:**
1. Asegúrate de estar usando **HTTPS** (GitHub Pages lo tiene por defecto)
2. Verifica que `manifest.json` esté accesible: `https://tu-url/manifest.json`
3. Abre DevTools (F12) → Console → Busca errores
4. Recarga la página con Ctrl+Shift+R (o Cmd+Shift+R en Mac)

### Los iconos no se muestran

**Soluciones:**
1. Verifica que los archivos `icon-*.png` estén en la raíz del proyecto
2. Abre DevTools → Network → Busca los archivos de iconos (deben devolver 200)
3. Revisa que los nombres sean exactos (sin mayúsculas)

### El Service Worker no se registra

**Soluciones:**
1. Verifica en DevTools → Application → Service Workers
2. Asegúrate de que `service-worker.js` esté en la raíz
3. Revisa la Console por errores de JavaScript
4. GitHub Pages requiere HTTPS (ya lo tiene por defecto)

### En iOS no funciona

**Recuerda:**
- Solo funciona en Safari (no Chrome/Firefox en iOS)
- iOS no muestra banner automático, debes usar "Agregar a pantalla de inicio"
- Algunas funciones de Service Worker son limitadas en iOS

## 🧪 Herramientas de Testing

### Lighthouse (Chrome DevTools)

1. Abre tu PWA en Chrome
2. F12 → Pestaña "Lighthouse"
3. Selecciona "Progressive Web App"
4. Click en "Analyze page load"
5. Deberías obtener un puntaje alto (85+/100)

### PWA Asset Generator (online)

Si quieres iconos más profesionales:
- https://www.pwabuilder.com/imageGenerator
- Sube un logo de 512x512
- Descarga todos los tamaños generados

## 📊 Verificar en Producción

### Checklist Final:

- [ ] La app se abre en `https://` (no `http://`)
- [ ] `manifest.json` es accesible
- [ ] Todos los iconos (8 tamaños) están disponibles
- [ ] Service Worker se registra sin errores
- [ ] La app es instalable en Android
- [ ] La app es instalable en iOS (Safari)
- [ ] Funciona offline después de la primera carga
- [ ] Lighthouse PWA score > 85

## 🎉 ¡Listo!

Tu app WALKi ahora es una PWA completamente funcional que:
- ✅ Se instala como app nativa
- ✅ Funciona offline
- ✅ Tiene su propio ícono
- ✅ Se abre en pantalla completa
- ✅ Aparece en el cajón de aplicaciones

---

## 📞 Soporte

Si tienes problemas:
1. Revisa la consola del navegador (F12)
2. Verifica que todos los archivos estén en la raíz
3. Asegúrate de estar usando HTTPS
4. Prueba en modo incógnito para evitar caché

## 🔗 URLs Útiles

- **PWA Builder**: https://www.pwabuilder.com/
- **Manifest Generator**: https://www.simicart.com/manifest-generator.html/
- **Lighthouse**: Chrome DevTools → Lighthouse
- **Documentación**: https://web.dev/progressive-web-apps/