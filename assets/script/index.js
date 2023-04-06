/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    Object-oriented JavaScript
    Shubham

    Getting the user device's information

 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/

"use strict";

const button = document.getElementById("map");

mapboxgl.accessToken =
  "pk.eyJ1IjoidWRheXZlZXJzaW5naCIsImEiOiJjbGc1OTZ5YXcwMTZ4M3JtcGM0YzR1Z3NxIn0.qSuijAxuTvfagY1o35OcMg";

navigator.geolocation.getCurrentPosition();

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://style/mapbox/streets-v12",
});

// function getLocation(position) {
//   console.log(position);

//   setupMap([position.coords.longitude, position.coords.latitude]);

//   // const { latitude, longitude } = position.coords;
//   // window.location.assign(
//   //   `https://www.openstreetmap.org/#map=19/${latitude}/${longitude}`
//   // );
// }

// function errorHandler() {
//   setupMap([49.8954, 97.1385]);
//   // console.log("Unable to retrieve your location ");
// }

// function setupMap(center) {
//   const map = new mapboxgl.Map({
//     container: "map",
//     style: "mapbox://styles/mapbox/streets-v12 optimize=true",
//     center: center,
//     zoom: 10,
//   });
//   const nav = new mapboxgl.NavigatorControl();
//   map.addControl(nav);

//   var directions = new MapboxDirections({
//     accessToken: mapboxgl.accessToken,
//   });

//   map.addControl(directions, "top-left");
// }

// button.addEventListener("click", () => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(getLocation, errorHandler, {
//       enableHighAccuracy: true,
//     });
//   } else {
//     console.log(`Geolocation is not supported by your browser`);
//   }
// });
