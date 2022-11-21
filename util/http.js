import axios from "axios";

const MY_BACKEND_ENDPOINT = 'https://e-commerce-app-936f4-default-rtdb.firebaseio.com';

// fetch just 7 data from fakestoreAPI
export async function fetchFlashSalesProducts(){
    const response = await axios.get('https://fakestoreapi.com/products?limit=7');
    return response.data;
};

// fetch all 20 data from fakestoreAPI in descending order
export async function fetchWinterArrivalProducts(){
    const winterArrivalResponse = await axios.get('https://fakestoreapi.com/products?sort=desc');
    return winterArrivalResponse.data;
};

// post cart product to FIREBASE
export async function storeCartProduct(cartData){
    const response = await axios.post(MY_BACKEND_ENDPOINT + '/cart.json', cartData);
    return response.data.name;
};

// fetch cart product from FIREBASE
export async function fetchCartProducts(){
    const response = await axios.get(MY_BACKEND_ENDPOINT + '/cart.json')
    
    const cartArray = [];

    for(const key in response.data){
        const cartProducts = {
            id: key,
            color: response.data[key].color,
            count: response.data[key].count,
            price: response.data[key].price,
            rating: response.data[key].rating,
            size: response.data[key].size,
            source: response.data[key].source,
            title: response.data[key].title,
        };
        cartArray.push(cartProducts);
    };
    
    return cartArray;
};

// post favourite products to FIREBASE
export async function storeFavouriteIDs(product){
    const response = await axios.post(MY_BACKEND_ENDPOINT + '/favourites.json', product);
    return response.data.name;
};

// get favourites IDs and FIREBASE IDs too
export async function fetchFavourites(){
    const response = await axios.get(MY_BACKEND_ENDPOINT + '/favourites.json');

    const favouriteArray = [];

    for(let key in response.data){
        const favouritesData = {
            id: key,
            productNumber: response.data[key],
        };
        favouriteArray.push(favouritesData);
    }
    return favouriteArray;
};

// delete favourite IDs from FIREBASE
export function deleteFavouriteIDs(id){
    return axios.delete(MY_BACKEND_ENDPOINT + `/favourites/${id}.json`)
}
