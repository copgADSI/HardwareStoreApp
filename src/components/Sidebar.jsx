import useFormData from "../hooks/useFormData"
import Brands from "./Brands";
import Price from "./Price";

const Sidebar = () => {
    const { categories } = useFormData();
    return (
        <>
            <div className="col-span 1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
                <div className="divide-y divide-gray-200 space-y-5 " >
                    {/* Category filter */}
                    <div>
                        <p className="text-x1 text-gray-800 mb-3 uppercase font-medium">Categorias</p>
                        <div className="space-y-2">
                            {
                                categories && Object.values(categories).map((item, index) => (
                                    <div key={index} className="flex items-center">
                                        <input type="checkbox" name="" id={item.category} className="text-primary focus:ring-0 rounded-sm cursor-pointer" />
                                        <label htmlFor={item.category} className="text-gray-600 ml-3 cursor-pointer">
                                            {item.category}
                                        </label>
                                        <div className="ml-auto text-gray-600 text-sm"> ({item.total}) </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* Category filter end */}
                </div>
                {/*Brands filter */}

                {/*Brands filter End  */}
                <Brands />
                {/* Price filter  */}
                <Price />
                {/* Price filter end */}
            </div>

        </>

    )
}

export default Sidebar