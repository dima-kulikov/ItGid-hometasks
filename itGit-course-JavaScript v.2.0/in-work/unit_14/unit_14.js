const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "da847410bfbcf4f7598a133e1010f369"
}

function getWeather() {
    const cityId = document.querySelector('#city').value;

    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
	.then(weather => {
			return weather.json();
		}).then(showWeather);
}

function showWeather(data) {
	console.log(data);
    document.querySelector('.weather__city').innerHTML = data.name;
	document.querySelector('.weather__temp').innerHTML = Math.floor(data.main.temp_max);
    document.querySelector('.weather_all-info__first').innerHTML = data.weather[0].description;
    document.querySelector('.weather_all-info__img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.querySelector('.weather_all-info__second span').innerHTML = data.wind.speed;
}



getWeather();
document.querySelector('#city').onchange = getWeather;