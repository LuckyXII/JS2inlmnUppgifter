/*jshint esnext: true, moz: true*/
/*jslint browser:true */

//==================================================================
//GLOBALS
var peopleList = document.getElementById("peopleList");
var nameInp = document.getElementById("nameInput");
var ageInp = document.getElementById("ageInput");
var colorInp = document.getElementById("colorInput");
var addBtn = document.getElementById("addBtn");

//==================================================================
//MAIN

//==================================================================
//CALLBACKS
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
    let allData = snapshot.val();
    allData.forEach((data)=>{
        addToList(data.name,data.age,data.favColor);    
    });
    
});

//==================================================================
//FUNCTIONS
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