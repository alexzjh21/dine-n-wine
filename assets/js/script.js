//var randomButton = document.querySelector("#randomBtn").addEventListener('click', randomMeal);
var listEl = document.createElement("ol");

var randomMeal = function() {
    // fetch random meal api
    fetch("http://www.themealdb.com/api/json/v1/1/random.php")
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
var randomButton = document.querySelector("#randomBtn").addEventListener('click', randomMeal);
// look up by first letter

//var firstEl = document.querySelector("#firstBtn").addEventListener('click', charList);