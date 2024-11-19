
// Les informations des 3 Gauges
var opts = {
    angle: -0.25, // The span of the gauge arc
    lineWidth: 0.18, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
        length: 0.5, // // Relative to gauge radius
        strokeWidth: 0.06, // The thickness
        color: '#000000' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if value > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#0AFF33',   // Colors
    colorStop: '#0DDAB8',    // just experiment with them
    strokeColor: '#EEEEEE',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,     // High resolution support

};
// Mes différentes Gauges
var target = document.getElementById('g1'); // le nom de ton élément
var gauge1 = new Gauge(target).setOptions(opts); // le design de ton graph
gauge1.maxValue = 40; // la valeur maximal prévue
gauge1.setMinValue(0); // La valeur minimal
gauge1.animationSpeed = 42; // La vitesse d'animation

var target = document.getElementById('g2'); // le nom de ton élément
var gauge2 = new Gauge(target).setOptions(opts); // le design de ton graph
gauge2.maxValue = 2000; // la valeur maximal prévue
gauge2.setMinValue(0); // La valeur minimal
gauge2.animationSpeed = 42; // La vitesse d'animation

var target = document.getElementById('g3'); // le nom de ton élément
var gauge3 = new Gauge(target).setOptions(opts); // le design de ton graph
gauge3.maxValue = 100; // la valeur maximal prévue
gauge3.setMinValue(0); // La valeur minimal
gauge3.animationSpeed = 42; // La vitesse d'animation