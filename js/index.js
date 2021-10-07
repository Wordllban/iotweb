import {
    addItemToPage,
    renderItemsList, 
    DELETE_BUTTON_PREFIX,
    EDIT_BUTTON_PREFIX
} from "./templates.js";

import {
    getData, 
    sendData, 
    editData, 
    deleteData
} from "./api.js"

import {
    submitinModal,
    editedModal, 
    deletedModal
} from "./modal.js"

var inputs = document.querySelectorAll('input');
const nameInput = document.getElementById("name_input");
const submitInputs = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const sortButtonASC = document.getElementById("sort_button_asc");
const sortButtonDESC = document.getElementById("sort_button_desc");
const priceInput = document.getElementById("price_input");
const error_message = document.getElementById("message");

export let allDevices = [];

export const getBody = () => {
    var myForm = document.getElementById('add_form');
    var body = new FormData(myForm);
    return body
}

export const onRemoveItem =  (event) => {
    const deviceId = event.target.id.replace(DELETE_BUTTON_PREFIX, "")
    deleteData(deviceId);
    deletedModal();
}

export const onEditItem =  (event) => {
    const deviceId = event.target.id.replace(EDIT_BUTTON_PREFIX, "");
    if (validate()) { editData(deviceId), editedModal() };
    refetchAllItems();
}

export const refetchAllItems = () => {
    const items =  getData();
    renderItemsList(items, onEditItem, onRemoveItem);
};

const findItems = (items) => {
    const foundItems = items[0].filter((items) => items.model.search(findInput.value) !== -1);
    return foundItems;
};

const sortItemsASC = (items) => {
    const sortedItems = items.sort((a, b) => (a.price > b.price) ? 1 : -1);
    renderItemsList(sortedItems);
}

const sortItemsDESC = (items) => {
    const sortedItems = items.sort((a, b) => (a.price < b.price) ? 1 : -1);
    renderItemsList(sortedItems);
}

export const clearInputs = () => {
    inputs.forEach(input =>  input.value = ''); 
};

cancelFindButton.addEventListener("click", () => {
    refetchAllItems(allDevices);
    clearInputs();
})

submitInputs.addEventListener('click', (event) => {
    event.preventDefault();
    if (validate()) { sendData(), submitinModal() };
    clearInputs();
});

sortButtonASC.addEventListener('click', (event) => {
    event.preventDefault(); 
    renderItemsList(sortItemsASC(allDevices));
});

sortButtonDESC.addEventListener('click', (event) => {
    event.preventDefault(); 
    renderItemsList(sortItemsDESC(allDevices));
});

findButton.addEventListener("click", () => {
    renderItemsList(findItems(allDevices));
    clearInputs();
});

/* countButton.addEventListener('click', (event) => {
    event.preventDefault();
    document.getElementById("counter").innerHTML = countMins(allDevices);
    console.log(countMins(allDevices));
}); */

const validate = () => {
    error_message.style.padding = "10px";
    var text;

    if(nameInput.value.length < 3){
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    } else if(priceInput.value.length == 0){
        text = "Please Enter valid Price";
        error_message.innerHTML = text;
        return false;
    } else{
        error_message.style.display = "none";
        return true;
    }
}

window.onload = () => {
    renderItemsList(getData());
}
