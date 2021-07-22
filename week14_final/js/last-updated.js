// wait for the page to load then make changes
document.addEventListener('DOMContentLoaded', function() {        
    // get and format current date 
    let getDate = new Date();
    let dayOptions = {
        weekday: 'long',
        year: 'numeric',
        day: 'numeric' ,
        month: 'long'
    };
    
    let todaysDate = getDate.toLocaleDateString('en-GB', dayOptions);

    // update the last modified date and time
    document.querySelector('#last-updated').append(todaysDate);
}, false); 