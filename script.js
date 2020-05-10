$(document).ready(function () {

    function searchCity() {

        var city = $("#city").val();


        $("#current-weather").empty();
        $("#weather-forecast").empty();
        $("#city").val("");

        if (city !== "") {


            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=cc0f5f01cbefa6a80c18e7a0ec9b64aa",
                method: "GET"
            }).then(function (weather) {
                $("#current-weather").append(weather.name + "  ").addClass("city-font-title")

                $("#current-weather").append(moment().format('MM/DD/YY'));;

                var weatherTemp = $("<p class='curr-weather-temp'>").text("Current Temperature: " + weather.main.temp + "F");
                var weatherFeel = $("<p class='curr-weather-temp'>").text("Feels like: " + weather.main.feels_like + "F");
                var weatherHumid = $("<p class='curr-weather-hum'>").text("Current Humidity: " + weather.main.humidity + "%");
                var weatherWind = $("<p class='curr-weather-wind'>").text("Current Wind Speed: " + weather.wind.speed + "m/h");
                $("#current-weather").append(weatherTemp, weatherFeel, weatherHumid, weatherWind);

                var currWeatherIcon = $("<img class='weather-icon' src='http://openweathermap.org/img/wn/" + weather.weather[0].icon + "@2x.png'>");
                $("#current-weather").append(currWeatherIcon);

            });


            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=cc0f5f01cbefa6a80c18e7a0ec9b64aa",
                method: "GET"
            }).then(function (forecast) {
                var forecastName = $("<h3 class='forecast-name'>").text(forecast.city.name + " -5 Day Forecast");
                var forecast5day = $("div id='forecast-5day'>");
                $("#weather-forecast").append(forecastName, forecast5day);


                var day1 = $("<div class='day'>");
                var day2 = $("<div class='day'>");
                var day3 = $("<div class='day'>");
                var day4 = $("<div class='day'>");
                var day5 = $("<div class='day'>");
                forecast5day.append(day1, day2, day3, day4, day5);

                var forecastDate = $("<p class='each-date'>").text(moment().add(1, 'day').format('ddd, MM/DD.YY'));
                var forecastIcon = $("img class='weather-icon' src='http://openweathermap.org/img/wn/" + forecast.list[7].weather[0].icon + "@2x.png'>")
                var forecastMaxTemp = $("<p class='each-day'>'").text("Max: " + forecast.list[7].main.temp + "F");
                var forecastMinTemp = $("<p class='each-day'>'").text("Min: " + forecast.list[7].main.temp + "F");
                var forecastHumidity = $("<p class='each-day'>'").text("Humidity: " + forecast.list[7].main.humidity + "%");
                day1.append(forecastDate, forecastMaxTemp, forecastMinTemp, forecastHumidity, forecastIcon);

                var forecastDate = $("<p class='each-date'>").text(moment().add(1, 'day').format('ddd, MM/DD.YY'));
                var forecastIcon = $("img class='weather-icon' src='http://openweathermap.org/img/wn/" + forecast.list[7].weather[0].icon + "@2x.png'>")
                var forecastMaxTemp = $("<p class='each-day'>'").text("Max: " + forecast.list[7].main.temp + "F");
                var forecastMinTemp = $("<p class='each-day'>'").text("Min: " + forecast.list[7].main.temp + "F");
                var forecastHumidity = $("<p class='each-day'>'").text("Humidity: " + forecast.list[7].main.humidity + "%");
                day2.append(forecastDate, forecastMaxTemp, forecastMinTemp, forecastHumidity, forecastIcon);

                var forecastDate = $("<p class='each-date'>").text(moment().add(1, 'day').format('ddd, MM/DD.YY'));
                var forecastIcon = $("img class='weather-icon' src='http://openweathermap.org/img/wn/" + forecast.list[7].weather[0].icon + "@2x.png'>")
                var forecastMaxTemp = $("<p class='each-day'>'").text("Max: " + forecast.list[7].main.temp + "F");
                var forecastMinTemp = $("<p class='each-day'>'").text("Min: " + forecast.list[7].main.temp + "F");
                var forecastHumidity = $("<p class='each-day'>'").text("Humidity: " + forecast.list[7].main.humidity + "%");
                day3.append(forecastDate, forecastMaxTemp, forecastMinTemp, forecastHumidity, forecastIcon);

                var forecastDate = $("<p class='each-date'>").text(moment().add(1, 'day').format('ddd, MM/DD.YY'));
                var forecastIcon = $("img class='weather-icon' src='http://openweathermap.org/img/wn/" + forecast.list[7].weather[0].icon + "@2x.png'>")
                var forecastMaxTemp = $("<p class='each-day'>'").text("Max: " + forecast.list[7].main.temp + "F");
                var forecastMinTemp = $("<p class='each-day'>'").text("Min: " + forecast.list[7].main.temp + "F");
                var forecastHumidity = $("<p class='each-day'>'").text("Humidity: " + forecast.list[7].main.humidity + "%");
                day4.append(forecastDate, forecastMaxTemp, forecastMinTemp, forecastHumidity, forecastIcon);

                var forecastDate = $("<p class='each-date'>").text(moment().add(1, 'day').format('ddd, MM/DD.YY'));
                var forecastIcon = $("img class='weather-icon' src='http://openweathermap.org/img/wn/" + forecast.list[7].weather[0].icon + "@2x.png'>")
                var forecastMaxTemp = $("<p class='each-day'>'").text("Max: " + forecast.list[7].main.temp + "F");
                var forecastMinTemp = $("<p class='each-day'>'").text("Min: " + forecast.list[7].main.temp + "F");
                var forecastHumidity = $("<p class='each-day'>'").text("Humidity: " + forecast.list[7].main.humidity + "%");
                day5.append(forecastDate, forecastMaxTemp, forecastMinTemp, forecastHumidity, forecastIcon);



            });







        } else {

        };
    }

    $("#form-submit").keypress("submit", function (event) {
        if (event.which === 13) {
            event.preventDefault()
            searchCity();
        };
    });

    $("#search").on("click", function (event) {
        event.preventDefault()
        searchCity();
    });
});
































