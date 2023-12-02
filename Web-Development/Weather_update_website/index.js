 //set current time
function currentTime() {
    var curTime = new Date();
    document.getElementById("currenttime").innerHTML = curTime.getFullYear()+'&nbsp;&nbsp; '+
                                                       curTime.getHours()+':'+
                                                       curTime.getMinutes()+':'+
                                                       curTime.getSeconds();
    setTimeout(currentTime,1000);
}

currentTime();


function showWeather() {

    let displayCityName = document.getElementById("city");
    let inputCityName   = document.getElementById("input-city-name").value;
    let humidity        = document.getElementById("humidity");
    let pressure        = document.getElementById("pressure");
    let wind            = document.getElementById("wind");
    let description     = document.getElementById("description");
    let visibility      = document.getElementById("visibility");
    let lattitude       = document.getElementById("lattitude");
    let longititude     = document.getElementById("longititude");
    let feelsLike       = document.getElementById("feelsLike");
    let country         = document.getElementById("country");
    let temperature     = document.getElementById("temperature");
    let city            = document.getElementById("city");
    let handleError     = "vivek nimbolkar";

    //console.log(cityName);
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputCityName+"&appid=d7c33d077a4e70b9e1380b1e9e4a2de7")
    .then(response => response.json())
    .then(data => {

        console.log(data);
        const apiResponse = [
            data["main"]["temp"],
            data["main"]["feels_like"],
            data["main"]["humidity"],
            data["main"]["pressure"],
            data["name"],
            data["coord"]["lat"],
            data["coord"]["lon"],
            data["wind"]["speed"],
            data["sys"]["country"],
            data["visibility"],
            data["weather"]["0"]["description"],
            data["weather"]["0"]["main"]
        ];

        temperature.innerHTML    = (apiResponse[0] -273.15).toFixed(1)+"&#8451;";
        displayCityName.innerHTML= apiResponse[4];
        humidity.innerHTML       = apiResponse[2];
        pressure.innerHTML       = apiResponse[3];
        lattitude.innerHTML      = apiResponse[5];
        longititude.innerHTML    = apiResponse[6];
        wind.innerHTML           = apiResponse[7]+" km/hr";
        visibility.innerHTML     = apiResponse[9];
        country.innerHTML        = apiResponse[8];
        description.innerHTML    = apiResponse[10];
        feelsLike.innerHTML      = apiResponse[11];

    })
    // .catch(err => alert("Please enter correct city!"))                    
}