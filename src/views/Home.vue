<script setup lang="ts">
import MapView from '../components/mapview/MapView.vue';
import MyLocationBtn from '../components/my-location-btn/MyLocationBtn.vue'
import SearchBar from '../components/searchbar/SearchBar.vue';
import TripDetails from '../components/trip-details/TripDetails.vue';
import { usePlacesStore } from '../composables';

usePlacesStore()


</script>

<template>
  <MapView />
  <SearchBar />
  <MyLocationBtn />
  <TripDetails />
</template>