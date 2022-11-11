
import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_HARWDWARE_STORE_API

export async function getCategories() {
    const { data } = await axios.get('categories', {
        headers: {
            'content-type': 'application-json'
        }
    });
    return data.categories;
}

export async function storeCategory() {
    const { data } = await axios.get('categories', {
        headers: {
            'content-type': 'application-json'
        }
    });
    return data;
}