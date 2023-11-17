var cocktailContainerEl = document.querySelector('#cocktail-container')
var searchFormEl = document.querySelector('#search-input-form')

var storeData = [];




function getParams() {
    var searchParamsArr = document.location.search.split();
    console.log(searchParamsArr)

    var query = searchParamsArr[0].split('=').pop();
    // console.log(query)

    storeData.push({query});
    // console.log(storeData)

    // save user in put to share local storage array
    localStorage.setItem("event", JSON.stringify(storeData));
}

function searchSubmit(event) {
    event.preventDefault();

    var cocktailInput = document.querySelector('#cocktail-input').value;
    console.log(cocktailInput)

    if (!cocktailInput) {
        alert('Please enter music lyrics');
        return;
    } else {
        getCocktailData(cocktailInput);
    }


}

function getCocktailData(userInput) {
    // console.log(userInput)
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
    var cocktailGroupDiv = document.createElement('div')
    cocktailGroupDiv.classList="card-group";
    cocktailContainerEl.appendChild(cocktailGroupDiv);

    console.log(data)


for (var i = 0; i < data.length; i++) {
    console.log(data[i])

    var cardDivEl = document.createElement('div');
    cardDivEl.classList='card-div'
    cardDivEl.style.cssText="border: solid; width:400px; height:200px;";
    cocktailGroupDiv.appendChild(cardDivEl);

    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList='card-body'
    cardBodyDiv.style.cssText="width: 400px;";
    cardDivEl.appendChild(cardBodyDiv);

    for (var j=0; j < data[i].ingredients.length; j++) {
        console.log(data[i].ingredients[j])
    }
   


    console.log(data[i].name)
    console.log(data[i].instructions)
}





}

getParams();

searchFormEl.addEventListener('submit', searchSubmit);




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