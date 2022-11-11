import { Link } from "react-router-dom"
import useFormData from "../hooks/useFormData"

const SingleProduct = ({ product }) => {
    const { handleSercivesTodo } = useFormData();
    
    return (
        <>
            <div className="bg-white shadow rounded overflow-hidden group" style={{ maxWidth: 300 }}>
                <div className="relative">
                    <img src="data:image/jpeg;base64,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" alt=""
                        className="w-full"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                        <Link to={`/detalles-producto/${product.id}`}
                            className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                            <i className="fas fa-search"></i>
                        </Link>
                        <form id="addFavorite" onSubmit={handleSercivesTodo} >
                            <input type="hidden" name="product_id" value={product.id} />
                            <button type="submit" className="text-white text-lg w-9 h-8 rounded-full bg-primary flex items-center justify-center hover:bg-gray-800 transition">
                                <i className="fas fa-heart"></i>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="pt-4 pb-3 px-4">
                    <Link to="">
                        <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition"> {product.name} </h4>
                    </Link>
                    <div className="flex items-baseline mb-1 space-x-2 font-roboto">
                        <p className="text-xl text-primary font-semibold"> ${product.price} </p>
                        <p className="text-sm text-gray-400 line-through">--</p>
                    </div>
                    <div className="flex items-center">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(19)</div>
                    </div>
                </div>
                <input type="number" defaultValue={1} placeholder="cantidad"
                    min={1}
                    max={product.quantity}
                    name="quantity"
                    className="text-center w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 text-sm shadow-sm rounded" />
                <Link to="" className="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
                >
                    Agregar al Carrito
                </Link>
            </div>
        </>
    )
}

export default SingleProduct