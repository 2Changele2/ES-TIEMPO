const form = document.querySelector(".top-banner form"); 
form.addEventListener("submit", e => { e.preventDefault(); 
const inputVal = input.value; });


const apiKey = "YOUR_OWN_KEY"; const inputVal = input.value; ... const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
