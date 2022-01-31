var recipeTitleEl = document.querySelector("#recipe-title");
var ingredientsEl = document.querySelector("#ingredients");
var instructionsEl = document.querySelector("#instructions");


var getRandomRecipe = function() {
    var apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php"

    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);
            recipeTitleEl.innerHTML = data.meals[0].strMeal;
            instructionsEl.innerHTML = "Instructions: <br> " + data.meals[0].strInstructions;
            ingredientsEl

        });
    });

};

getRandomRecipe();