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
