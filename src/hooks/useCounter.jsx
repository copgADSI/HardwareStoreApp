import { useState } from "react";

const useCounter = (product_quantity) => {
    const [quantity, setQuantity] = useState(1);
    const increase = () => {
        if (quantity >= product_quantity) return;
        setQuantity(quantity + 1)
    };
    const decrement = () => {
        if (quantity === 1) return;
        setQuantity(quantity - 1)
    };


    return {
        quantity,
        increase,
        decrement,
    }
}

export default useCounter