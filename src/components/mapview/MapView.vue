<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { usePlacesStore } from '../../composables/usePlacesStore';
import Mapboxgl from 'mapbox-gl';

const { userLocation, isUserLocationReady } = usePlacesStore();
const mapElement = ref<HTMLDivElement>();

const initMap = async () => {
  if (!mapElement.value) throw new Error('No se encontro el elemento');
  if (!userLocation.value) throw new Error('No se encontraron las coordenadaas');

  await Promise.resolve()

  const map = new Mapboxgl.Map({
    container: mapElement.value, // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: userLocation.value, // starting position [lng, lat]
    zoom: 15, // starting zoom
  });

  const myLocationPopup = new Mapboxgl.Popup()
    .setLngLat(userLocation.value)
    .setHTML(
      `<h4>Aqui estoy</h4>`
    )

  const myLocationMarker = new Mapboxgl.Marker()
    .setLngLat(userLocation.value)
    .setPopup(myLocationPopup)
    .addTo(map)


}


onMounted(() => {
  if (isUserLocationReady.value) 
    return initMap()
})

watch(isUserLocationReady, (newVal) => {
  if(isUserLocationReady.value) initMap()
  
})
  
</script>

<template>
  <div v-if="!isUserLocationReady" class="loading-map d-flex justify-content-center align-items-center">
    <div class="text-center">
      <h3>Espere por favor!!</h3>
      <span>Localizando...</span>
    </div>
  </div>

  <div v-show="isUserLocationReady" class="map-container" ref="mapElement" />

</template>

<style scoped>

.map-container {
  position:fixed;
  width: 100vw;
  height: 100vh;
}
.loading-map {
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  height: 100vh;
  left: 0;
  position: fixed;
  top: 0px;
  width: 100vw;
  z-index: 9999;
}
</style>