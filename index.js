
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
    addUserInput(inputValue)
    clearUserInput()    
})

onValue(itemsInDB, function(snapshot){
    let itemsArray = Object.values(snapshot.val())

})

function addUserInput(userInput){
    listItemsEl.innerHTML += `<li>${userInput}</li>` 
}

function clearUserInput(){
    inputFieldEl.value = ""
}
