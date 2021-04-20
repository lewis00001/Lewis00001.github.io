document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('lastUpdated').innerHTML = 'Last Modified ' + document.lastModified;
    let fYear = new Date().getFullYear();
    document.getElementById('currentYear').innerHTML = fYear;
 }, false); 
