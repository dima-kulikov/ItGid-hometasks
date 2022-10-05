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
    document.querySelector('.weather_all-info__pressure span').innerHTML = data.main.pressure;
	document.querySelector('.weather_all-info__speed span').innerHTML = data.wind.speed;
	document.querySelector('.weather_all-info__degree span').innerHTML = data.wind.deg;
}

///работа с списком
let weather = document.querySelector('.weather');
let cityElement = document.createElement('select');
cityElement.id = 'city';
weather.appendChild(cityElement);

const myCity = {
	'Kyiv': '703448',
	'Lviv': '702550',
	'Odesa': '698740',
	'Kharkiv': '706483'
};

for (key in myCity) {
	console.log(key)
	let myOption = document.createElement('option');
	myOption.value = myCity[key];
	myOption.innerHTML = key;

	cityElement.appendChild(myOption)
}






getWeather();
document.querySelector('#city').onchange = getWeather;