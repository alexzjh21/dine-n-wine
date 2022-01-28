var randomEl = document.querySelector();
var generate = document.addEventListener(click, randomMeal);
var randomMeal = function() {

}

// fetch random meal api
fetch("www.themealdb.com/api/json/v1/1/random.php")
    .then(function(response) {
        if(response.ok) {
            console.log(response);
            response.json()
                .then(function(data) {
                    console.log(data);
                });
        }
    });