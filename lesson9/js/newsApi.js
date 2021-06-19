const requestURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=idaho&api-key=FP56aerxzJGzpCf6ChlymrOkgA1BtZOE';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    // holds the news artical array
    const news = jsonObject.response.docs;
    // gets the length of the news array for the forLoop
    let length = Object.keys(jsonObject.response.docs).length;

    for (let i = 0; i < length; i++ ) {
      
      console.log(news[i]);
      
      // create html elements
      let articalDiv = document.createElement('div');
      let headline = document.createElement('h2');
      let snippet = document.createElement('p');
      let url = document.createElement('a');
      
      // add classes
      articalDiv.classList.add('home-artical-div');
      headline.classList.add('home-headline');
      snippet.classList.add('home-p');
      url.classList.add('home-artical-url');

      // add content
      headline.textContent = news[i].headline.main;
      snippet.textContent = news[i].snippet;
      url.href = news[i].web_url;
      url.target = '_blank';
      url.textContent = 'Read More ...';

      articalDiv.appendChild(headline);
      articalDiv.appendChild(snippet).appendChild(url);
      document.querySelector('.home-news').appendChild(articalDiv);
  }

});