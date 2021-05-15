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

    // update the last modified date and time
    document.querySelector('#last-updated').textContent = 'Last Modified: ' + todaysDate;   
 }, false); 
