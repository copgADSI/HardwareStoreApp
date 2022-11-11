import { useContext } from "react";
import { ApplicationContext } from "../context/ApplicationProvider";
import useFormData from "../hooks/useFormData"

const Brands = () => {
    const { handleInputBrand } = useContext(ApplicationContext);
    const { brands } = useFormData();
    return (
        <div className="divide-y divide-gray-200 space-y-5 " >
            {/* Category filter */}
            <div className="pt-4">
                <p className="text-x1 text-gray-800 mb-3 uppercase font-medium">Marcas</p>
                <div className="space-y-2">
                    {
                        brands && Object.values(brands).map((item, index) => (
                            <div key={index} className="flex items-center">
                                <input
                                    type="checkbox"
                                    name=""
                                    onInput={handleInputBrand}
                                    id={item.id}
                                    className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                                />
                                <label htmlFor={item.id} className="text-gray-600 ml-3 cursor-pointer">
                                    {item.brand}
                                </label>
                                <div className="ml-auto text-gray-600 text-sm"> ({item.total}) </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* Category filter end */}
        </div>
    )
}

export default Brands