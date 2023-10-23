<script setup lang="ts">
import MapView from '../components/mapview/MapView.vue';
import { usePlacesStore } from '../composables';

usePlacesStore()


</script>

<template>
  <MapView />
</template>