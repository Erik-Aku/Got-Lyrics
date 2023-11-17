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
        alert('Please enter a cocktail');
        return;
    } else {
        getCocktailData(cocktailInput);
        cocktailContainerEl.textContent = "";
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
    cardDivEl.classList='card-div';
    cardDivEl.style.cssText="border: solid; width:400px; margin:10px;";
    cocktailGroupDiv.appendChild(cardDivEl);

    var cardBodyDiv = document.createElement('div');
    cardBodyDiv.classList='card-body';
    cardBodyDiv.style.cssText="width: 400px; padding:10px;";
    cardDivEl.appendChild(cardBodyDiv);

    var cardTitle = document.createElement('h2');
    cardTitle.classList='card-title';
    cardTitle.style.cssText="padding: 1px; font-weight: 400; margin:1px";
    cardTitle.textContent=data[i].name;
    cardBodyDiv.appendChild(cardTitle);

    var instructionsTitle = document.createElement('h3');
    instructionsTitle.classList='instructions-title';
    instructionsTitle.textContent = 'Instructions:';
    instructionsTitle.style.cssText="padding: 1px; font-weight: bold; margin-top:10px";
    cardBodyDiv.appendChild(instructionsTitle);

    var instructionsPEl = document.createElement('p');
    instructionsPEl.classList='instructions';
    instructionsPEl.textContent = data[i].instructions;
    cardBodyDiv.appendChild(instructionsPEl);

    var ingredientsTitle = document.createElement('h3');
    ingredientsTitle.classList='ingredients-title';
    ingredientsTitle.textContent = 'Ingredients:';
    ingredientsTitle.style.cssText="font-weight: bold; margin-top:10px;";
    cardBodyDiv.appendChild(ingredientsTitle);

    var cardBodyUl = document.createElement('ul');
    cardBodyUl.classList="card-body-ul";
    cardBodyDiv.appendChild(cardBodyUl);


    for (var j=0; j < data[i].ingredients.length; j++) {
        console.log(data[i].ingredients[j])

        var ingredientsLi = document.createElement('li');
        ingredientsLi.classList='ingredients';
        ingredientsLi.style.cssText='padding:5px;'
        ingredientsLi.textContent = data[i].ingredients[j];
        cardBodyUl.appendChild(ingredientsLi);

    }
   
    console.log(data[i].name)
    console.log(data[i].instructions)
       // save data result data to local storage
       var name = data[i].name;
       var instructionsList = data[i].instructions;
       storeData.push({name, instructionsList});
       console.log(storeData)
       localStorage.setItem("event", JSON.stringify(storeData));
       
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