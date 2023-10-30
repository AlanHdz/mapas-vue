<script setup lang="ts">
import { computed } from 'vue';
import { useMapStore, usePlacesStore } from '../../composables'

const { userLocation, isUserLocationReady } = usePlacesStore()
const { map, isMapReady } = useMapStore()


const onMyLocationClicked = () => {
  map.value?.flyTo({
    center: userLocation.value!,
    zoom: 14
  })
}

const isBtnReady = computed<boolean>(() => isUserLocationReady.value && isMapReady.value)

</script>


<template>

  <button v-if="isBtnReady" class="btn btn-primary" @click="onMyLocationClicked">
    Ir a mi ubicación
  </button>

</template>


<style scoped>
button {
  position: fixed;
  top: 30px;
  right: 30px;
}
</style>