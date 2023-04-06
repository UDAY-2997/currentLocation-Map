/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Object-oriented JavaScript
    Shubham

    Getting the user device's information

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

"use strict";

const button = document.getElementById("map");

mapboxgl.accessToken =
  "pk.eyJ1IjoidWRheXZlZXJzaW5naCIsImEiOiJjbGc1OTZ5YXcwMTZ4M3JtcGM0YzR1Z3NxIn0.qSuijAxuTvfagY1o35OcMg";

navigator.geolocation.getCurrentPosition(getLocation, errorHandler, {
  enableHighAccuracy: true,
});

function getLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorHandler() {
  setupMap([49.8954, -97.1385]);
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v12?optimize=true",
    center: center,
    zoom: 10,
  });
  const nav = new mapboxgl.NavigationControl();
  map.addControl(nav);

  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  });

  map.addControl(directions, "top-left");
}
