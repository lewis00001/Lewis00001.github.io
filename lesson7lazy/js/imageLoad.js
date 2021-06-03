document.addEventListener('DOMContentLoaded', function() {
    let images = [
        {
            link: './images/1.jpg'
        }
    ]

    console.log(images[0].link);

    let  = document.getElementsByClassName('assgnLinks');
    for (let i = 0; i < images.length; i++) {
        let attVal = links[i].getAttribute('href');
        if (attVal != '#') {
            links[i].innerHTML += '<span class="isDone"><i class="fas fa-check-circle"></i></i></span>';
        } else {
            links[i].innerHTML += '<span class="isDone">--</span>';
        }
    }
});

