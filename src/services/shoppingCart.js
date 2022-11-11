import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_HARWDWARE_STORE_API

export async function getCart(user_id) {
    const { data } = await axios.get('get-shopping-cart', {
        params: { user_id: user_id },
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${localStorage.getItem('access_token')}`
        }
    }).catch((err) => alert(err.message));
    return data;
}