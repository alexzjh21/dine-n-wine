var randomEl = document.querySelector("#randomBtn");
var generate = randomEl.addEventListener(click, randomMeal);
var listEl = document.createElement("ol");

var randomMeal = function() {
    // fetch random meal api
    fetch("www.themealdb.com/api/json/v1/1/random.php")
        .then(function(response) {
            if(response.ok) {
                console.log("response", response);
                response.json()
                    .then(function(data) {
                    console.log("data", data);
            });
        }
    });
    // select data to show on page
    for (i = 9; i < 20; i++) {
    
        if (data[i] !== "") {
            var ingredientEl = document.createElement("li");
            ingredientEl.textContent = data[i] + ' : ' + data[i + 10];
            listEl.appendChild(ingredientEl);

        }
        
        else {
            break;
    
         } 
    }
}