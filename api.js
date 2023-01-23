async function getNewsData() {
    const apiKey = "91707b5c0381c273dd88f43d4b327fd4";

    const response = await fetch(`https://gnews.io/api/v4/top-headlines?token=${apiKey}&sortby=publishedAt&lang=nl`);
    const data = await response.json();
    displayNews(data);
}

async function getWeatherData() {
    let latitude = 52.377956;
    let longitude =  4.897070;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
        })
    }

    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${latitude}%2C${longitude}?unitGroup=metric&include=current&key=YHEQAX4KY9QZFQWCVCVF3P9ZN&contentType=json`);
    const data = await response.json();
    displayWeather(data);
}


window.onload = function() {
    getNewsData();
    getWeatherData();
}