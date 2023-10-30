import axios from 'axios';


const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token: 'pk.eyJ1IjoiYWxhbmhlZHoiLCJhIjoiY2w0enQwMzN3M2M2czNjcXo1MmJ0M3BmaSJ9.dzHmWNxJd2EOoapeBr8T8w'
  }
})

export default searchApi;