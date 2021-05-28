// display welcome banner if a name if losded in local memory
document.addEventListener('DOMContentLoaded', function() {
    // get the name from local storage
    let usersName = localStorage.getItem('uName');
        // calls and passes name to banner function
        welcomeBanner(usersName);
 }, false);

 function welcomeBanner(name) {
     // random greeting list
     let greetingArray = [
         'we\'re so glad you\'re here',
         'have a wonderful day',
         'we hope you have sunshine',
         'you are the best',
         'some clouds look like puppies',
         'it\'s ok to dance in the rain'
     ];
    let b = document.getElementsByClassName('welcome-banner')[0];
    // check to see if there is a name in local memory
    if (name != null) {
        // get a random int between 0 and the length of the array
        let getNum = Math.floor(Math.random() * greetingArray.length);
        // addes the text to the welcome banner
        b.textContent = `Hey ${name}, ${greetingArray[getNum]}!`;
        // unhides the welcome banner
        b.classList.remove('hidden');
    } else {
        // if there's no name, ensures the welcome banner is hidden
        b.classList.add('hidden');
    }
 }

// triggers the modal to open / close
function triggerModal() {
    document.getElementsByClassName('modal')[0].classList.toggle('hidden');
    document.getElementById('modal-feedback').innerHTML = '';
}

// listens for clicks and closes the name modal
document.getElementsByClassName('close-modal')[0].addEventListener('click', function() {
    triggerModal();
})
document.getElementsByClassName('close-modal')[1].addEventListener('click', function() {
    triggerModal();
})

// function adds users name to local memory
function addNameLocal() {
    let nameEntered = document.getElementById('modal-name-input').value.trim();
    // if a valid name is entered, add it to local memory
    if (nameEntered != "") {
        // adds name to local storage
        localStorage.setItem('uName', nameEntered);
        // name saved growl
        document.getElementById('modal-feedback').innerHTML = '<span class="green">name saved<span>';
        // calls banner function
        welcomeBanner(nameEntered);
    } else {
        // name not valid growl
        document.getElementById('modal-feedback').innerHTML = '<span class="red">enter a valid name<span>';
    }
}