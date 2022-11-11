import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_HARWDWARE_STORE_API

export async function getProducts() {
    const response = await axios.get('list-product', {
        params: {
            filters: {}
        },
        headers: {
            'content-type': 'application-json'
        }
    });
    const { products, productsRandom, priceRange } = response.data
    return {
        products: Object.values(products),
        productsRandom,
        priceRange
    }
}

export async function showProduct(id) {
    const response = await axios.get('show-product', {
        params: {
            id: id
        },
        headers: {
            'content-type': 'application-json'
        }
    });
    const { product } = response.data;
    return { product }
}

export async function storeProduct(payload) {

}

export async function updateProduct(payload) {

}

export async function destroyProduct(id) {

}


export async function addFavorite(payload) {
    const response = await axios.post('add-favorites-product', payload, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem('access_token')}`
        }
    });
    const { product, message } = response.data
    return {
        product, message
    }
}

export async function getFavorites(user_id) {
    const response = await axios.get('get-favorites', {
        params: {
            user_id
        },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem('access_token')}`
        }
    });
    const { favorites, total } = response.data
    return {
        favorites, total
    }
}