import {
    addItemToPage,
    clearInputs,
    renderItemsList,
    getInputValues
} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const itemsCounter = document.getElementById("items_counter");

let devices = [];

const addItem = ({ title, desc }) => {
    const generatedId = () => Math.random().toString(36).substr(2, 9);

    const newItem = {
        id: generatedId,
        title,
        desc,
    };

    devices.push(newItem);

    addItemToPage(newItem);
};

submitButton.addEventListener("click", (event) => {
    // Prevents default page reload on submit
    event.preventDefault();

    const { title, description } = getInputValues();

    clearInputs();

    addItem({
        title,
        desc: description,
    });
});

findButton.addEventListener("click", (event) => {
    event.preventDefault();
    const foundDevices = devices
        .filter(d => d.title.search(findInput.value) !== -1);
    
    itemsCounter.innerHTML = `${foundDevices.length}`;

    renderItemsList(foundDevices);
});

cancelFindButton.addEventListener("click", (event) => {
    event.preventDefault();

    renderItemsList(devices);

    itemsCounter.innerHTML = "";
    findInput.value = "";
});

renderItemsList(devices);