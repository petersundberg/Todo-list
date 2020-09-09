//ToDo List



// Skapa med vanilla JS och lite DOM-manipulation en applikation som har följande funktionalitet:
// Visa alla poster på listan
// Ta bort / markera en post som avklarad
// Lägg till en post via ett formulär

// En post i en todo-list har oftast egenskaperna task och huruvida den är avklarad eller inte.
// Fråga gärna på slack-kanalen #javascript. Har jag tid så svarar jag, och har jag inte tid så svarar jag kanske senare.

//-----------------------------------------------------------------------------------------------------------------------
// let resultDiv = document.getElementByClassName("result");
// resultDiv.innerText = "hej";

// let res = document.getElementsByClassName("result");
// res.innerHTML = "Hello World!";


// let todoItem1 = {
//     name: "mjölk",
//     task: 3,
//     isDone: true
// }

// let todoItem2 = {
//     name: "hunden",
//     task: "gå ut med hunden",
//     isDone: true
// }

// let todoItem3 = {
//     name: "bilen",
//     task: "tvätta bilen",
//     isDone: true
// }

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

let myItemName = formNameValue.value;
btnRemoveFromList.addEventListener('click', removeFromList(myItemName));

// myForm.reset();


//--------------------------------------------------------------------


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


todoList.push(mjölk, hunden, bilen);



function showAllList(){
    // todoList.forEach(item => console.log(item));

    todoList.forEach(function(list){
        console.log(list);   
        myForm.reset();
    });
}


function addItemToList(){
        let newObject = {
            name: formNameValue.value,
            task: formTaskValue.value,
            isDone: formIsDoneValue.value
        }        
            todoList.push(newObject);    
            myForm.reset();
    ;
    console.log(todoList);
}


function removeFromList(myItemName) {

    // var indexOfName = todoList.indexOf(myItemName);
    // console.log(indexOfName);


    todoList.forEach(function(list){
        if(list.name == myItemName){

            let ind = todoList.indexOf(list);
            console.log("Index: " + ind);


            console.log (list.name + " hittades");
            todoList.splice([ind], 1);
            myForm.reset();
        }     
         
    })
    
}










// function removeFromList(itemName) {

//     // var indexOfName = todoList.indexOf("mjölk");
//     // console.log(indexOfName);

//     todoList.forEach(function(list){
//         if(list.name == itemName){

//             let ind = todoList.indexOf(list);
//             console.log("Index: " + ind);

//             console.log (list.name + " hittades");
//             todoList.splice([ind], 1);
//             myForm.reset();
//         }     
//         // console.log(todoList);
//     })
    
// }



// function removeFromList() {

//     // var indexOfName = todoList.indexOf("mjölk");
//     // console.log(indexOfName);

//     todoList.forEach(function(list){
//         if(list.name == "mjölk"){

//             let ind = todoList.indexOf(list);
//             console.log("Index: " + ind);

//             console.log (list.name + " hittades");
//             todoList.splice([ind], 1);
//         }     
        
//     })
//     console.log(todoList);    
// }




    // // Hitta index - hittade en lösning på stackoverflow.
    
    // // let index = todoList.indexOf(itemName);
    // // console.log(index)
    
    // // // let index = todoList.map(e => e.name).indexOf(name);
    // // console.log(index)

    // // En annan metod där vi istället för indexvärdet får hela produkten.
    // let idx = todoList.findIndex(function (product) {
    //     return name.name == name
    // });
    // // Splice:a ut produkten utifrån dess index-värde.
    // todoList.splice(idx, 1);





// function removeFromList(itemName) {
//     // Hitta index - hittade en lösning på stackoverflow.
    
//     // let index = todoList.indexOf(itemName);
//     // console.log(index)
    
//     // // let index = todoList.map(e => e.name).indexOf(name);
//     // console.log(index)

//     // En annan metod där vi istället för indexvärdet får hela produkten.
//     let idx = todoList.findIndex(function (product) {
//         return name.name == name
//     });
//     // Splice:a ut produkten utifrån dess index-värde.
//     todoList.splice(idx, 1);
// }



// function removeFromList(itemName) {
//     // Hitta index - hittade en lösning på stackoverflow.
    
//     let index = todoList.indexOf(itemName);
//     console.log(index)
    
//     // let index = todoList.map(e => e.name).indexOf(name);
//     // console.log(index)

//     // En annan metod där vi istället för indexvärdet får hela produkten.
    
//     // let idx = todoList.findIndex(function (product) {
//     //     return name.name == name
//     // });
//     // // Splice:a ut produkten utifrån dess index-värde.
//     // todoList.splice(idx, 1);
// }



// function removeFromList() {
//     // Hitta index - hittade en lösning på stackoverflow.
    
    
    
//     let index = todoList.map(e => e.name).indexOf(name);
//     console.log(index);


//     // for (let i = todoList.length - 1; i >= 0; --i) {
//     //     if (todoList[i].field == "mjölk") {
//     //         todoList.splice(i,1);
//     //     }
//     // }



//     // En annan metod där vi istället för indexvärdet får hela produkten.
 
//     // let idx = todoList.findIndex(function (product) {
//     //     return name.name == name
//     // });
//     // // Splice:a ut produkten utifrån dess index-värde.
//     // todoList.splice(idx, 1);
// }



// function removeFromList(name) {
//     // Hitta index - hittade en lösning på stackoverflow.
//     let index = todoList.map(e => e.name).indexOf(name);
//     console.log(index)

//     // En annan metod där vi istället för indexvärdet får hela produkten.
//     let idx = todoList.findIndex(function (product) {
//         return name.name == name
//     });
//     // Splice:a ut produkten utifrån dess index-värde.
//     todoList.splice(idx, 1);
// }




// function addItemToList(){
//     todoList.every(function(list){
//         let newObject = {
//             name: formNameValue.value,
//             task: formTaskValue.value,
//             isDone: formIsDoneValue.value

//         }
        
        
//             todoList.push(newObject);    

//             myForm.reset();


//     });
//     console.log(todoList);
// }




// function addItemToList(){
//     todoList.every(function(list){
//         // let newObject = {
//         //     name: formNameValue,
//         //     task: formTaskValue,
//         //     isDone: formIsDoneValue


//             let newObject = {
//                 name: "båten",
//                 task: "kör båten",
//                 isDone: false
            
        
//         }
        
        
//             todoList.push(newObject);    

//         // myForm.reset();


//     });
//     console.log(todoList);
// }












// function addItemToList(){

//     todoList.map(function(list){


//         let newObject = {
//             name: "båten",
//             task: "kör båten",
//             isDone: false
//         }
//         todoList.push(newObject);    

//     });
//     console.log(todoList);
// }













        // let newObject = {};
        // newObject = list;
        // newObject.name = "hej";
        // newObject.task = "hej";
        // newObject.isDone = false;





 // todoList.push("hej", "gör det", "true");


// function addItemToList(){

//     // todoList.push();

//     todoList.map(function(list){
//         todoList.push("hej", "gör det", "true");
//     });
//     console.log(todoList);

// }




// function addItemToList(){

//     todoList.push();

//     todoList.map(function(list){
//         let newObject = {};
//         newObject.name = "hej";
//         newObject.task = "hejhej";
//         newObject.isDone = "false";
//         return newObject;
//     });
//     console.log(newObject);


//     todoList.forEach(function(list){
//         console.log(list);    
//     });

// }




















// let buyList = {
//     product: "mjölk",
//     amount: 3,
//     maxPrice: 10
// }
// let buyList1 = {product: "bread", amount: 2, maxPrice: 35};
// let buyList2 = {product: "chocolate", amount: 10, maxPrice: 100};
// let buyList3 = {product: "sallad", amount: 4, maxPrice: 12};
// let buyList4 = {product: "sallad", amount: 2, maxPrice: 20};
// let buyList5 = {product: "chocolate", amount: 3, maxPrice: 20};
// let buyList6 = {product: "bread", amount: 1, maxPrice: 25};
// let buyList7 = {product: "sallad", amount: 1, maxPrice: 50};

// let allBuylists = [buyList, buyList1, buyList2, buyList3, buyList4, buyList5, buyList6, buyList7];


// console.log(allBuylists);


// // .every - Returnerar true om alla element i arrayen uppfyller villkoret
// if (allBuylists.every(function(list){
//     return list.amount > 8;
//     })){
//         console.log("Allas amount större än 8.");
//     }
//     else {
//         console.log ("Allas amount inte större än 8.");    
//     }

// console.log('---------------------------------------------');


// //skriv ut product
// allBuylists.forEach(function(list){
//         console.log (list.product);    
//     });


// //skriv ut product "bread"
// allBuylists.forEach(function(list){
//     if(list.product == "bread"){
//         console.log (list.product);
//     }     
// });

// //skriv ut maxPrice för sallad
// allBuylists.forEach(function(list){
//     if(list.product == "sallad"){
//         console.log (list.product + " " + list.maxPrice);
//     }     
// });


// //lägg till egenskapen "price" i objekten
// allBuylists.map(function(list){
//     let newObject = {};
//     newObject = list;
//     newObject.price = 0;
//     return newObject;
// });
// console.log(allBuylists);


// console.log('---------------------------------------------');


// //ta bort egenskapen "maxPrice" från objekten
// allBuylists.map(function(list){
//     delete list.maxPrice;
// });
// console.log(allBuylists);









//     console.log('---------------------------------------------');














