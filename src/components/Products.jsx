

import useFormData from "../hooks/useFormData"
import SingleProduct from "./SingleProduct"
import Sorting from "./Sorting"
import Spinner from "./Spinner";

const Products = ({ data }) => {
    const { isLoading } = useFormData();
    return (
        <div className="col-span-3">
           
            <Sorting />
            <div className=" text-center items-center mb-4">
                {isLoading && <Spinner />}
            </div>
            <div className="grid grid-cols-3 gap-6">
                {
                    data && Object.values(data).map((product) => (
                        <SingleProduct key={product.id} product={product} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products