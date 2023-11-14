var lyricInputEl = document.querySelector('#lyric-form');



function wikiSearchSubmit(event) {
    event.preventDefault();

    var userInputEl = document.querySelector('#userinput').value;
    console.log(userInputEl);

    if (!userInputEl) {
        alert('Please enter music lyrics');
        return
    } else {
        getWikiData(userInputEl);
    }
}

function getWikiData(userInput) {
    // var apiUrl = 'https://www.mediawiki.org/w/api.php?action=opensearch&format=json&search=' + userInput;

    var apiUrl = 'https://www.mediawiki.org/w/api.php?action=query&list=search&srsearch='+userInput+'&fromat=json';

    fetch(apiUrl)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data);
            })
        }
    })


}



lyricInputEl.addEventListener('submit', wikiSearchSubmit);