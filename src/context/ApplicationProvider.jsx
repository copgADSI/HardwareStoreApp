import { createContext, useState } from "react"

export const ApplicationContext = createContext(null);
const ApplicationProvider = ({ children }) => {

    

    const [price, setPrice] = useState({
        min: 1000,
        max: 20000,
    })
    const [brands, setBrands] = useState([])

    const defauldPrice = async (prices) => {
        const max = await prices?.max;
        const min = await prices?.min;

        /*  setPrice({
             max: await prices?.max,
             min: await prices?.min,
         }) */
    }

    const handleInputPrice = (event) => {
        const { id: label_price, value } = event.target;
        setPrice({ ...price, [label_price]: value });
    }
    const handleInputBrand = (event) => {
        const { id: brand_id } = event.target;
        setBrands([brand_id])
    }
    const search = (data) => {
        const keys = ['brand_id', 'category_id', 'price'];
        return data && Object.values(data).filter(product => {
            return product.price >= price.min && product.price <= price.max
        })

    }


    return (
        <ApplicationContext.Provider value={{
            defauldPrice,
            handleInputPrice,
            handleInputBrand,
            price,
            setPrice,
            search,
        }}>
            {children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationProvider