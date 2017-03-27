/*jshint esnext: true, moz: true*/
/*jslint browser:true */

//==================================================================
//GLOBALS
var peopleList = document.getElementById("peopleList");
var nameInp = document.getElementById("nameInput");
var ageInp = document.getElementById("ageInput");
var colorInp = document.getElementById("colorInput");
var addBtn = document.getElementById("addBtn");
var sortName = document.getElementById("sortName");
var sortAge = document.getElementById("sortAge");
var sortColor = document.getElementById("sortColor");
var amount = document.getElementById("itemsAmount");

//==================================================================
//MAIN

//==================================================================
//CALLBACKS
sortName.addEventListener("click", ()=>{
    let items = amount.value;
    sortPeople("name",items);
});
sortAge.addEventListener("click", ()=>{
    let items = amount.value;
    sortPeople("age",items);
});
sortColor.addEventListener("click", ()=>{
    let items = amount.value;
    sortPeople("favColor",items);
});

addBtn.addEventListener("click", ()=>{
    let name = nameInp.value;
    let age = ageInp.value;
    let color = colorInp.value;
    addObjToDB(name,age,color);
});

//==================================================================
//FIREBASE

firebase.database().ref("people/").on("value", (snapshot)=>{
    peopleList.textContent = "";
    let data = snapshot.val();
    for(let person in data){
        addToList(data[person].name,data[person].age,data[person].favColor);    
    }
});

//==================================================================
//FUNCTIONS
function sortPeople(sortBy,items){
    firebase.database().ref("people/").orderByChild(sortBy).limitToFirst(items);
}

function addToList(name,age,color){
    peopleList.appendChild(newElement("li"));
    peopleList.lastChild.textContent = `Name: ${name}, Age: ${age}, Favourit Color: ${color}`;
}

function addObjToDB(_name,_age,_favColor){
    let obj = {
        name: _name,
        age: _age,
        favColor: _favColor
    };
    firebase.database().ref("people/").push(obj);
}

function newElement(elm){
    return document.createElement(elm);
}