const events = 'https://lewis00001.github.io/wdd-lesson-14/directory.json';

fetch(events)
  .then(function (response) {
    return response.json();
  })
  .then(function (object) {
      // store events array
      let biz = object.biz;

    // loop through the events
    for (let i = 0; i < biz.length; i++) {
        let b = biz[i];

        // create event output
        let eventOutput = `
            <div class="biz-data-card">
                <div class="img">
                    <img src="${b.logo}" alt="${b.name} logo"</img>
                </div>
                <div class="biz-info">
                    <div class="name">${b.name}</div>

                    <div>
                        <div class="address">${b.address}</div>
                        <div>Springville, UT 84663</div>
                    </div>

                    <div>
                        <div class="phone">${b.phone}</div>
                    </div>

                    <div>
                        <div class="email">${b.email}</div>
                        <div class="url">${b.url}</div>
                        <div class="button">
                            <a href="http://www.${b.url}/" target="_blank">
                                <div>Check 'em Out</div> 
                            </a>
                        </div>
                    </div>
                </div>
            </div>`;

        // output event to the webpage
        document.querySelector('.card-output-card').insertAdjacentHTML('beforeend', eventOutput);
    }
    })
    .then(function() {

        const cardBtn = document.querySelector('#card');
        const listBtn = document.querySelector('#list');
        const cardOutput = document.querySelector('.card-output-card');
        const bizData = document.querySelectorAll('.biz-data-card');
        
        listBtn.addEventListener('click', () => {
            listBtn.classList.toggle('active');
            cardBtn.classList.toggle('active');

            cardOutput.classList.add('card-output-list');
        
            bizData.forEach(function(e, i, bizData) {
                bizData[i].classList.add('biz-data-list');
            });
        });
        
        cardBtn.addEventListener('click', () => {
            listBtn.classList.toggle('active');
            cardBtn.classList.toggle('active');

            cardOutput.classList.remove('card-output-list');

            bizData.forEach(function(e, i, bizData) {
                bizData[i].classList.remove('biz-data-list');
            });
        });
});




