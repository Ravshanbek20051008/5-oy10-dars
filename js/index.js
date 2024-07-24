const weatherform = document.querySelector("#weatherform");
const card = document.querySelector("#card");
const details = document.querySelector("#details");
const cardicon = document.querySelector("#card-icon");

const updateUI = (weather) => {
  details.innerHTML = `  
    <h3>${weather.name} ,${weather.sys.country}</h3>
    <p>${weather.weather[0].main}</p>
    <div class="harorat">
      <span>${Math.round(weather.main.temp)}</span>
      <span>&deg;C</span>
    </div>`;

  cardicon.src = ` https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`;
  card.style.display = "block";
};

const getweather = async (city) => {
  const data = await getData(city);
  return data;
};

weatherform.addEventListener("submit", (event) => {
  event.preventDefault();
  const cityname = weatherform.city.value.trim();
  weatherform.reset();
  getweather(cityname).then((data) => updateUI(data));
});
