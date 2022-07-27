const API_KEY = // 'https://openweathermap.org/ 가입 후 API KEY 얻기';
  function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const weatherEl = document.querySelector('#weather span:first-child');
        const cityEl = document.querySelector('#weather span:last-child');
        cityEl.innerText = `${data.sys.country}`;
        weatherEl.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
      });
  };
function onGeoError() {
  alert("Can't find you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
