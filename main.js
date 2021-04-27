"use strict"

// function renderCoffee(coffee) {
//     var html = '<tr class="coffee2">';
//     html += '<td>' + coffee.id + '</td>';
//     html += '<td>' + coffee.name + '</td>';
//     html += '<td>' + coffee.roast + '</td>';
//     html += '</tr>';
//
//     return html;
// }
//
// //This the function that goes through the coffees names.
// function renderCoffees(coffees) {
//     var html = '';
//     for (var i = coffees.length - 1; i >= 0; i--) {
//         html += renderCoffee(coffees[i]);
//     }
//     return html;
// }
//
// function updateCoffees(e) {
//     e.preventDefault(); // don't submit the form, we just want to update the data
//     if (DarkSelection === DarkRoast) {
//         console.log('you choose dark');
//     }
// }
//
// // tbody.innerHTML = renderCoffees(filteredCoffees);
//
// // }function updateCoffeesSearch(e) {
// //     e.preventDefault(); // don't submit the form, we just want to update the data
// //     var selectedRoast = roastSearch.value;
// //     var filteredCoffees = [];
// //     coffees.forEach(function(coffee) {
// //         if (coffee.roast.toLowerCase() === selectedRoast.toLowerCase()) {
// //             filteredCoffees.push(coffee);
// //         }
// //         if (coffee.name.toLowerCase() === selectedRoast.toLowerCase()) {
// //             filteredCoffees.push(coffee);
// //         }
// //     });
// //     tbody.innerHTML = renderCoffees(filteredCoffees);
// // }
//
// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
// var coffees = [
//     {id: 1, name: 'Light City', roast: 'light'},
//     {id: 2, name: 'Half City', roast: 'light'},
//     {id: 3, name: 'Cinnamon', roast: 'light'},
//     {id: 4, name: 'City', roast: 'medium'},
//     {id: 5, name: 'American', roast: 'medium'},
//     {id: 6, name: 'Breakfast', roast: 'medium'},
//     {id: 7, name: 'High', roast: 'dark'},
//     {id: 8, name: 'Continental', roast: 'dark'},
//     {id: 9, name: 'New Orleans', roast: 'dark'},
//     {id: 10, name: 'European', roast: 'dark'},
//     {id: 11, name: 'Espresso', roast: 'dark'},
//     {id: 12, name: 'Viennese', roast: 'dark'},
//     {id: 13, name: 'Italian', roast: 'dark'},
//     {id: 14, name: 'French', roast: 'dark'},
// ];
//
// //This was used to reverse the object above.
// // var coffees2 = coffees.reverse();
// // console.log(coffees2);
//
// // var tbody = document.querySelector('#coffees2');
// var submitButton = document.querySelector('#submit');
// var submitButton2 = document.querySelector('#search-button');
// var roastSelection = document.querySelector('#roast-selection');
// // var roastSearch = document.querySelector('#SearchCoffee');
//
// // tbody.innerHTML = renderCoffees(coffees2);
//
// submitButton.addEventListener('click', updateCoffees);
// // submitButton2.addEventListener('click', updateCoffeesSearch);
//
//
// // var coffeeInput = document.querySelector('#SearchCoffee');
//
//
// // const filterTest = coffees2.filter(coffee => coffee.name === 'city');
// // console.log(filterTest);
// // console.log(coffees.name);
// // console.log(coffees[5].name);
//
//
// // const searchBar = document.forms['Coffee-Search'].querySelector('input');
// // searchBar.addEventListener('keyup',function(e){
// //     const term = e.target.value.toLowerCase();
// //     const CoffeeNames = coffees2[0].name
// // })
//
// // for(let i = 0; i < coffees2[7].name.length; i++){
// //     console.log(coffees2[i].name);
// // }
//
// var DarkRoast = document.getElementById('dark');
// var MediumRoast = document.getElementById('medium');
// var LightRoast = document.getElementById('light');
// var DarkSelection = document.getElementById('DarkSelection')

function myFunction() {
    var input, filter, ul, li, span, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toLowerCase();
    ul = document.getElementById("Coffees");//gets the ul id
    li = ul.getElementsByTagName("li");//use the ul element to get the tag name within it li



    for (i = 0; i < li.length; i++) {
        span = li[i];
        txtValue = span.textContent || span.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function myFunction2() {
    var input, filter, ul, li, span, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toLowerCase();
    ul = document.getElementById("Roast");//gets the ul id
    li = ul.getElementsByTagName("li");



    for (i = 0; i < li.length; i++) {
        span = li[i];
        txtValue = span.textContent || span.innerText;
        if (txtValue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}



function allFunctions(){
    myFunction();
    myFunction2();
}


// var input2 = document.getElementById('myInput2');
// console.log(input2);
// //
// function testInput2(e){
//     alert(Input2);
// }
// var Input2 = document.getElementById('myInput2').addEventListener('keydown', testInput2);
//
//
// var listener = function (event) {
//     alert('You clicked the button!');
// }
//
// // register the listener to handle clicks on btn1
// document.getElementById('btn1').addEventListener('click', listener);
//
//
function changeInput() {

    var para = document.createElement("div");
    // var node = document.createTextNode(node);

    var str = document.getElementById('myInput2');
    // var newString = str.toString();
    var filter = str.value.toUpperCase();
    para.innerHTML = filter;
    var element = document.getElementById("Coffees");
    element.appendChild(para);
    // var para2 = document.createElement('a');
    // para2.innerHTML = str;
}
function changeInput2() {

    var para = document.createElement("li");

    // var node = document.createTextNode(node);
    var str = document.getElementById('myInput3').value;
    // var newString = str.toString();
    para.innerText = str;
    var element = document.getElementById("Coffees");
    element.appendChild(para);
    // var para2 = document.createElement('a');
    // para2.innerHTML = str;
}

function allInputs(){
    changeInput2();
    changeInput();
}


//
// function changeInput(){
//     var para = document.createElement("span"), document.createElement();
//     var span = para.innerHTML = str;
//     var li = span.getElementsByTagName('li');
//
//     var str = document.getElementById('myInput2').value;
//
//     // li.innerHTML = str;
//     var element = document.getElementById("Coffees");
//     element.appendChild(li);
//
// }





