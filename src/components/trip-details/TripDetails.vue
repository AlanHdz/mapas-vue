<script setup lang="ts">
import { useMapStore } from '../../composables'

const { distance, duration } = useMapStore()

</script>


<template>
  <div class="trip-container columns">
    <div class="col"> Distancia: <strong class="text-success">{{ distance }} kms</strong> </div>
    <div class="col"> Duración: <strong class="text-success">{{ duration }} minutos</strong> </div>
  </div>
</template>
<style scoped>
.trip-container {
  background-color: white;
  border-radius: 10px;
  bottom: 55px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  font-size: 20px;
  left: 30px;
  padding: 10px;
  position: fixed;
  width: 250px;
}

</style>