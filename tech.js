setInterval(myTimer, 1000);
function myTimer() {
    $.getJSON("http://157.26.227.158:1880/datas", function (json) {
        document.getElementById("temp_tech").innerHTML = json.temperature + " °C";
        gauge1.set(json.temperature);
        document.getElementById("pressure_tech").innerHTML = json.pressure + " bar";
        gauge2.set(json.pressure);
        document.getElementById("humidity_tech").innerHTML = json.humidity + " %";
        gauge3.set(json.humidity);
    });
}