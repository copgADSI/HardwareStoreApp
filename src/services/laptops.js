import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_HARWDWARE_STORE_API

export async function getLaptops() {
    return await axios.get('get-laptops');
}