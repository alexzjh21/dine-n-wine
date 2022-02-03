var recipeTitleEl = document.querySelector("#recipe-title");
var ingredientsEl = document.querySelector("#ingredients");
var instructionsEl = document.querySelector("#instructions");
var randomRecipeBtnEl = document.querySelector("#random-btn");
var mealImgEl = document.querySelector("#meal-img");
var nutritionFactsEl = document.querySelector("#nutrition-facts");
var formIngredientEl = document.querySelector("#stacked-ingredient");
var formMeasureEl = document.querySelector("#stacked-measure");
var formUnitEl = document.querySelector("#stacked-unit");
var nutritionButtonEl = document.querySelector("#nutrition-btn");
var calorieEl = document.querySelector("#calories-display");
var fatEl = document.querySelector("#fat-display");
var carbEl = document.querySelector("#carb-display");
var sugarEl = document.querySelector("#sugar-display");
var proteinEl = document.querySelector("#protein-display")
var filterBtnEl = document.querySelector("#filter-btn");
var dropdownEl = document.querySelector("#dropdown")
var dropdownPEl = document.querySelectorAll('#dropdown p')
var catHolder = document.querySelector('#category-holder')






var getRandomRecipe = function() {
    var apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php"

    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);
            const meal = data.meals[0];
            recipeTitleEl.innerHTML = meal.strMeal;
            instructionsEl.innerHTML = "Instructions: <br> " + meal.strInstructions;
            ingredientsEl.innerHTML = "Ingredients: <br>";
            // ingredientsEl.innerHTML = "Ingredients: <br>" + data.meals[0].strIngredient1 + ": " + data.meals[0].strMeasure1 + "<br>" +  data.meals[0].strIngredient2 + ": " + data.meals[0].strMeasure2 + "<br>" +  data.meals[0].strIngredient3 + ": " + data.meals[0].strMeasure3 + "<br>" + data.meals[0].strIngredient4 + ": " + data.meals[0].strMeasure4 + "<br>" +  data.meals[0].strIngredient5 + ": " + data.meals[0].strMeasure5 + "<br>" +  data.meals[0].strIngredient6 + ": " + data.meals[0].strMeasure6 + "<br>" +  data.meals[0].strIngredient7 + ": " + data.meals[0].strMeasure7 + "<br>" +  data.meals[0].strIngredient8 + ": " + data.meals[0].strMeasure8 + "<br>" +  data.meals[0].strIngredient9 + ": " + data.meals[0].strMeasure9 + "<br>" +  data.meals[0].strIngredient10 + ": " + data.meals[0].strMeasure10 + "<br>" +  data.meals[0].strIngredient11 + ": " + data.meals[0].strMeasure11 + "<br>" +  data.meals[0].strIngredient12 + ": " + data.meals[0].strMeasure12 + "<br>" +  data.meals[0].strIngredient13 + ": " + data.meals[0].strMeasure13 + "<br>" +  data.meals[0].strIngredient14 + ": " + data.meals[0].strMeasure14 + "<br>" +  data.meals[0].strIngredient15 + ": " + data.meals[0].strMeasure15 + "<br>" +  data.meals[0].strIngredient16 + ": " + data.meals[0].strMeasure16 + "<br>" +  data.meals[0].strIngredient17 + ": " + data.meals[0].strMeasure17 + "<br>" +  data.meals[0].strIngredient18 + ": " + data.meals[0].strMeasure18 + "<br>" +  data.meals[0].strIngredient19 + ": " + data.meals[0].strMeasure19 + "<br>" +  data.meals[0].strIngredient20 + ": " + data.meals[0].strMeasure20;
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

// filter the recipes based on the 14 categories
function filterByCat() {

    var category = this.innerText
    var filterApi = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category
    console.log(filterApi)
        
    fetch(filterApi)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
        var categoryCard = ""
        // shows all the recipies when clicking on the categories
        for(let i = 0; i < data.meals.length; i++) {
            categoryCard += `<div class="category-cards">
            <h2 id="category-name">${data.meals[i].strMeal}</h2>
            <p id="category-recipe"></p>
            </div>`

            // refactor for loop to dynamically create element using document.createElement
            // add attributes
            // add event listener
        }
            catHolder.innerHTML = categoryCard
            // show the cards for all the recipes in that category
            catHolder.classList.remove('hide')
    })

    // seperate function call www.themealdb.com/api/json/v1/1/lookup.php?i=(id) using event listener(line:91)

};

var randomBtnHandler = function (event) {
    recipeTitleEl.innerHTML = "";
    ingredientsEl.innerHTML = "";
    instructionsEl.innerHTML = "";
    getRandomRecipe();
}

var getNutritionFacts = function(event) {
    event.preventDefault();
    // define var's for the form inputs using formEl.value.trim()
    var unit = formUnitEl.value;
    var measure = formMeasureEl.value;
    var ingredient = formIngredientEl.value.trim();

   // console.log(measure, unit, ingredient);

    // set apiUrl
    var apiUrl = "https://api.edamam.com/api/nutrition-data?app_id=473c3718&app_key=e09fdcbb8cd2aea6a1be56f7812d7c2f&nutrition-type=cooking&ingr=" + measure + "%20" + unit + "%20" + ingredient

    // fetch call using form var and apiUrl
    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);
            calorieEl.innerHTML = data.calories;
            fatEl.innerHTML = data.totalNutrients.FAT.quantity + data.totalNutrients.FAT.unit;
            carbEl.innerHTML = data.totalNutrients.CHOCDF.quantity + data.totalNutrients.CHOCDF.unit;
            sugarEl.innerHTML = data.totalNutrients.SUGAR.quantity + data.totalNutrients.SUGAR.unit;
            proteinEl.innerHTML = data.totalNutrients.PROCNT.quantity + data.totalNutrients.PROCNT.unit;

        })
    })
}

// show dropdown menu when click the filter by category button
function showDropdown() {
    dropdownEl.classList.remove("hide");
}

// calls the filter by category function when click on one of the categories
dropdownPEl.forEach(function(el){
    el.addEventListener("click", filterByCat);
})


randomRecipeBtnEl.addEventListener("click", randomBtnHandler);
nutritionButtonEl.addEventListener("click", getNutritionFacts);
filterBtnEl.addEventListener("click", showDropdown);
