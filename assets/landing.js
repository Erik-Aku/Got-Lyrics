var landingInputEl = document.querySelector('#lyric-form');



function landingSubmit(event) {
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


landingInputEl.addEventListener('submit', landingSubmit);