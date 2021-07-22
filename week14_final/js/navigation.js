// wait for the page to load then make changes
document.addEventListener('DOMContentLoaded', function() {
    // get nav element
    let nav = document.querySelector('nav');
    // get the page title
    let pageTitle = document.querySelector('.page-title').textContent;
    // create nav content
    let navContent = 
        `<ul class="navigation">
            <li class="nav-li"><a href="#" onclick="toggleMenu()">
                <span class="button">&#9776; MENU</span></a></li>
            <li class="nav-li"><a href="./index.html">Home</a></li>
            <li class="nav-li"><a href="./springville.html">Springville</a></li>
            <li class="nav-li"><a href="directory.html">Directory</a></li>
            <li class="nav-li"><a href="./join-us.html">Join Us</a></li>
            <li class="nav-li"><a href="./contact.html">Contact</a></li>
        </ul>`;
    // output the nav content
    nav.innerHTML = navContent;

    // loop through nav elements to add the 'active' class to current page
    Array.from(document.getElementsByClassName('nav-li')).forEach(
        function(element) {
            // get the text content of each anchor insite each li
            let e = element.children[0].textContent;
            // compare current text content to page title
            if (e == pageTitle) {
                element.classList.add('active');
            }
        }
    );

 }, false);