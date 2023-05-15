const API_KEY = "99e13f4498f82f3114c12795b8fb1fc0";

function onGeo0k(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");   
        const name = document.querySelector("#weather span:last-child");
        name.innerText = data.name;
        weather.innerText = `${data.weather[0].main}  / ${data.main.temp}°C`;
    });
}

function onGeo0Error() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeo0k,onGeo0Error);