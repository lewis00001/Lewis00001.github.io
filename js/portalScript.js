// wait for the page to load then make changes
document.addEventListener('DOMContentLoaded', function() {
    let assign = [
        {   week: '02',
            name: 'Design Principles',
            link: './lesson2/design-principles.html'
        },
        {   week: '03',
            name: 'Website Planning Doc',
            link: './lesson3/index.html'
        },
        {   week: '04',
            name: 'assignment-link',
            link: '#'
        },
        {   week: '05',
            name: 'assignment-link',
            link: '#'
        },
        {   week: '06',
            name: 'assignment-link',
            link: '#'
        },
        {   week: '07',
            name: 'assignment-link',
            link: '#'
        },
        {   week: '08',
            name: 'assignment-link',
            link: '#'
        },
        {   week: '09',
            name: 'assignment-link',
            link: '#'
        },
        {   week: '10',
            name: 'assignment-link',
            link: '#'
        },
        {   week: '11',
            name: 'assignment-link',
            link: '#'
        },
        {   week: '12',
            name: 'assignment-link',
            link: '#'
        },
        {   week: '13',
            name: 'assignment-link',
            link: '#'
        }
    ];

    // create li items for the ul
    let ul = document.getElementById('assignments_ul');
    for (let i = 0; i < assign.length; i++) {
        ul.innerHTML += `<li><a class='assgnLinks' href=${assign[i].link} 
        target='_blank'>Lesson ${assign[i].week} :: ${assign[i].name}</a></li>`;
    };
    
    // create a var for the current year
    let fYear = new Date().getFullYear();
    // add current year to the html page
    document.querySelector('#currentYear').textContent = fYear;
    // update the last modified date and time
    document.querySelector('#lastUpdated').textContent = 'Last Modified ' + document.lastModified;
    
    // loop through assignment list and add a check if the link has been added
    let links = document.getElementsByClassName('assgnLinks');
    for (let i = 0; i < links.length; i++) {
        let attVal = links[i].getAttribute('href');
        if (attVal != '#') {
            links[i].innerHTML += '<span class="isDone"><i class="fas fa-check-circle"></i></i></span>';
        } else {
            links[i].innerHTML += '<span class="isDone">--</span>';
        }
    }
}, false);

