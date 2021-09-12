//

const titleInput = document.getElementById("title_input");
const descriptionInput = document.getElementById("description_input");
const itemsContainer = document.getElementById("items_container");

// local functions 
const getItemId = (id) => `item-${id}`;

const itemTemplate = ({ id, title, desc }) => `
    <li id="${getItemId(id)}" class="item-card">
        <img
        src="https://images.unsplash.com/photo-1555543451-eeaff357e0f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1189&q=80"
        class="card-img"
        width="375"
        alt="card image"
        />
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-paragraph">${desc}</p>
        </div>
    </li>
`

// exposed functions 
export const clearInputs = () => {
    titleInput.value = "";
    descriptionInput.value = "";
};

export const addItemToPage = ({ id, title, desc}) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin",
        itemTemplate({ id, title, desc })
    );

};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";
    
    for (const item of items) {
        addItemToPage(item);
    }
};

export const getInputValues = () => {
    return {
        title: titleInput.value,
        description: descriptionInput.value,
    };
};