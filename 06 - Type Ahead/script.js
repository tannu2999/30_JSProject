//function to tally the city name with the input search
function matchCity(wordToCheck, arr) {
        // here we need to figure out if the city or state matches what was searched
    return arr.filter(place=>{
        var regex = new RegExp(wordToCheck, "gi");
        return place.city.match(regex) || place.state.match(regex);
    });
 
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayCity() {
    //this means input element
    //get all the elements in array that match with the inputted text in search area
    var checkIfFound = matchCity(this.value, arr);
    //now for each array elemnt, we have to reflect them on the screen
    var html = checkIfFound.map(locations => {
      var regex = new RegExp(this.value, "gi");
      //directly location.city/state can not be used beacuase we need to highlight the part common to the input text area
      const cityName = locations.city.replace(regex, `<span class="hl">${this.value}</span>`);
      const stateName = locations.state.replace(regex, `<span class="hl">${this.value}</span>`);
      //make the html code
      return `
        <li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${numberWithCommas(locations.population)}</span>
        </li>
      `;

    }).join('');
    suggestions.innerHTML = html;
}

const endpoint =
        "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

      // store the information in an array after fetching the information from the site using fetch API
      var arr = [];
      fetch(endpoint)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          arr.push(...data);
        });
console.log(arr);

//add EventListener to the suggestions
var suggestions = document.querySelector(".suggestions"); 
        
//Addeventlistener when keyup or change in input area takes place
var search = document.querySelector(".search");
search.addEventListener("change", displayCity); 
search.addEventListener("keyup", displayCity); 