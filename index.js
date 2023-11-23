import {initializeApp} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

const appSettings = {
    databaseURL: "https://listit-53c33-default-rtdb.asia-southeast1.firebasedatabase.app/"
}
const app = initializeApp(appSettings)
const addBtnEl = document.querySelector("#add-button")
const inputFieldEl = document.querySelector("#input-field")

addBtn.addEventListener("click", function(){
    let inputValue = inputFieldEl.value

    console.log(inputValue)    
})