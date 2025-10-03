<script setup>
import Slider from './components/Slider.vue';
</script>

<template>

    <div class="menu flex flex-row justify-around items-center">

      <div class="">
        <img src="./assets/img/png/logo_mob.png" alt="" srcset="./assets/img/svg/logo_mob.svg">
      </div>

      
      <div class="">
        <button class="btn-contratar">
          CONTRATAR
        </button>
      </div>

      <div class="">
        <img src="./assets/img/png/menu_mob.png" alt="" srcset="./assets/img/svg/menu_mob.svg">
      </div>



    </div>

    <div class="fondo">

      <div class="huincha flex flex-row justify-around items-center">
        <img src="./assets/img/png/truck_fast.png" alt="" srcset="./assets/img/svg/truck_fast.svg">

        <p class="text-huincha">¡Contrata hoy y obtén los mejores beneficios</p>
      </div>

      <div class="img-chico flex justify-around items-center p-5">
        <img src="./assets/img/png/chico_mob.png" alt="">
      </div>
      
      <div class="text-center m-2">
        <p class="text-cliente">
          Hazte cliente empresa del Banco de Chile y 

          <span class="text-producto">obtén tu producto a costo $0*</span>

        </p>
      </div>


      
      <div class="flex flex-col justify-around items-center">

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


  <Slider />




</template>


