// variable declaring 
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

// Getting weather by city 
const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    // fetching url 
    const response = await fetch(url);
    // storing data from response 
    const data = await response.json()
    return showWeather(data)
}

// calling showweather function 
const showWeather = (data) => {
    // error handeling 
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found! Try again <h2>`
        return;
    }
    // showing data dynamically  
    weather.innerHTML = `
        <div>
            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp} ℃</h2>
            <h5> ${data.weather[0].main} </h5>
        </div>
    `
}

// form.on submit using addEventListener
form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value)
        event.preventDefault();
    }
)