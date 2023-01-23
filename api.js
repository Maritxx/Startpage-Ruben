async function getNewsData() {
    const response = await fetch("https://newsapi.org/v2/top-headlines?country=nl&pageSize=10&apiKey=2b2afe62b55c4518bc53fd2569b7b7e9");
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

getNewsData();
getWeatherData();
