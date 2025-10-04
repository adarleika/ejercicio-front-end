Ejercicio Front End con Slider Responsivo

Este proyecto es la prueba técnica Front-End para replicar el diseño de la página de un importante entidad bancaria, con énfasis en la construcción de un componente slider responsivo e interactivo.


🚀 Tecnologías Utilizadas:

Framework: Vue 3 (Composition API con <script setup>)

Herramienta de Construcción: Vite

Estilos: Tailwind CSS (con PostCSS)

Control de Versiones: Git


📋 Prerequisitos:

Antes de comenzar, asegúrate de tener instalado Node.js (versión LTS recomendada) y npm (Node Package Manager) o Yarn en tu sistema.


⚙️ Instalación:

Sigue estos pasos para clonar el repositorio e instalar las dependencias del proyecto.

1. Clonar el Repositorio
    git clone https://github.com/adarleika/ejercicio-front-end
    cd ejercicio-front-end

2. Instalar Dependencias
Ejecuta el siguiente comando para instalar todas las dependencias necesarias (Vue, Tailwind CSS, etc.):
    npm install


▶️ Ejecución del Proyecto

Una vez que las dependencias estén instaladas, puedes iniciar el servidor de desarrollo local.

1. Iniciar el Servidor de Desarrollo
Ejecuta el script de desarrollo de Vite:
    npm run dev

2. Visualizar la Aplicación
Abre tu navegador y navega a la dirección indicada por la consola (generalmente):
    http://localhost:5173/


🖼️ Optimización de Imágenes

Se ha implementado el uso del elemento <picture> y etiquetas <source> para optimizar la carga de imágenes, priorizando formatos modernos (.webp y .svg) y utilizando .png como respaldo en la etiqueta <img>, asegurando la compatibilidad y el mejor rendimiento.