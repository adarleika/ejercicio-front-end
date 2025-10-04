<script setup>
import Slider from './components/Slider.vue';
</script>

<template>

    <div class="menu flex flex-row justify-around items-center">

      <div class="p-5">
        <img src="./assets/img/png/logo_mob.png" alt="imagen logo" srcset="./assets/img/svg/logo_mob.svg">
      </div>

      <div class="md:contents md:flex-row justify-around invisible md:visible">
        <p class="text-produc-tarifas">PRODUCTOS Y TARIFAS </p>

        <p class="text-contratar">COMO CONTRATAR </p>

        <p class="text-beneficios">BENEFICIOS</p>

      </div>
      
      <div class="">
        <button class="btn-contratar">
          CONTRATAR
        </button>
      </div>

      <div class="block md:hidden">
        <img src="./assets/img/png/menu_mob.png" alt="imagen menu" srcset="./assets/img/svg/menu_mob.svg">
      </div>

    </div>

    <div class="fondo">

      <div class="huincha flex justify-center items-center px-4 gap-2">
        <img src="./assets/img/png/truck_fast.png" alt="imagen truck fast" srcset="./assets/img/svg/truck_fast.svg">

        <p class="text-huincha">¡Contrata hoy y obtén los mejores beneficios</p>
      </div>

      <div class="flex flex-col md:flex-row items-center">

        <div class="img-chico order-1 md:order-2 md:w-1/2 p-5 relative overflow-hidden">

          <picture class="block md:hidden relative z-10 w-full"> 
            <source srcset="./assets/img/webp/chico_mob.webp" type="image/webp">
            <img src="./assets/img/png/chico_mob.png" alt="imagen chico (movil)" class="w-full"> 
          </picture>

          <picture class="hidden md:block lg:hidden relative z-10 w-full">
            <source srcset="./assets/img/webp/chico_tablet.webp" type="image/webp">
            <img src="./assets/img/png/chico_tablet.png" alt="imagen chico (tablet)" class="w-full">
          </picture>
          
          <picture class="hidden lg:block relative z-10 w-full">
            <source srcset="./assets/img/webp/chico_desk.webp" type="image/webp">
            <img src="./assets/img/png/chico_desk.png" alt="imagen chico (desktop)" class="w-full">
          </picture>
        
        </div>

      
        <div class="text-center m-2 order-2 md:order-1 md:w-1/2">

          <div class="text-center lg:text-left m-2">
            <p class="text-cliente">
              Hazte cliente empresa <br class="block lg:hidden"> 
                del Banco de Chile y <br class="block lg:hidden">

              <span class="text-producto">obtén tu producto a costo $0*</span>

            </p>
          </div>

          <div class="flex flex-col lg:flex-row items-center">
            <div class="p-5">
              <button class="btn-quiero">
                QUIERO CONTRATAR
              </button>
            </div>

            <div class="p-3">
              <button class="btn-tarifas">
                NUESTRAS TARIFAS
              </button>
            </div>
          </div>

      </div>

    </div>

   </div>


    <Slider />




</template>


