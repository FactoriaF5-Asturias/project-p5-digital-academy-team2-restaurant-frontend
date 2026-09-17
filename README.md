# 🍽️ Goxu — Frontend

> Fartucos de sabor

**Frontend** construido con **Vue 3** para _Goxu_, la web de un restaurante de comida asturiana con pedidos en local, para llevar y a domicilio, panel de cocina y panel de administración. Desarrollado con **Vite**, **Vue Router** y **Tailwind CSS**.

---

## 📑 Índice

- [Descripción](#-descripción)
- [Análisis](#-análisis)
- [Identidad de marca](#-identidad-de-marca)
- [Instalación](#-instalación)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Tecnologías](#-tecnologías)
- [Equipo](#-equipo)

---

## 📋 Descripción

El reto de este proyecto es construir, en **Vue 3**, el frontend de _Goxu_, la web de un restaurante asturiano, con vistas diferenciadas según el rol de quien la usa:

- **Cliente**: login y registro, home, calendario de eventos, ofertas especiales, carta con filtros por categoría (con datos del backend y mock data de respaldo), detalle de producto, carrito, pago, reservas, y perfil y cuenta de usuario.
- **Cocina**: tablero para seguir el estado de los pedidos.
- **Repartidor**: panel con el dashboard de entregas y el listado de pedidos asignados.
- **Administración**: bienvenida, dashboard del negocio, productos, pedidos y facturación.

Desarrollado con **Vue 3 (`<script setup>`)**, **Vite**, **Vue Router** y **Tailwind CSS**, con tests unitarios en **Vitest** y commits siguiendo **Conventional Commits**.

[Volver al índice](#-índice)

---

## 🔍 Análisis

Antes de empezar identificamos las funcionalidades principales del frontend:

- **Login y registro**: acceso y alta de usuarios
- **Home**: presentación del restaurante, con formulario de contacto
- **Eventos**: calendario de eventos del restaurante
- **Ofertas especiales**: promociones destacadas
- **Carta**: listado de productos por categoría con filtros, obtenidos del backend con datos de ejemplo (mock data) como respaldo si la petición falla
- **Detalle de producto**: vista individual de cada plato
- **Carrito y pago**: gestión de la cesta y flujo de pago
- **Reservas**: formulario de reserva de mesa
- **Perfil y cuenta**: datos del cliente
- **Panel de cocina**: tablero de pedidos por estado
- **Panel de repartidor**: dashboard de entregas y listado de pedidos asignados
- **Panel de administración**: bienvenida, dashboard del negocio, productos, pedidos y facturación

[Volver al índice](#-índice)

---

## 🎨 Identidad de marca

**Concepto:** paleta cálida y natural con verde como color principal, sobre fondo crema, siguiendo el sistema de tokens de Material Design 3.

**Paleta de color:**

| Nombre                   |    HEX    |
| :----------------------- | :-------: |
| Primario (verde)         | `#246d00` |
| Secundario (verde claro) | `#2a6c06` |
| Terciario (marrón)       | `#7a5644` |
| Highlight (malva)        | `#d98a98` |
| Fondo / Surface (crema)  | `#fcf9ef` |
| Texto sobre superficie   | `#1c1c16` |
| Error                    | `#ba1a1a` |

**Tipografías:**

- **Cormorant Garamond** — titulares (headline)
- **Manrope** — texto de cuerpo (body)
- **Inter** — interfaz, botones y etiquetas (ui)

[Volver al índice](#-índice)

---

## 🚀 Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/FactoriaF5-Asturias/project-p5-digital-academy-team2-restaurant-frontend.git

# 2. Entrar en la carpeta
cd project-p5-digital-academy-team2-restaurant-frontend

# 3. Instalar dependencias
npm install

# 4. Iniciar el servidor de desarrollo
npm run dev

# 5. Ejecutar los tests unitarios
npm run test
```

[Volver al índice](#-índice)

---

## 🗂️ Estructura del proyecto

- **`public/`** — imágenes públicas (home, eventos, favicon, iconos)
- **`src/`** — carpeta principal del código fuente
  - **`assets/`** — imágenes internas (branding, eventos, home, alérgenos, carta)
  - **`components/`** — componentes reutilizables
    - **`cart/`** — componentes del carrito
    - **`delivery/`** — componentes del panel de repartidor
    - **`payment/`** — componentes del flujo de pago
    - **`reservation/`** — componentes de reservas
  - **`composables/`** — lógica reutilizable (carrito, entregas, eventos, pedidos, pago, productos, reservas)
  - **`router/`** — configuración de rutas
  - **`utils/`** — utilidades (formateo de moneda, etc.)
  - **`Views/`** — vistas de la aplicación (cliente, cocina, repartidor, administración)
  - **`tests/Views/`** — tests unitarios con Vitest

[Volver al índice](#-índice)

---

## 🛠️ Tecnologías

- **[Vue 3](https://vuejs.org/)** — Framework del frontend, con `<script setup>`
- **[Vite](https://vitejs.dev/)** — Servidor de desarrollo y bundler
- **[Vue Router](https://router.vuejs.org/)** — Enrutado entre vistas
- **[Tailwind CSS](https://tailwindcss.com/)** — Estilos
- **[PostCSS](https://postcss.org/)** / **[Autoprefixer](https://github.com/postcss/autoprefixer)** — Procesado de CSS
- **[Leaflet](https://leafletjs.com/)** — Mapa para el panel de repartidor
- **[Lucide](https://lucide.dev/)** — Iconos (`lucide-vue-next`)
- **[Vitest](https://vitest.dev/)** / **[Vue Test Utils](https://test-utils.vuejs.org/)** — Tests unitarios
- **[jsdom](https://github.com/jsdom/jsdom)** — Entorno DOM para los tests
- **[Git](https://git-scm.com/)** / **[GitHub](https://github.com/)** — Control de versiones y alojamiento del proyecto

[Volver al índice](#-índice)

---

## 🕹️ Equipo

Proyecto desarrollado por el **equipo 2** del bootcamp Factoría F5 x Capgemini (Gijón), como parte del proyecto final "Goxu".

---

**[Andrea Vallina](https://github.com/AndreaVaGo)**

**[Gema Miguel](https://github.com/gmp395)**

**[Iker Arduengo](https://github.com/ikerardi-dev)**

**[Jenny Sánchez](https://github.com/Jennydev-25)**

**[Juan Isidro](https://github.com/JuanIsidroMenendez)**

**[Ruddy Cruz](https://github.com/ruddycruzc)**

---

[Volver al índice](#-índice)
