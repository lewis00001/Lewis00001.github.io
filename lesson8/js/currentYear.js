// wait for the page to load then make changes
document.addEventListener('DOMContentLoaded', function() {
    // create a var for the current year
    let fYear = new Date().getFullYear();
    // add current year to the html page
    document.querySelector('#current-year').textContent = fYear;

    // sets the value of the date in the storm center form to the current date
    const date = new Date().toISOString().slice(0, 10);
    document.getElementById("storm-date").setAttribute("value", date);
 }, false);