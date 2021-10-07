import {
    allDevices, 
    getBody,
    onEditItem, 
    onRemoveItem, 
    clearInputs,
    refetchAllItems,
} from "./index.js"

import {
    renderItemsList
} from "./templates.js"

axios.defaults.baseURL = "http://localhost:3000/api/v1/devices"
/* axios.defaults.headers.put['Accept'] = "'content-Type': 'multipart/form-data;  boundary=----abcdefg'"  
axios.defaults.headers.post['Accept'] = "'content-Type': 'multipart/form-data;  boundary=----abcdefg' " */

export const getData = () => {
    axios
    .get()
    .then(response => {
    if (allDevices){
        allDevices.length = 0;
        allDevices.push(response.data, onEditItem, onRemoveItem);
    }
    else {allDevices.push(response.data);}
    renderItemsList(response.data, onEditItem, onRemoveItem)
    })
    .catch(err => {
    console.log(err, err.response);})

    return allDevices;
};


export const sendData = () => {
    axios
        .post('', getBody())
        .then( () => {
            refetchAllItems(allDevices);
            clearInputs();
        })
        .catch(err => {
            console.log(err, err.response);
        });
};

export const deleteData = (id) => {
    axios
        .delete(`/${id}`)
        .then( () => { refetchAllItems(allDevices) })
        .catch(err => {
            console.log(err, err.response);
        });
};

export const editData = (id) =>{
    axios
        .put(`/${id}`, getBody())
        .then( () => { 
            refetchAllItems(allDevices);
            clearInputs();
        })
        .catch( err => { 
            console.log(err, err.response) 
        });
    };
