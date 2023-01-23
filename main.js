function displayNews(data) {
    data.articles.forEach((article) => {
        const newsHolder = document.getElementById("news");

        const newsItem = document.createElement("div");
        const newsImg = document.createElement("img");
        const textHolder = document.createElement("div");
        const newsTitle = document.createElement("a");
        const newsDesc = document.createElement("p");

        newsItem.classList.add("news-item__container");
        newsImg.src = article.image || "https://admin.kolpobd.com/images/news/news.png";
        newsTitle.href = article.url;
        newsTitle.innerText = article.title;
        newsDesc.innerText = article.description; 

        newsHolder.append(newsItem);
        newsItem.append(newsImg);
        newsItem.append(textHolder)
        textHolder.append(newsTitle);
        textHolder.append(newsDesc);
    }) 
}

function showTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    
    document.getElementById("time").innerHTML = hours + ":" + (minutes < 10 ? "0" : "") + minutes; 

    let timeGreeting = hours < 12 ? "morning" : hours <= 18 && hours >= 12 ? "afternoon" : "evening";
    document.getElementById("greeting").innerText = `Good ${timeGreeting}, Ruben!`;

    const month = date.toLocaleString("default", { month: 'long' });
    const day = date.getDate();

    document.getElementById("date").innerHTML = `${month} ${day}`;

    setTimeout(showTime, 1000);
}

showTime();

function displayWeather(data) {
    const weatherData = data.currentConditions;

    document.getElementById("weatherIcon").src = `img/weatherIcons/${weatherData.icon}.svg`;
    document.getElementById("weatherTemperature").innerText = `${weatherData.temp}°C`;
    document.getElementById("weatherDescription").innerText = weatherData.conditions;
}