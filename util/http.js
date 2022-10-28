import axios from "axios";

export async function fetchFlashSalesProducts(){
    const response = await axios.get('https://fakestoreapi.com/products?limit=7');
    return response.data;
};

export async function fetchWinterArrivalProducts(){
    const winterArrivalResponse = await axios.get('https://fakestoreapi.com/products?sort=desc');
    return winterArrivalResponse.data;
};
