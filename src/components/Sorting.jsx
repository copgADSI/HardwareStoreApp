const Sorting = () => {
    return (
        <div className="flex items-center mb-4">
            <select name="" id=""
                className="w-44 text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary" >
                <option value="">Ordenar por defecto</option>
                <option value="">Precio  bajo-alto</option>
                <option value="">Precio  alto-bajo</option>
                <option value="">Últmos productos</option>
            </select>
            <div className="flex gap-2 ml-auto">
                <div className="border border-primary w-10 h-9 flex items-center justify-center text-white bg-primary rounded cursor-pointer">
                    <i className="fas fa-th"></i>
                </div>
                <div className="border border-gray-300 w-10 h-9 flex items-center justify-center text-gray-600 rounded cursor-pointer">
                    <i className="fas fa-list"></i>
                </div>
            </div>
        </div>
    )
}

export default Sorting