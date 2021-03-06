/*jshint esnext: true, moz: true, browser: true*/
/*jslint browser:true */
//==================================================================
//GLOBALS
var peopleList = document.getElementById("peopleList");
var nameInp = document.getElementById("nameInput");
var ageInp = document.getElementById("ageInput");
var colorInp = document.getElementById("colorInput")
var addBtn = document.getElementById("addBtn");
var sortName = document.getElementById("sortName");
var sortAge = document.getElementById("sortAge");
var sortColor = document.getElementById("sortColor");
var amount = document.getElementById("itemsAmount");
var arrowLeft = document.getElementById("leftArrow");
var arrowRight = document.getElementById("rightArrow");
var pageIndex = document.getElementById("pageIndex");
var minIndex = 1, maxIndex = 10;
var sortByCat = "";
//==================================================================
//MAIN
//==================================================================
//CALLBACKS
arrowRight.addEventListener("click", () => {
    let items = amount.value;
    if (items > 10) {
        nextPage();
        updateIndex();
        showNextItems(sortByCat, items);
    }
});
arrowLeft.addEventListener("click", () => {
    let items = amount.value;
    prevPage();
    updateIndex();
    showNextItems(sortByCat, items);
});
sortName.addEventListener("click", () => {
    let items = amount.value;
    showNextItems("name", items);
});
sortAge.addEventListener("click", () => {
    let items = amount.value;
    showNextItems("age", items);
});
sortColor.addEventListener("click", () => {
    let items = amount.value;
    showNextItems("favColor", items);
});
addBtn.addEventListener("click", () => {
    let name = nameInp.value.toLowerCase();
    let age = ageInp.value.toLowerCase();
    let color = colorInp.value.toLowerCase();
    addObjToDB(name, age, color);
    name = "";
    age = "";
    color = "";
});
//==================================================================
//FIREBASE
firebase.database().ref("people/").orderByChild("name").limitToFirst(10).on("value", (snapshot) => {
    peopleList.textContent = "";
    let data = snapshot.val();
    for (let person in data) {
        addToList(data[person].name, data[person].age, data[person].favColor);
    }
});
//==================================================================
//FUNCTIONS
function showNextItems(sortBy, items) {
    let sortedList = []; 
    sortByCat = sortBy;
   peopleList.textContent = ""; 
    
    if(sortBy === ""){
        sortBy = "name";
    }
    
    firebase.database().ref("people/").orderByChild(sortBy).limitToFirst(parseInt(items)).once("value", (snapshot) => {
        snapshot.forEach((child) => {
            let data = child.val();
            sortedList.push(data);
        });
         printNextItems(sortedList);
    });
    
   
}

function printNextItems(sortedList){
    for(let i = 0; i < sortedList.length; i++){
        if(i >= minIndex-1 && i <= maxIndex-1){
            addToList(sortedList[i].name,sortedList[i].age,sortedList[i].favColor);   
        }
        
    }
}
/*
//sort and limit results
function sortPeople(sortBy) {
    peopleList.textContent = "";
    sortByCat = sortBy;
    firebase.database().ref("people/").orderByChild(sortBy).limitToFirst(10).once("value", (snapshot) => {
        snapshot.forEach((child) => {
            let data = child.val();
                addToList(data.name, data.age, data.favColor);
            
            
        });
    });
}
*/
//add to list
function addToList(name, age, color) {
    peopleList.appendChild(newElement("li"));
    peopleList.lastChild.textContent = `Name: ${name}, Age: ${age}, Favourit Color: ${color}`;
}
//add to database
function addObjToDB(_name, _age, _favColor) {
    let obj = {
        name: _name, 
        age: _age, 
        favColor: _favColor
    };
    firebase.database().ref("people/").push(obj);
}
//new element
function newElement(elm) {
    return document.createElement(elm);
}
//show nr of items
function updateIndex() {
    pageIndex.textContent = `${minIndex}-${maxIndex}`;
}

function nextPage() {
    minIndex += 10;
    maxIndex += 10;
}

function prevPage() {
    if (minIndex > 1) {
        minIndex -= 10;
        maxIndex -= 10;
    }
}