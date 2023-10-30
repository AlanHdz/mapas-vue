import axios from 'axios';


const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: 'false',
    access_token: 'pk.eyJ1IjoiYWxhbmhlZHoiLCJhIjoiY2w0enQwMzN3M2M2czNjcXo1MmJ0M3BmaSJ9.dzHmWNxJd2EOoapeBr8T8w'
  }
})

export default directionsApi;