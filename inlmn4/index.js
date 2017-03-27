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
var limitBtn = document.getElementById("limitItemsBtn");

//==================================================================
//MAIN

//==================================================================
//CALLBACKS
limitBtn.addEventListener("click", ()=>{
    let items = amount.value;
    limitItems(items)
});

sortName.addEventListener("click", ()=>{
    sortPeople("name");
});
sortAge.addEventListener("click", ()=>{
    sortPeople("age");
});
sortColor.addEventListener("click", ()=>{
    
    sortPeople("favColor");
});

addBtn.addEventListener("click", ()=>{
    let name = nameInp.value.toLowerCase();
    let age = ageInp.value.toLowerCase();
    let color = colorInp.value.toLowerCase();
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
function limitItems(items){
    firebase.database().ref("people/").limitToFirst(items).once("value", (snapshot)=>{
        snapshot.forEach((child)=>{
            let data = child.val();
            addToList(data.name, data.age, data.favColor);
        });
    });
}


function sortPeople(sortBy){
    peopleList.textContent = "";
    firebase.database().ref("people/").orderByChild(sortBy).once("value", (snapshot)=>{
        snapshot.forEach((child)=>{
            let data = child.val();
            addToList(data.name, data.age, data.favColor);
        });
    });
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