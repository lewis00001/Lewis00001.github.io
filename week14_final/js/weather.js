const apiKey = 'a981a2689a0391721cbc66577613f812';
const latLon = 'lat=40.1652335&lon=-111.6107526';
const ex = 'exclude=hourly,minutely';
const requestURL = `https://api.openweathermap.org/data/2.5/onecall?${latLon}&${ex}&units=imperial&appid=${apiKey}`;


// adding a fake alert section since I never saw any actual alerts come through to test with
const alerts = [
    {
      "sender_name": "NWS Tulsa",
      "event": "Heat Advisory",
      "start": 1470003907836,
      "end": 1470503007836,
      "description": "Heat index values of 105 to 109 degrees expected in the Springville, UT area."
    }
];

fetch(requestURL)
    .then((response) => response.json())
    .then((object) => {
        // get data by type
        let current = object.current;
        let daily = object.daily;
        // let alert = object.alert;
        let alert = alerts;

        // output alert data if any
        if (alert != undefined) {
            let start = new Date(alert[0].start).toDateString();
            let end = new Date(alert[0].end).toDateString();
            // div to output to
            let weatherAlert = document.querySelector('.weather-alert');
            // create output html
            let alertOutput = 
                `<h3>${alert[0].event} in effect: ${start} - ${end}</h3>
                <p>
                    ${alert[0].description}
                    <span id="close-weather-banner">CLOSE</span>
                </p>`;
            // output alert to the UI
            weatherAlert.insertAdjacentHTML('beforeend', alertOutput);
            // listen for the user click and hide the banner
            let bClose = document.querySelector('#close-weather-banner');
            bClose.addEventListener('click', function() {
                weatherAlert.classList.add('hidden');
            });
        }

        // output current weather
        let currentOutput = 
            `<div class="temp-icon">
                <div class="t">
                    <div class="temp">${parseInt(current.temp)}&#176;</div>
                    <div class="humidity">RH: ${current.humidity}%</div>
                </div>
                <div class="icon-condition">
                    <img src='http://openweathermap.org/img/w/${current.weather[0].icon}.png' alt='weather icon'>
                    <div class="w-icon">${current.weather[0].description}</div>
                </div>
            </div>`;
        
        // output current weather to UI
        document.querySelector('.current-weather').innerHTML = currentOutput;

        // get and output the three day forecast
        let sevenDay = [];
        // loops through response
        for(let i = 0; i < daily.length; i++) {
            // icon and temp obj
            let w = {
                wIcon: daily[i].weather[0].icon,
                wDesc: daily[i].weather[0].description,
                wTemp: parseInt(daily[i].temp.day),
                wHumi: daily[i].humidity,
                wDate: daily[i].dt
            };
            // pushes icon and temp object to the sevenDay array
            sevenDay.push(w);
        }

        // set number of days to output
        let numDays = 3;
        // loops through the sevenDay array and outputs the data to the page
        for(let i = 1; i <= numDays; i++) {
            // set value for content output
            let o_icon = `https://openweathermap.org/img/w/${sevenDay[i].wIcon}.png`;
            let o_desc = sevenDay[i].wDesc;
            let o_temp = sevenDay[i].wTemp;
            let o_humi = sevenDay[i].wHumi;
            let o_date = sevenDay[i].wDate;
            // get html elements
            let dayOutput = document.querySelector('#day-output');
            let weatherOutput = document.querySelector('#weather-output');

            // create elements
            let dayTh = document.createElement('th');

            // creates weather information content
            let weatherInfo = 
                `<td class="forecast-info">
                    <img src="${o_icon}" alt="${o_desc}" class="w-icon">
                    <div>
                        <div class="f-i-temp">${o_temp} &#176;F</div>
                        <div>RH: ${o_humi}%</div>
                        <div>${o_desc}</div>
                    </div>
                </td>`;

            // add content to elements
            dayTh.textContent = calcDayOfWeek(o_date);
            // add elements to html
            dayOutput.appendChild(dayTh);
            weatherOutput.insertAdjacentHTML('beforeend', weatherInfo);
        }
        
        // output alerts

});

// returns a long string day of week based on date
function calcDayOfWeek(date) {
    // sets the date to the epoch
    var d = new Date(0);
    d.setUTCSeconds(date);
    // converts to local week day
    let dayOfWeek = d.toLocaleString('en-us', {weekday: 'long'});
    return dayOfWeek;
}
