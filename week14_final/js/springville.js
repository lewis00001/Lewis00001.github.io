const stats = [
    {
        name: 'Population',
        value: '33,816'
    },
    {
        name: 'Growth Rate',
        value: '4.6 %'
    },
    {
        name: 'Race: white',
        value: '92.55 %'
    },
    {
        name: 'Race: other',
        value: '7.45 %'
    },
    {
        name: 'Age (avg.)',
        value: '25'
    },
    {
        name: 'Number of Veterans',
        value: '951'
    },
    {
        name: 'Percent (over 65)',
        value: '14.8 %'
    },
    {
        name: 'Female',
        value: '50.6 %'
    },
    {
        name: 'Male',
        value: '49.4 %'
    },
    {
        name: 'Home Ownership',
        value: '69 %'
    },
    {
        name: 'Married',
        value: '61.9 %'
    },
    {
        name: 'Household Size (avg.)',
        value: '3.95'
    },
    {
        name: 'College Degree (over 25)',
        value: '47 %'
    },
    {
        name: 'Avg. Income (college)',
        value: '$ 59,696'
    },
    {
        name: 'Avg. Income (HS or less)',
        value: '$ 34,930'
    },
    {
        name: 'Poverty Rate',
        value: '7.7 %'
    }
];

// wait for the page to load then make changes
document.addEventListener('DOMContentLoaded', function() {
    
    // STAT DATA //
    // get element
    let statsData = document.querySelector('.stat-data-output');

    // loop through data and output content
    for (let i = 0; i < stats.length; i++) {
    // create content
        let dataContent = 
            `<div class="content">
                <div class="name">${stats[i].name}:</div>
                <div class="divider"></div>
                <div class="value">${stats[i].value}</div>
            </div>`;

        // output the stat content
        statsData.insertAdjacentHTML('beforeend', dataContent);
    }

    // SLIDE SHOW IMG LOAD
    // get elements
    let sl1 = document.querySelector('[role="list-1"]');
    let sl2 = document.querySelector('[role="list-2"]');
    let sl3 = document.querySelector('[role="list-3"]');

    // loop and create/output content
    for (let i = 1; i <= 5 ; i++) {
        let num1 = Math.floor(Math.random() * 17) + 1;
        let num2 = Math.floor(Math.random() * 17) + 1;
        let num3 = Math.floor(Math.random() * 17) + 1;

        // create content for slideshow 1
        let slideContent1 = 
            `<div class="slide">
                <img src="./images/springville/${num1}.jpg" alt="springville image ${num1}"></img>
            </div>`;
        // output to slideshow 1
        sl1.insertAdjacentHTML('beforeend', slideContent1);

        // create content for slideshow 2
        let slideContent2 = 
            `<div class="slide">
                <img src="./images/springville/${num2}.jpg" alt="springville image ${num2}"></img>
            </div>`;
        // output to slideshow 1
        sl2.insertAdjacentHTML('beforeend', slideContent2);

        // create content for slideshow 3
        let slideContent3 = 
        `<div class="slide">
            <img src="./images/springville/${num3}.jpg" alt="springville image ${num3}"></img>
        </div>`;
        // output to slideshow 1
        sl3.insertAdjacentHTML('beforeend', slideContent3);
    }

    // get element
    const slideshowsD1 = document.querySelectorAll('[data-component="slideshow-1"]');
    // calls slideshow function for each image
    slideshowsD1.forEach(runSlideShow1);

    // run the slideshow
    function runSlideShow1(slideshow) {
        // holds slides
        let slides = document.querySelectorAll(`#${slideshow.id} [role="list-1"] .slide`);
        // vars 
        let i = 0, time = 3000;
        // makes current slide active
        slides[i].classList.add('active');
        // waits and removes active class from current slide
        setInterval( () => {
            slides[i].classList.remove('active');
            // restarts slideshow if end is reached
            i++;
            if (i === slides.length) i = 0;

            slides[i].classList.add('active');
        }, time);
    }


    // get element
    const slideshowsD2 = document.querySelectorAll('[data-component="slideshow-2"]');
    // calls slideshow function for each image
    slideshowsD2.forEach(runSlideShow2);

    // run the slideshow
    function runSlideShow2(slideshow) {
        // holds slides
        let slides = document.querySelectorAll(`#${slideshow.id} [role="list-2"] .slide`);
        // vars 
        let i = 0, time = 4000;
        // makes current slide active
        slides[i].classList.add('active');
        // waits and removes active class from current slide
        setInterval( () => {
            slides[i].classList.remove('active');
            // restarts slideshow if end is reached
            i++;
            if (i === slides.length) i = 0;

            slides[i].classList.add('active');
        }, time);
    }

    // get element
    const slideshowsD3 = document.querySelectorAll('[data-component="slideshow-3"]');
    // calls slideshow function for each image
    slideshowsD3.forEach(runSlideShow3);

    // run the slideshow
    function runSlideShow3(slideshow) {
        // holds slides
        let slides = document.querySelectorAll(`#${slideshow.id} [role="list-3"] .slide`);
        // vars 
        let i = 0, time = 3500;
        // makes current slide active
        slides[i].classList.add('active');
        // waits and removes active class from current slide
        setInterval( () => {
            slides[i].classList.remove('active');
            // restarts slideshow if end is reached
            i++;
            if (i === slides.length) i = 0;

            slides[i].classList.add('active');
        }, time);
    }

}, false);



