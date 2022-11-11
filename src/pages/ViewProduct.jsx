import laptop from '../assets/categories/laptop.jpg'
import Breadcrums from '../components/Breadcrums';
import Spinner from '../components/Spinner';
import useCounter from '../hooks/useCounter';
import useFormData from '../hooks/useFormData'
const ViewProduct = () => {
    const { product_details, productDetailsIsLoading, handleSercivesTodo } = useFormData();
    const { increase, decrement, quantity } = useCounter(product_details?.quantity);
    return (
        <>
            <Breadcrums title="Detalles del Producto" icon="fa-solid fa-circle-info"/>
            <div className="container grid grid-cols-2 gap-6">
                <div>
                    <img src={laptop} alt=""
                        className="w-full"
                    />
                    <div className='grid grid-cols-5 gap-4 mt-4'>
                        <img src={laptop} className="w-full cursor-pointer border border-primary" alt="" />
                        <img src={laptop} className="w-full cursor-pointer border" alt="" />
                        <img src={laptop} className="w-full cursor-pointer border" alt="" />
                        <img src={laptop} className="w-full cursor-pointer border" alt="" />
                        <img src={laptop} className="w-full cursor-pointer border" alt="" />
                    </div>
                </div>
                <div>
                    {productDetailsIsLoading && <Spinner />}
                    <h2 className='text-3xl font-medium uppercase mb-2'> {product_details?.name} </h2>
                    <div className="flex items-center mb-4">
                        <div className="flex gap-1 text-sm text-yellow-400">
                            <span>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>
                        </div>
                        <div className="text-xs text-gray-500 ml-3">(120) reseñas</div>
                    </div>
                    <div className='space-y-2'>
                        <p className="text-gray-800 font-semibold space-x-2">
                            <span>Cantidad:</span>
                            <span className='text-green-600'> {product_details?.quantity} </span>
                        </p>

                        <p className="space-x-2">
                            <span className='text-gray-800 font-semibold'>Marca:</span>
                            <span className='text-gray-600'>{product_details?.brand} </span>
                        </p>

                        <p className="space-x-2">
                            <span className='text-gray-800 font-semibold'>Categoría:</span>
                            <span className='text-gray-600'>{product_details?.category}  </span>
                        </p>
                    </div>
                    <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
                        <p className="text-2xl text-primary font-medibold"> ${product_details?.price} </p>
                        <p className="text-base text-gray-400 line-through">$500000</p>
                    </div>
                    <div className="mt-4 text-gray-600">
                        {product_details?.description}
                    </div>
                    <div className='mt-4'>
                        <h3 className="text-sm text-gray-800 uppercase mb-1">Cantidad</h3>
                        <div className="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
                            <input type="button"
                                onClick={decrement}
                                className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                                value="-"
                            />
                            <div className="h-8 w-8 text-base flex items-center justify-center cursor-pointer"> {quantity} </div>
                            <button
                                onClick={increase}
                                className="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
                            >
                                +
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                        <button className='bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:bg-transparent hover:text-primary transition'>
                            <i className="fas fa-shopping-bag"></i>
                            Agregar al Carrito
                        </button>

                        <form id="addFavorite" onSubmit={handleSercivesTodo} >
                            <input type="hidden" name="product_id" value={product_details?.id} />
                            <button
                                type='submit'
                                className='border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase flex items-center gap-2 hover:text-primary transition'>
                                <i className="fas fa-heart"></i>
                                agregar a favoritos
                            </button>

                        </form>


                    </div>
                </div>
            </div>
        </>
    )
}

export default ViewProduct