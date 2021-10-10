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
const countButton = document.getElementById("count_button");
const priceInput = document.getElementById("price_input");
const errorMessageInput = document.getElementById("input_message");
const errorMessageFind = document.getElementById("find_message");
const deviceCounter = document.getElementById("counter");

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
    const foundItems = items[0].filter(d => d.model.search(findInput.value) !== -1);
    return foundItems;
};

const sortItemsASC = (items) => {
    const sortedItems = items[0].sort((a, b) => (a.price > b.price) ? 1 : -1);
    return sortedItems;
}

const sortItemsDESC = (items) => {
    const sortedItems = items[0].sort((a, b) => (a.price < b.price) ? 1 : -1);
    return sortedItems;
}

export const clearInputs = () => {
    inputs.forEach(input =>  input.value = ''); 
};

cancelFindButton.addEventListener("click", () => {
    refetchAllItems(allDevices);
    clearInputs();
    errorMessageFind.style.display = "none"
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

countButton.addEventListener("click", (event) => {
    event.preventDefault(); 
    deviceCounter.textContent = `Total amount of devices: ${allDevices[0].length}`;
})


findButton.addEventListener("click", () => {
    errorMessageFind.style.padding = "10px";

    if (findInput.value == 0) {
        errorMessageFind.textContent = "What you want to find?"
    } else {
        renderItemsList(findItems(allDevices));
        clearInputs();
        errorMessageFind.style.display = "none"
    }
});

const validate = () => {
    errorMessageInput.style.padding = "10px";

    if (nameInput.value.length < 3){
        errorMessageInput.textContent = "Please Enter valid Model";
    } else if (priceInput.value == 0){
        errorMessageInput.textContent = "Please Enter valid Price";
        return false;
    } else if (priceInput.value < 0) {
        errorMessageInput.textContent = "Please Enter valid Price";
        return false;
    } else { 
        errorMessageInput.style.display = "none";
        return true;
    }
}

window.onload = () => {
    renderItemsList(getData());
}