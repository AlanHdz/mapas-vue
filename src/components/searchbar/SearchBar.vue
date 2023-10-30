<script setup lang="ts">
import SearchResults from '../search-results/SearchResults.vue';
import { computed, ref } from 'vue'
import { usePlacesStore } from '../../composables';

const { searchPlacesByTerm } = usePlacesStore();

const debounceTimeout = ref();

const debounceValue = ref('');


const searchTerm = computed({
  get() {
    return debounceValue.value;
  },
  set(val: string) {
    if (debounceTimeout.value ) clearTimeout(debounceTimeout.value)
    debounceTimeout.value = setTimeout(() => {
      debounceValue.value = val;
      searchPlacesByTerm(val)
    }, 2000)
  }
})


</script>


<template>
  <div class="search-container">
    <input class="form-control" type="text" placeholder="Buscar lugares..." v-model="searchTerm">
    <SearchResults/>
  </div>
</template>


<style scoped>
.search-container {
  position: fixed;
  top: 30px;
  left: 30px;
  background-color: white;
  z-index: 999;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  width: 250px;
  border-radius: 5px !important;
  overflow: hidden;
  padding: 5px;
}
</style>