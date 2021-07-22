document.addEventListener('DOMContentLoaded', function() {
    // get banner element
    let banner = document.querySelector('.join-us');
    // create banner content
    let bannerContent = 
        `<div class="banner">
            <a href="./join-us.html">
                <h1>Join Us Today!</h1>
            </a>
        </div>`;
    // output the banner content
    banner.innerHTML = bannerContent;
 }, false);