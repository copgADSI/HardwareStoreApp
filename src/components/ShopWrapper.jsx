import { useContext } from "react";
import { Toast } from "react-bootstrap";
import { ApplicationContext } from "../context/ApplicationProvider";
import useFormData from "../hooks/useFormData";
import Products from "./Products"
import Sidebar from "./Sidebar"

const ShopWrapper = () => {
    const { products } = useFormData();
    const { search } = useContext(ApplicationContext);
    return (
        <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start">
            <Sidebar />
            <Products data={search(products)} />
        </div>
    )
}

export default ShopWrapper