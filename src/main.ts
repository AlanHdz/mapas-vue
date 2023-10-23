import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';

import mapboxgl from 'mapbox-gl';
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhbmhlZHoiLCJhIjoiY2w0enQwMzN3M2M2czNjcXo1MmJ0M3BmaSJ9.dzHmWNxJd2EOoapeBr8T8w';

if (!navigator.geolocation) {
  alert('Tu navegador no soporta el Geolocation')
  throw new Error('Tu navegador no soporta el Geolocation')
}

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
