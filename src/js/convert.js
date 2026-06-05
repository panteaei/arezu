// let Celsius = document.querySelector("#Celsius");
// let Fahrenheit = document.querySelector("#Fahrenheit");
// let deleteBtn = document.querySelector("#delete-btn");

// Celsius.addEventListener("keyup", function () {
//   let c = Celsius.value.trim();

//   if (!c || isNaN(c)) {
//     Fahrenheit.value = "";
//     return;
//   }

//   Fahrenheit.value = ((Number(c) * 9) / 5 + 32).toFixed() + "F";
// });
// deleteBtn.addEventListener("click", function () {
//   Celsius.value = "";
//   Fahrenheit.value = "";
// });
import '../main.css'
let iran = {
  تهران: {
    temp: "23°C",
    humidity: "13%",
  },
  اصفهان: {
    temp: "15°C",
    humidity: "30%",
  },
};
let iranProperties = Object.keys(iran)
console.log(iranProperties)
let searchBtn = document.querySelector("#search");
let cityBox = document.querySelector("#city");
let humidityBox = document.querySelector("#humidity");
let tempBox = document.querySelector("#temp");
let inputBox = document.querySelector("#search-input");
let inputValue;

searchBtn.addEventListener("click", function () {
  inputValue = inputBox.value;
iranProperties.forEach(function(city){
if(city === inputValue ){
    cityBox.textContent = city
tempBox.textContent =     iran[city].temp
humidityBox.textContent =   iran[city].humidity
}

})

});
