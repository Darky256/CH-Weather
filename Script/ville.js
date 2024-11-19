setInterval(myTimer, 300000);
affichage();

function myTimer() {
    affichage();
}

function affichage() {

    $.getJSON("https://www.prevision-meteo.ch/services/json/la-chaux-de-fonds", function (json) {

        $("#nom").html(json.city_info.name + " " + json.city_info.elevation + " m");

        $('#actuel').html("");
        $('#futur').html("");
        for (var i = 0; i <= 4; i++) {
            var day = "fcst_day_" + i;

            //Les labels du graphique
            const labels = [
                '0h00',
                '1h00',
                '2h00',
                '3h00',
                '4h00',
                '5h00',
                '6h00',
                '7h00',
                '8h00',
                '9h00',
                '10h00',
                '11h00',
                '12h00',
                '13h00',
                '12h00',
                '15h00',
                '16h00',
                '17h00',
                '18h00',
                '19h00',
                '20h00',
                '21h00',
                '22h00',
                '23h00'
            ];

            //Les informations du graphique
            const data = {
                labels: labels,
                datasets: [
                    {
                        label: 'Température',
                        backgroundColor: 'rgb(255, 0, 0)',
                        borderColor: 'rgb(255, 0, 0)',
                        data: [json[day].hourly_data["0H00"].TMP2m, json[day].hourly_data["1H00"].TMP2m, json[day].hourly_data["2H00"].TMP2m,
                        json[day].hourly_data["3H00"].TMP2m, json[day].hourly_data["4H00"].TMP2m, json[day].hourly_data["5H00"].TMP2m,
                        json[day].hourly_data["6H00"].TMP2m, json[day].hourly_data["7H00"].TMP2m, json[day].hourly_data["8H00"].TMP2m,
                        json[day].hourly_data["9H00"].TMP2m, json[day].hourly_data["10H00"].TMP2m, json[day].hourly_data["11H00"].TMP2m,
                        json[day].hourly_data["12H00"].TMP2m, json[day].hourly_data["13H00"].TMP2m, json[day].hourly_data["14H00"].TMP2m,
                        json[day].hourly_data["15H00"].TMP2m, json[day].hourly_data["16H00"].TMP2m, json[day].hourly_data["17H00"].TMP2m,
                        json[day].hourly_data["18H00"].TMP2m, json[day].hourly_data["19H00"].TMP2m, json[day].hourly_data["20H00"].TMP2m,
                        json[day].hourly_data["21H00"].TMP2m, json[day].hourly_data["22H00"].TMP2m, json[day].hourly_data["23H00"].TMP2m]
                    }, {

                        label: 'Pluie',
                        backgroundColor: 'rgb(0, 255, 255)',
                        borderColor: 'rgb(0, 255, 255)',
                        data: [json[day].hourly_data["0H00"].APCPsfc, json[day].hourly_data["1H00"].APCPsfc, json[day].hourly_data["2H00"].APCPsfc,
                        json[day].hourly_data["3H00"].APCPsfc, json[day].hourly_data["4H00"].APCPsfc, json[day].hourly_data["5H00"].APCPsfc,
                        json[day].hourly_data["6H00"].APCPsfc, json[day].hourly_data["7H00"].APCPsfc, json[day].hourly_data["8H00"].APCPsfc,
                        json[day].hourly_data["9H00"].APCPsfc, json[day].hourly_data["10H00"].APCPsfc, json[day].hourly_data["11H00"].APCPsfc,
                        json[day].hourly_data["12H00"].APCPsfc, json[day].hourly_data["13H00"].APCPsfc, json[day].hourly_data["14H00"].APCPsfc,
                        json[day].hourly_data["15H00"].APCPsfc, json[day].hourly_data["16H00"].APCPsfc, json[day].hourly_data["17H00"].APCPsfc,
                        json[day].hourly_data["18H00"].APCPsfc, json[day].hourly_data["19H00"].APCPsfc, json[day].hourly_data["20H00"].APCPsfc,
                        json[day].hourly_data["21H00"].APCPsfc, json[day].hourly_data["22H00"].APCPsfc, json[day].hourly_data["23H00"].APCPsfc]
                    }, {

                        label: 'Neige',
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderColor: 'rgb(255, 255, 255)',
                        data: [json[day].hourly_data["0H00"].IISNOW, json[day].hourly_data["1H00"].ISSNOW, json[day].hourly_data["2H00"].ISSNOW,
                        json[day].hourly_data["3H00"].ISSNOW, json[day].hourly_data["4H00"].ISSNOW, json[day].hourly_data["5H00"].ISSNOW,
                        json[day].hourly_data["6H00"].ISSNOW, json[day].hourly_data["7H00"].ISSNOW, json[day].hourly_data["8H00"].ISSNOW,
                        json[day].hourly_data["9H00"].ISSNOW, json[day].hourly_data["10H00"].ISSNOW, json[day].hourly_data["11H00"].ISSNOW,
                        json[day].hourly_data["12H00"].ISSNOW, json[day].hourly_data["13H00"].ISSNOW, json[day].hourly_data["14H00"].ISSNOW,
                        json[day].hourly_data["15H00"].ISSNOW, json[day].hourly_data["16H00"].ISSNOW, json[day].hourly_data["17H00"].ISSNOW,
                        json[day].hourly_data["18H00"].ISSNOW, json[day].hourly_data["19H00"].ISSNOW, json[day].hourly_data["20H00"].ISSNOW,
                        json[day].hourly_data["21H00"].ISSNOW, json[day].hourly_data["22H00"].ISSNOW, json[day].hourly_data["23H00"].ISSNOW]
                    }]


            };

            var delayed;
            const config = {
                type: 'bar',
                data: data,
                options: {
                    animation: {
                        onComplete: () => {
                            delayed = true;
                        },
                        delay: (context) => {
                            let delay = 0;
                            if (context.type === 'data' && context.mode === 'default' && !delayed) {
                                delay = context.dataIndex * 300 + context.datasetIndex * 100;
                            }
                            return delay;
                        },
                    },
                    scales: {
                        x: {
                            stacked: true,
                        },
                        y: {
                            stacked: true
                        }
                    }
                }
            };

            if (i == 0) {
                $("#myChart" + i).remove();

                $('#actuel').append(
                    "<h1>" + json.city_info.name + " " + json.city_info.elevation + " m" + "</h1>" +
                    "<div id='meteo_jour'>" + "<aside>" +
                    "<h3>" + json[day].day_long + "</h3>" +
                    "<h3>" + json[day].date + "</h3>" +
                    "<img src='" + json[day].icon_big + "' />" +
                    "<p id='tmp'><span class='gras'>Température</span> : " + "" + json.current_condition.tmp + " °C </p>" +
                    "<p id='wnd_spd' ><span class='gras'>Vent</span> : " + json.current_condition.wnd_spd + " km/h </p>" +
                    "<p id='humidity'><span class='gras'>Humidité</span> : " + json.current_condition.humidity + " % </p>" +
                    "<p><span class='min'>Temp. min: " + json[day].tmin + '°C' + "</span></p>" +
                    "<p><span class='max'>Temp. max: " + json[day].tmax + '°C' + "</span></p></aside>" +
                    "<div class='graph' ><canvas id='myChart" + i + "'></canvas></div></div>"
                );

                myChart = new Chart(
                    document.getElementById("myChart" + i),
                    config
                );
            }
            else {
                $("#myChart" + i).remove();
                $('#futur').append("<div id='div'>" +
                    "<h3>" + json[day].day_long + "</h3>" +
                    "<h3>" + json[day].date + "</h3>" +
                    "<img class='img-center' src='" + json[day].icon_big + "' />" +
                    "<p><span class='min'>Min: " + json[day].tmin + ' <' + "</span>   <span class='max'>>  Max: " + json[day].tmax + "</span></p>" +
                    "<div><canvas id='myChart" + i + "'></canvas><div></div>");

                myChart = new Chart(
                    document.getElementById("myChart" + i),
                    config
                );

            }
        }
    });
}

