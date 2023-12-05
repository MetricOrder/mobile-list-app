
import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push, onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings = {
    databaseURL: "https://lister-fd263-default-rtdb.asia-southeast1.firebasedatabase.app/"
} 

const app = initializeApp(appSettings)
const database = getDatabase(app)
const itemsInDB = ref(database, "itemsList")
const addBtnEl = document.querySelector("#add-button")
const inputFieldEl = document.querySelector("#input-field")
const listItemsEl = document.querySelector("#list-items")

addBtnEl.addEventListener("click", function(){
    let inputValue = inputFieldEl.value
    push(itemsInDB, inputValue)
    clearUserInput()    
})

onValue(itemsInDB, function(snapshot){

    let itemsArray = Object.entries(snapshot.val())

    clearListItemsEl()

    for (let i = 0; i < itemsArray.length; i++) {
        let currentItem = itemsArray[i]

        let currentItemID = currentItem[0]
        let currentItemValue = currentItem[1]

        addUserInputToList(currentItemValue)
    }
})

function clearListItemsEl(){
    listItemsEl.innerHTML = ""
}

function addUserInputToList(userInput){
    listItemsEl.innerHTML += `<li>${userInput}</li>` 
}

function clearUserInput(){
    inputFieldEl.value = ""
}

