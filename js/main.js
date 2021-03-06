window.addEventListener("load", ()=>{

    let lat;
    let long;
    let temperatureDescription = document.querySelector(".temperature-description"); 
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");
    let locationIcon = document.querySelector(".weather-icon");
    let city = document.getElementById("city");


    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition( position =>{
            console.log(position);
            lat = position.coords.latitude;
            long = position.coords.longitude;


            const api =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=sv&appid=6d5b0798e49091ad6c0d2506620071b6`;
            
            fetch(api)
            .then(response => {
                return response.json();
                })
            .then(data => {
                
                console.log(data.main);


                const {description} = data.weather[0];
                const {temp} = data.main;
                const cityName = data.name;
                const {icon} = data.weather[0];

                console.log(icon);
                console.log(temp);
                
                // let celsius = Math.floor((temp - 32) * 5 / 9);
                // console.log(celsius);


                temperatureDescription.textContent = description;
                temperatureDegree.textContent = Math.floor(temp) ;
                locationTimezone.textContent = cityName;
                city.textContent = cityName;
                locationIcon.src = `img/${icon}.png`;
            });
        });
    
    } // en of if statement

});