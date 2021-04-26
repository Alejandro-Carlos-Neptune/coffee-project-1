"use strict"

function renderCoffee(coffee) {
    var html = '<tr class="coffee2">';
    html += '<td>' + coffee.id + '</td>';
    html += '<td>' + coffee.name + '</td>';
    html += '<td>' + coffee.roast + '</td>';
    html += '</tr>';

    return html;
}

//This the function that goes through the coffees names.
function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    if (DarkSelection === DarkRoast) {
        console.log('you choose dark');
    }
}

// tbody.innerHTML = renderCoffees(filteredCoffees);

// }function updateCoffeesSearch(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     var selectedRoast = roastSearch.value;
//     var filteredCoffees = [];
//     coffees.forEach(function(coffee) {
//         if (coffee.roast.toLowerCase() === selectedRoast.toLowerCase()) {
//             filteredCoffees.push(coffee);
//         }
//         if (coffee.name.toLowerCase() === selectedRoast.toLowerCase()) {
//             filteredCoffees.push(coffee);
//         }
//     });
//     tbody.innerHTML = renderCoffees(filteredCoffees);
// }

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

//This was used to reverse the object above.
// var coffees2 = coffees.reverse();
// console.log(coffees2);

// var tbody = document.querySelector('#coffees2');
var submitButton = document.querySelector('#submit');
var submitButton2 = document.querySelector('#search-button');
var roastSelection = document.querySelector('#roast-selection');
// var roastSearch = document.querySelector('#SearchCoffee');

// tbody.innerHTML = renderCoffees(coffees2);

submitButton.addEventListener('click', updateCoffees);
// submitButton2.addEventListener('click', updateCoffeesSearch);


// var coffeeInput = document.querySelector('#SearchCoffee');


// const filterTest = coffees2.filter(coffee => coffee.name === 'city');
// console.log(filterTest);
// console.log(coffees.name);
// console.log(coffees[5].name);


// const searchBar = document.forms['Coffee-Search'].querySelector('input');
// searchBar.addEventListener('keyup',function(e){
//     const term = e.target.value.toLowerCase();
//     const CoffeeNames = coffees2[0].name
// })

// for(let i = 0; i < coffees2[7].name.length; i++){
//     console.log(coffees2[i].name);
// }

var DarkRoast = document.getElementById('dark');
var MediumRoast = document.getElementById('medium');
var LightRoast = document.getElementById('light');
var DarkSelection = document.getElementById('DarkSelection')