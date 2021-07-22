// wait for the page to load then make changes
document.addEventListener('DOMContentLoaded', function() {
    // get footer element
    let footer = document.querySelector('footer');
    // create footer content
    let footerContent = 
        `© <span id="current-year"></span> | E. Lewis Lockhart | Utah 
        <div class="footer-links">
            <a id="byui" href="https://www.byui.edu/online" target="_blank">BYUi Online Learning</a> :: 
            <a href="https://www.termsfeed.com/live/dfe36207-bac2-4c65-8796-468a5efa4ebd" target="_blank"><span id="terms">Terms of Use</span></a> :: 
            <a href="./attributions.html" target="_blank">Attributions</a>
        </div>
        <span id="last-updated">Modified: </span>`;
    // output the footer content
    footer.innerHTML = footerContent;
 }, false);

