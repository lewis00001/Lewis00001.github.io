const requestURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=idaho&api-key=FP56aerxzJGzpCf6ChlymrOkgA1BtZOE';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {

    // holds the news article array
    const news = jsonObject.response.docs;
    // gets the length of the news array for the forLoop
    let length = Object.keys(jsonObject.response.docs).length;

    for (let i = 0; i < length; i++ ) {
      
      // create html elements
      let articleDiv = document.createElement('div');
      let headline = document.createElement('h2');
      let snippet = document.createElement('p');
      let url = document.createElement('a');
      
      // add classes
      articleDiv.classList.add('home-article-div');
      headline.classList.add('home-headline');
      snippet.classList.add('home-p');
      url.classList.add('home-article-url');

      // add content
      headline.textContent = news[i].headline.main;
      snippet.textContent = news[i].snippet;
      url.href = news[i].web_url;
      url.target = '_blank';
      url.textContent = 'Read More ...';

      // output content to the page
      articleDiv.appendChild(headline);
      articleDiv.appendChild(snippet).appendChild(url);
      document.querySelector('.home-news').appendChild(articleDiv);
  }

});