var lyricInputEl = document.querySelector('#lyric-form');



function wikiSearchSubmit(event) {
    event.preventDefault();

    var userInputEl = document.querySelector('#userinput').value;
    console.log(userInputEl);

    if (!userInputEl) {
        alert('Please enter music lyrics');
        return;
    }

    var queryString = './results.html?q=' + userInputEl;

    location.assign(queryString);
}


lyricInputEl.addEventListener('submit', wikiSearchSubmit);