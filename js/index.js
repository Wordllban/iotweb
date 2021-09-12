import {
    addItemToPage,
    clearInputs,
    renderItemsList,
    getInputValues,
} from "./dom_util.js";

const submitButton = document.getElementById("submit_button");
const findButton = document.getElementById("find_button");
const cancelFindButton = document.getElementById("cancel_find_button");
const findInput = document.getElementById("find_input");
const itemsCounter = document.getElementById("items_counter");
const itemsSort = document.getElementById("sort_items");

let devices = [];

itemsSort.addEventListener("click", (event) => {
    event.preventDefault();

    devices.sort((a, b) => (a.price < b.price) ? 1 : -1);

    renderItemsList(devices);
});

const addItem = ({ title, price }) => {
    const generatedId = () => Math.random().toString(36).substr(2, 9);

    const newItem = {
        id: generatedId,
        title,
        price,
    };

    devices.push(newItem);

    addItemToPage(newItem);
};

submitButton.addEventListener("click", (event) => {
    // Prevents default page reload on submit
    event.preventDefault();

    const { title, price } = getInputValues();

    clearInputs();

    addItem({
        title,
        price: price,
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