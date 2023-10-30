<script setup lang="ts">
import { ref, watch } from 'vue';
import { usePlacesStore, useMapStore } from '../../composables';
import { Feature } from '../../interfaces/places';

const { isLoadingPlaces, places, userLocation } = usePlacesStore();
const { map, setPlacesMarkers, getRouteBetweenPoints } = useMapStore();
const activePlace = ref('');

watch(places, (newPlaces) => {
  activePlace.value = '';
  setPlacesMarkers(newPlaces);
})

const getRouteDirections = (place: Feature) => {
  if (!userLocation.value) return;
  const [lng, lat] = place.center
  const [startLng, startLat] = userLocation.value

  const start: [number, number] = [startLng, startLat];
  const end: [number, number] = [lng, lat];

  getRouteBetweenPoints(start, end)

}

const onPlaceClicked = (place: Feature) => {
  activePlace.value = place.id;
  const [lng, lat] = place.center

  map.value?.flyTo({
    zoom:14,
    center: [lng, lat]
  })

}

</script>


<template>
  <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
    <h5>Cargando</h5>
    <span>Espere por favor...</span>
  </div>
  
  <ul v-else-if="places.length > 0" class="list-group mt-3">
    <li class="list-group-item list-group-item-action" :class="{'active': place.id == activePlace}" @click="onPlaceClicked(place)" v-for="place in places" :key="place.id">
      <h5>{{ place.text }}</h5>
      <p>{{ place.place_name }}</p>
      <div align="right">
        <button @click.self="getRouteDirections(place)" :class="(place.id === activePlace) ? 'btn-outline-light' : 'btn-outline-primary'" class="btn btn-outline-primary btn-sm">
          Direcciones
        </button>
      </div>
    </li>
  </ul>
</template>

<style scoped>
li {
  cursor: pointer;
}
h5 {
  font-size: 15px !important;
}
p {
  font-size: 10px;
}
</style>