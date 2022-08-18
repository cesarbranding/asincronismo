import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

function fetchdata(urlApi) {
    return fetch(urlApi)
}

// fetchdata(`${API}/products`) 
//     .then(response => response.json())
//     .then(products => {
//         console.log(products);
//     }).catch(error => {
//         console.log(error);
//     }).finally(() => {
//         console.log('finally');
//     })

fetchdata(`${API}/products`)
    .then(response => response.json())
    .then(products => {
        console.log(products);
        return fetchdata(`${API}/products/${products[1].id}`);
    })  .then (response => response.json())
    .then(product => {
        console.log(products.title);
    }).catch(error => {
        console.log(error);
    }).finally(() => {
        console.log('finally');
    })