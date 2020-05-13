$(document).ready(function () {

    $("#form-submit").keypress("submit", function (event) {
        if (event.which === 13) {
            event.preventDefault()
            searchCity();
        };
    });

    $("#search").on("click", function (event) {
        //$("#current-weather").empty();
        event.preventDefault()
        searchCity();
    });

    function searchCity() {

        var city = $("#city").val();
        var apiKey = "cc0f5f01cbefa6a80c18e7a0ec9b64aa"


        //$("#current-weather").html("");
        $("#weather-forecast").empty();
        $("#city").val("");
        $('#uv-index').removeClass();
        $('#future-days').removeClass();
        $('current-weather').removeClass("hidden")

        if (city !== "") {

            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=cc0f5f01cbefa6a80c18e7a0ec9b64aa",
                method: "GET"
            }).then(function (weather) {
                var lat = weather.coord.lat;
                var lon = weather.coord.lon;
                // $("#current-weather-city").append(weather.name + "  (" + moment().format('MM/DD/YY') + ")");
                // console.log("UV INDEX: " + uvIndex);
                $('#current-weather-city').html(weather.name + "  (" + moment().format('MM/DD/YY') + ")").addClass("city-strong")
                $('#temp').html("<p class='curr-weather-temp'>").text("Current Temperature: " + weather.main.temp + "F");
                $('#feels-like').html("<p class='curr-weather-temp'>").text("Feels like: " + weather.main.feels_like + "F");
                $('#humidity').html("<p class='curr-weather-hum'>").text("Current Humidity: " + weather.main.humidity + "%");
                $('#current-wind-speed').html("<p class='curr-weather-wind'>").text("Current Wind Speed: " + weather.wind.speed + "m/h");

                var currWeatherIcon = $("<img class='weather-icon' src='http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png'>");

                $("#current-weather-city").append(currWeatherIcon);
                console.log(weather)



                $.ajax({
                    url: `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}`,
                    method: "GET"
                }).then(function (weatherData) {
                    console.log(weatherData);

                    var uvIndex = weatherData.current.uvi;
                    $('#uv-index').text(uvIndex)
                    $('#uv-div').removeClass("hidden")

                    if (uvIndex <= 4) {
                        $('#uv-index').addClass("low")
                    } else if (uvIndex <= 7) {
                        $('#uv-index').addClass("medium")
                    } else {
                        $('#uv-index').addClass("high");
                    }

                    for (let i = 1; i < 6; i++) {
                        //var day = weatherData.daily[i];
                        var date = moment.unix(weatherData.daily[i].dt).format('MM/DD/YY');
                        var temperature = weatherData.daily[i].temp.day - 273.15
                        temperature *= 1.8;
                        temperature = Math.round(temperature += 32, 0);
                        var humidity = weatherData.daily[i].humidity;
                        var icon = weatherData.daily[i].weather[0].icon;
                        //console.log(i, day, date, temperature, humidity, icon);
                        $("#" + i + "-date").text(date);
                        $("#" + i + "-icon").text(icon);
                        $("#" + i + "-temperature").text("Temp : " + temperature + " F");
                        $("#" + i + "-humidity").text("Humidity : " + humidity);


                    }


                });
            });



        } else {


        };
    }


});
































