var recipeTitleEl = document.querySelector("#recipe-title");
var ingredientsEl = document.querySelector("#ingredients");
var instructionsEl = document.querySelector("#instructions");
var randomRecipeBtnEl = document.querySelector("#random-btn");
var mealImgEl = document.querySelector("#meal-img");
var nutritionFactsEl = document.querySelector("#nutrition-facts");




var getRandomRecipe = function() {
    var apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php"

    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);
            const meal = data.meals[0];
            recipeTitleEl.innerHTML = meal.strMeal;
            instructionsEl.innerHTML = "Instructions: <br> " + meal.strInstructions;
            ingredientsEl.innerHTML = "Ingredients: <br>";
            
            for(let i = 1; i < 21; i++){
                if(meal['strIngredient' + i] !== "") {
                    ingredientsEl.innerHTML += meal['strIngredient' + i] + ": " + meal['strMeasure' + i] + "<br>";
                } else {}

                //console.log(meal['strIngredient' + i] + ', ' + meal['strMeasure' + i])
            }
            var imgSrc = meal['strMealThumb'];
            mealImgEl.setAttribute('src', imgSrc+"/preview")


        });
    });

};

var randomBtnHandler = function () {
    recipeTitleEl.innerHTML = "";
    ingredientsEl.innerHTML = "";
    instructionsEl.innerHTML = "";
    getRandomRecipe();
}



randomRecipeBtnEl.addEventListener("click", randomBtnHandler);