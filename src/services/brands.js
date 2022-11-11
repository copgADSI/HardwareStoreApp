
import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_HARWDWARE_STORE_API

export async function getBrands() {
    const { data } = await axios.get('brands', {
        headers: {
            'content-type': 'application-json'
        }
    });
    return data.brands;
}

export async function storeBrand() {
    const { data } = await axios.get('brands', {
        headers: {
            'content-type': 'application-json'
        }
    });
    return data;
}