//ToDo List

let todoList = [];
let res = document.getElementsByClassName("result");
res.innerHTML = "Hello World!";

let btnShowList = document.getElementById("btnShowList");
btnShowList.addEventListener('click', showAllList);

let btnAddToList = document.getElementById("btnAddToList");
btnAddToList.addEventListener('click', addItemToList);


let myForm = document.getElementById("myForm"); 
let formNameValue = document.getElementById("formName");
let formTaskValue = document.getElementById("formTask");
let formIsDoneValue = document.getElementById("formIsdone");

let btnRemoveFromList = document.getElementById("btnRemoveFromList");

btnRemoveFromList.addEventListener('click', function() {
    removeFromList(formNameValue);  //attaching input-element from myForm
});

let mjölk = {
    name: "mjölk",
    task: "köp mjölk",
    isDone: true
}

let hunden = {
    name: "hunden",
    task: "gå ut med hunden",
    isDone: true
}

let bilen = {
    name: "bilen",
    task: "tvätta bilen",
    isDone: true
}

let vila = {
    name: "vila",
    task: "vila nu",
    isDone: false
}

todoList.push(mjölk, hunden, bilen, vila);


function showAllList(){
    // todoList.forEach(item => console.log(item));

    todoList.forEach(function(list){
        console.log(list);   
        myForm.reset();
    });
}

function addItemToList(){
        let newObject = {
            name: formNameValue.value,  //values from myForm
            task: formTaskValue.value,
            isDone: formIsDoneValue.value
        }        
            todoList.push(newObject);    
            myForm.reset();
            console.log(todoList);
    
}

function removeFromList(myItemName) {
    todoList.forEach(function(list){
        if(list.name == myItemName.value){

            let ind = todoList.indexOf(list);
            todoList.splice(ind, 1);
            console.log(todoList);
            myForm.reset();
        }              
    });

}










