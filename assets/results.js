var cocktailContainerEl = document.querySelector('#cocktail-container')




function getParams() {
    var searchParamsArr = document.location.search.split();
    console.log(searchParamsArr)

    var query = searchParamsArr[0].split('=').pop();
    console.log(query)

saveLandingPageInput(query);    
}

function saveLandingPageInput(userInput) {
// save user input to shared array for local storage
}

function getCocktailData(userInput) {
    var apiUrl = 'https://api.api-ninjas.com/v1/cocktail?name='+userInput;
    var options = {
        method: 'GET',
        headers: {'x-api-key': 'GMHVNXZRoCDIxxWN2NU9VQ==QnmOLePp49huqtNq'}
    }

    fetch(apiUrl, options)
    .then(function(response) {
        if (response.ok) {
            response.json().then(function(data) {
                ingredientsIndex = 0;
                displayCocktailData(data);
                // console.log(data);
            })
        } else {
            alert('Error:' + response.statusText);
        }
    })
}

function displayCocktailData(data) {
    var cocktailDiv = document.createElement('div')
    cocktailContainerEl.appendChild(cocktailDiv);

    console.log(data)


for (var i = 0; i < data.length; i++) {
    console.log(data[i])

    for (var j=0; j < data[i].ingredients.length; j++) {
        console.log(data[i].ingredients[j])
    }
    console.log(data[i].name)
    console.log(data[i].instructions)

}





}








getParams();

    // data.forEach(d => {
    //     for (let key in d) {
    //         // console.log(`${key}: ${d[key]}`)
    //         // console.log(d.ingredients)
    //          console.log(d[key])
    //         //  cocktailDiv.textContent=`${key}: ${d[key]}`

    //         var ingredientsDiv = document.createElement('div')
    //         ingredientsDiv.textContent = d.ingredients
    //         cocktailDiv.appendChild(ingredientsDiv)
    //          cocktailDiv.textContent= d.ingredients

    //         //  create div elements for each and text content to see if it gets displayed.
    //     }
    // })


    //     for (var i = 0; i < data.length; i++) {
//         // var cocktail = data[i];
//         for (var j = 0; j < data[i].ingredients.length; j++ ) {
//             var ingredients = data[i].ingredients[j];
//         }
//    console.log(ingredients)
//     }