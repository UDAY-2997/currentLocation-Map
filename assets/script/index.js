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

  // create a marker for the user's location
  const marker = new mapboxgl.Marker({
    color: "#427bd2",
  })
    .setLngLat(center)
    .addTo(map);
}

const mediaRun = new IntersectionObserver((views) => {
  views.forEach((view) => {
    if (view.isIntersecting) {
      view.target.classList.add("show");
    } else {
      view.target.classList.remove("show");
    }
  });
});

const mediaElements1 = document.querySelectorAll(".page3-box");
mediaElements1.forEach((e) => mediaRun.observe(e));

const mediaElements2 = document.querySelectorAll(".page3-box-1");
mediaElements2.forEach((e) => mediaRun.observe(e));

const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  const nameInput = document.getElementById("text");
  const emailInput = document.getElementById("email");
  const numberInput = document.getElementById("number");

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const numberValue = numberInput.value.trim();

  if (nameValue === "") {
    alert("Name is required.");
    event.preventDefault();
  } else if (!isValidName(nameValue)) {
    alert("Please enter full name.");
    event.preventDefault();
  }

  if (emailValue === "") {
    alert("Email is required.");
    event.preventDefault();
  } else if (!isValidEmail(emailValue)) {
    alert("Email is invalid.");
    event.preventDefault();
  }

  if (numberValue === "") {
    alert("Mobile Number is required.");
    event.preventDefault();
  } else if (!isValidMobileNumber(numberValue)) {
    alert("Number is invalid.");
    event.preventDefault();
  }
});

function isValidEmail(email) {
  const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailCheck.test(email);
}

function isValidName(text) {
  const nameCheck = /^[a-zA-Z ]{2,30}$/;
  return nameCheck.test(text);
}

function isValidMobileNumber(mobileNumber) {
  const mobileCheck =
    /^[+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  return mobileCheck.test(mobileNumber);
}
