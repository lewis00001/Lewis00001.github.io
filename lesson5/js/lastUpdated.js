// wait for the page to load then make changes
document.addEventListener('DOMContentLoaded', function() {        
    // get and format current date 
    let getDate = new Date();
    let dayOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric' 
    };
    let todaysDate = getDate.toLocaleDateString(undefined, dayOptions);

    // calls the pancake banner if the day is Friday
    if (todaysDate.split(',')[0] == 'Friday') {
        pancakeBanner();
    } else {
        console.log('No pancakes for you!')
    };

    // update the last modified date and time
    document.querySelector('#last-updated').textContent = 'Last Modified: ' + todaysDate;   
}, false); 

// allows the banner to display on Fridays
function pancakeBanner() {
    document.getElementsByClassName('banner')[0].classList.remove('hidden');
}