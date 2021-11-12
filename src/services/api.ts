import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:5050/api/v2/devices',
    headers: {
        'Content-type': 'application-json'
    }
});

export const getFilteredData = async (title: string, price: string) => { 
    let url = `http://localhost:5050/api/v2/devices?`   

    if(title !== undefined && title !== '') {
        url += `model=${title}&`;
    }
    
    if (price !== undefined && price !== '') {
        url += `price=${price}`;
    }
    console.log('url: ', url);

    return (await http.get(url)).data
}

export const getById = async (id: string | number) => {
    let url = `http://localhost:5050/api/v2/devices/${id}`
    return (await http.get(url)).data
}