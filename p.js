// async function getWeather() {
//   const apiKey = '7d728e2dcb9f3ac0fa597133309facbc';
//   const city = document.getElementById('cityInput').value.trim();
//   const weatherBox = document.querySelector('.weather');

//   if (city === '') {
//     alert('Please enter a city name!');
//     return;
//   }

//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

//   try {
//     const response = await fetch(url);
//     const data = await response.json();

//     if (data.cod === 200) {
//       document.getElementById('cityName').innerText = data.name;
//       document.getElementById('temp').innerText = `${data.main.temp}°C`;
//       document.getElementById('description').innerText = data.weather[0].description;
//       document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

//       weatherBox.style.display = 'block'; 
//     } else {
//       alert(`Error: ${data.message}`);
//       weatherBox.style.display = 'none';
//     }
//   } catch (error) {
//     console.error(error);
//     alert('An error occurred while fetching data.');
//   }
// }
async function getWeather() {
  const apiKey = 'b6907d289e10d714a6e88b30761fae22';  // temporary demo key
  const city = document.getElementById('cityInput').value;
  const weatherBox = document.getElementById('weatherBox');

  if (city === '') {
    alert('Please enter a city name!');
    return;
  }

  const url = `https://openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      document.getElementById('cityName').innerText = data.name;
      document.getElementById('temp').innerText = `${data.main.temp}°C`;
      document.getElementById('description').innerText = data.weather[0].description;
      document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

      weatherBox.style.display = 'block';
    } else {
      alert('City not found!');
      weatherBox.style.display = 'none';
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred while fetching data.');
  }
}
