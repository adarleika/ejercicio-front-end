<script setup>
import { ref } from 'vue';

// 1. Definir la lógica del Slider
const currentSlide = ref(0); // Para saber qué slide se está mostrando
const isPaused = ref(false); // Para saber si está pausado

// 2. Definir las funciones que se usan en el <template>

function prevSlide() {
  console.log("Diapositiva anterior");
  // Aquí va la lógica para ir a la diapositiva anterior
  // Ejemplo: currentSlide.value = ...
}

function nextSlide() {
  console.log("Siguiente diapositiva");
  // Aquí va la lógica para ir a la siguiente diapositiva
  // Ejemplo: currentSlide.value = ...
}

function pauseSlide() {
  console.log("Pausar/Reanudar");
  // Aquí va la lógica para pausar el carrusel
  isPaused.value = !isPaused.value; // Alternar el estado
}

// Opcional: Si necesitas pasar estas funciones a otro componente (no lo necesitas en el botón), 
// no es necesario hacer 'return' en <script setup>, se exponen automáticamente.
</script>

<template>
  <div class="fixed bottom-6 left-0 right-0 flex justify-center items-center space-x-6">
    
    <button @click="prevSlide" class="prevSlide m-2">
        &lt;
    </button>
    
    <button @click="nextSlide" class="nextSlide m-2">
        &gt;
    </button>
    
    <button class="pauseSlide">
        <span :class="{'text-white': !isPaused, 'text-teal-400': isPaused}" class=" text-3xl">
            | |
        </span>
    </button>

    
  </div>
</template>

<style scoped>

    .prevSlide, .nextSlide {
        background-color: #0A1861;
        color: #ffffff;
        border-radius: 43px;
        width: 56px;
        height: 56px;
        font-size: 30px;

    }

    .pauseSlide {

        width: 56px;
        height: 56px;

        span {
            font-size: 15px;
        }
    }


</style>




