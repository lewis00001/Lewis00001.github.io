// wait for the page to load then make changes
document.addEventListener('DOMContentLoaded', function() {
    // create vars for the temp and wind speed
    let temp = parseInt(document.querySelector('#d-temp').textContent);
    let windSpeed = parseInt(document.querySelector('#d-wind-s').textContent);
    // var for wind chill
    let windChill = '';
    
    // check to see if windchill should be calculated
    if (temp > 50 || windSpeed < 3) {
        windChill = '--';
    // if temp is below 50 and wind speed is more than 3 mph
    } else {
        windChill = parseInt((35.74 + (0.6215 * temp)) -
        (35.75 * Math.pow(windSpeed, 0.16)) + 
        (0.4275 * temp * Math.pow(windSpeed, 0.16)));
    }

    console.log(windChill);

    // output the windchill result
    document.querySelector('#d-wind-c').textContent = windChill;

 }, false);