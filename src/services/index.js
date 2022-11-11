import axios from "axios"
axios.defaults.baseURL = process.env.REACT_APP_HARWDWARE_STORE_API;

export async function createUser({ fields }) {
    const response = await fetch(process.env.REACT_APP_HARWDWARE_STORE_API.concat('/user-register'), {
        method: 'POST',
        body: JSON.stringify(fields),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await response.json()
}

export async function loginUser(payload) {
    const { data } = await axios.post('user-login', payload);
    return data;
}




export async function createProduct({ fields }) {
    const response = await fetch(process.env.REACT_APP_HARWDWARE_STORE_API.concat('/create-product'), {
        method: 'POST',
        body: JSON.stringify(fields),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return await response.json()
}