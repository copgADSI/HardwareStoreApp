import { useContext } from "react"
import { ApplicationContext } from "../context/ApplicationProvider"

const Price = () => {
    const { handleInputPrice } = useContext(ApplicationContext);
    return (
        <div className="divide-y divide-gray-200 space-y-5 " >
            {/* Category filter */}
            <div className="pt-4">
                <p className="text-x1 text-gray-800 mb-3 uppercase font-medium">Rando de Precio</p>
                <div className="mt-4 flex items-center">
                    <input type="number"
                        id="min"
                        onInput={handleInputPrice}
                        defaultValue={1000}
                        className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                        placeholder="mín"
                    />
                    <span className="mx-3 text-gray-500">-</span>
                    <input type="number"
                        id="max"
                        onInput={handleInputPrice}
                        defaultValue={6000000}
                        className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                        placeholder="max"
                    />
                </div>
            </div>
            {/* Category filter end */}
        </div>
    )
}

export default Price