

var randomRecipeBtnEl = document.querySelector("#random-btn");

// Recipe Forms
var hero = document.querySelector("#main")
var recipeTitleEl = document.querySelector("#recipe-title");
var mealImgEl = ""
var ingredientsEl = document.querySelector("#ingredients");
var instructionsEl = document.querySelector("#instructions");
var recipeColumn = ""
var ingredientColumn = ""
var instructionsColumn = ""

// Dynamic Generated HTML with Random Recipe


var nutritionFactsEl = document.querySelector("#nutrition-facts"); //WHAT'S THIS

// Information Input Selectors
var formIngredientEl = document.querySelector("#stacked-ingredient");
var formMeasureEl = document.querySelector("#stacked-measure");
var formUnitEl = document.querySelector("#stacked-unit");

var nutritionButtonEl = document.querySelector("#nutrition-btn");

//Nutrition Facts Table
var calorieEl = document.querySelector("#calories-display");
var fatEl = document.querySelector("#fat-display");
var carbEl = document.querySelector("#carb-display");
var sugarEl = document.querySelector("#sugar-display");
var proteinEl = document.querySelector("#protein-display");
var filterBtnEl = document.querySelector("#filter-btn");
var dropdownEl = document.querySelector("#dropdown");
var catHolder = document.querySelector('#category-holder');
var categoryNames = document.querySelectorAll(".categories");
var saveBtnEl = document.querySelector("#save-btn");
var favoriteRecipes = [];
var measureWarningEl = document.querySelector("#neg-measure-warning");


var recipeCards = function(){
    
}


var getRandomRecipe = function() {
    var apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php"

    fetch(apiUrl).then(function(response){
        response.json().then(function(data){
            console.log(data);

    

            const meal = data.meals[0];

            // Recipe name and picture dynamically generated
            recipeColumn = document.createElement("div")
            recipeColumn.className = "recipe-holder"
            recipeTitleEl.innerHTML = "<h4>" + meal.strMeal + "</h4>";

            var imgSrc = meal['strMealThumb'];
            mealImgEl = document.querySelector("#meal-img");

            mealImgEl.setAttribute('src', imgSrc+"/preview")

            recipeColumn.appendChild(recipeTitleEl);
            recipeColumn.appendChild(mealImgEl);
            hero.appendChild(recipeColumn);
            
            // var recipeTitle = document.createElement("h2")
            

            // var recipeImg = document.createElement("div")
            // recipeImg.

            // Ingredients dynamically generated
            ingredientColumn = document.createElement("div")
            ingredientColumn.className = "recipe-holder"
            ingredientsEl.innerHTML = "Ingredients: <br>";

            ingredientColumn.appendChild(ingredientsEl)
            hero.appendChild(ingredientColumn);

            // Instructions dynamically generated 
            instructionsColumn = document.createElement ("div")
            instructionsColumn.className = "recipe-holder"
            instructionsEl.innerHTML = "Instructions: <br> " + meal.strInstructions;

            instructionsColumn.appendChild(instructionsEl)
            hero.appendChild(instructionsColumn);

            
            
            // ingredientsEl.innerHTML = "Ingredients: <br>" + data.meals[0].strIngredient1 + ": " + data.meals[0].strMeasure1 + "<br>" +  data.meals[0].strIngredient2 + ": " + data.meals[0].strMeasure2 + "<br>" +  data.meals[0].strIngredient3 + ": " + data.meals[0].strMeasure3 + "<br>" + data.meals[0].strIngredient4 + ": " + data.meals[0].strMeasure4 + "<br>" +  data.meals[0].strIngredient5 + ": " + data.meals[0].strMeasure5 + "<br>" +  data.meals[0].strIngredient6 + ": " + data.meals[0].strMeasure6 + "<br>" +  data.meals[0].strIngredient7 + ": " + data.meals[0].strMeasure7 + "<br>" +  data.meals[0].strIngredient8 + ": " + data.meals[0].strMeasure8 + "<br>" +  data.meals[0].strIngredient9 + ": " + data.meals[0].strMeasure9 + "<br>" +  data.meals[0].strIngredient10 + ": " + data.meals[0].strMeasure10 + "<br>" +  data.meals[0].strIngredient11 + ": " + data.meals[0].strMeasure11 + "<br>" +  data.meals[0].strIngredient12 + ": " + data.meals[0].strMeasure12 + "<br>" +  data.meals[0].strIngredient13 + ": " + data.meals[0].strMeasure13 + "<br>" +  data.meals[0].strIngredient14 + ": " + data.meals[0].strMeasure14 + "<br>" +  data.meals[0].strIngredient15 + ": " + data.meals[0].strMeasure15 + "<br>" +  data.meals[0].strIngredient16 + ": " + data.meals[0].strMeasure16 + "<br>" +  data.meals[0].strIngredient17 + ": " + data.meals[0].strMeasure17 + "<br>" +  data.meals[0].strIngredient18 + ": " + data.meals[0].strMeasure18 + "<br>" +  data.meals[0].strIngredient19 + ": " + data.meals[0].strMeasure19 + "<br>" +  data.meals[0].strIngredient20 + ": " + data.meals[0].strMeasure20;
            for(let i = 1; i < 21; i++){
                if(meal['strIngredient' + i] !== "") {
                    ingredientsEl.innerHTML += meal['strIngredient' + i] + ": " + meal['strMeasure' + i] + "<br>";
                    console.log([i])
                } else {}
                // if(i = 1){
                //     instructionsColumn.remove();
                //     ingredientColumn.remove();
                // }

                    
    

                //console.log(meal['strIngredient' + i] + ', ' + meal['strMeasure' + i])
            }
          


        });
    });

};

// show dropdown menu when click the filter by category button
function showDropdown() {
    dropdownEl.classList.remove("hide");
}

// filter the recipes based on the 14 categories
function filterByCat(event) {
    
    var category = this.innerText
    var filterApi = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + category
    //console.log(filterApi)
    var recipeHolder = document.getElementById(category)
        
    fetch(filterApi)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data)
        
        for(let i = 0; i < data.meals.length; i++) {  
            const listEl = document.createElement('li')
            listEl.setAttribute("class", "pure-menu-item")
            const recipeAEl = document.createElement('a')
            recipeAEl.setAttribute("class", "pure-menu-link")

            var recipeName = data.meals[i].strMeal
            recipeAEl.textContent = recipeName
           
            listEl.appendChild(recipeAEl)
            recipeHolder.append(listEl)
        }

    })


    // seperate function call 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + mealId

};

var randomBtnHandler = function (event) {
    recipeTitleEl.innerHTML = "";
    ingredientsEl.innerHTML = "";
    instructionsEl.innerHTML = "";

    if (recipeColumn && instructionsColumn && ingredientColumn){
        recipeColumn.remove();
        instructionsColumn.remove();
        ingredientColumn.remove();
    }

 
    

    getRandomRecipe();
}
//load recipe will display

// save recipe funtion sets array to local storage

// var favRecipe = function (event) {
//     // get recipe name, ingredients and instructions
//     var recipeObj = {
//         mealName: 
//     }
//     // push into favoriteRecipe array

//     // call save recipe
// }

var getNutritionFacts = function(event) {
    event.preventDefault();
    // define var's for the form inputs using formEl.value.trim()
    var unit = formUnitEl.value;
    var measure = formMeasureEl.value;
    var ingredient = formIngredientEl.value.trim();

   // console.log(measure, unit, ingredient);

    // set apiUrl
    var apiUrl = "https://api.edamam.com/api/nutrition-data?app_id=473c3718&app_key=e09fdcbb8cd2aea6a1be56f7812d7c2f&nutrition-type=cooking&ingr=" + measure + "%20" + unit + "%20" + ingredient
    if (measure < 0) {
        measureWarningEl.innerHTML = ("Please enter a value greater than 0. Decimals are accepted");
        return
    } else {
        measureWarningEl.innerHTML = ""

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
}


//saveBtnEl.addEventListener("click", favRecipe);
randomRecipeBtnEl.addEventListener("click", randomBtnHandler);
<<<<<<< HEAD
nutritionButtonEl.addEventListener("click", getNutritionFacts )

// Beef Stroganoff has null's

// 
=======
nutritionButtonEl.addEventListener("click", getNutritionFacts);
filterBtnEl.addEventListener("click", showDropdown);
for(let i = 0; i < categoryNames.length; i++) {
    categoryNames[i].addEventListener("click", filterByCat);
}

>>>>>>> 734541463185a69b35e6d920f78912555752ff0c
