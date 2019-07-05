$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Skopje&appid=a0ea454ff52a02a65b842f60b35b6255",
function(data){
    console.log(data);
    let icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    let tem = data.main.temp;
    let cel = Math.floor(tem - 273.15);
    let weather = data.weather[0].main;
  
    $('.mark').attr('src', icon);
    $('.temp').append(cel + " °C");
    $('.weatherNow').append("Currently Weather: " + weather );
}
);
