const apiKey = "8b565104f88cf5c95b1fe316821d0fff";

document.getElementById("searchBtn").addEventListener("click", () => {
    const city = document.getElementById("cityinput").value;
    if (city) {
        getWeather(city);
    }
    else {
        alert(" Please enter a city name ! ");
    }
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
        document.getElementById("city").textContent = `${data.name},${data.sys.country}`;
        document.getElementById("temp").textContent = `${Math.round(data.main.temp)} C`
        document.getElementById("desc").textContent = data.weather[0].description;
        document.getElementById("Humidity").textContent = `${data.main.humidity}%`;
        document.getElementById("wind").textContent = `${data.wind.speed} KM/H`;

    }
    else {
        alert("city not found !");
    }

}