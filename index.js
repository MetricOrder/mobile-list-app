

const appSettings = {
    databaseURL: "https://listit-53c33-default-rtdb.asia-southeast1.firebasedatabase.app/"
}


const addBtnEl = document.querySelector("#add-button")
const inputFieldEl = document.querySelector("#input-field")

addBtn.addEventListener("click", function(){
    let inputValue = inputFieldEl.value

    console.log(inputValue)    
})