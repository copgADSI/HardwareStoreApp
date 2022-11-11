import { Link } from "react-router-dom"
import useFormData from "../hooks/useFormData"

const Header = () => {
    const {favorites} = useFormData();
    return (
        <header className="py-4 shadow-sm bg-white">
            <div className="container flex items-center justify-between">
                {/* LOGO */}
                <Link to="/" className="w-32">Hardware Store</Link>
                {/* SEARCH BAR */}
                <div className="w-full max-w-xl relative flex ">
                    <span className="absolute left-4 top-3 text-lg text-gray-400">
                        <i className="fas fa-search"></i>
                    </span>
                    <input type="text" name="search" id="search"
                        className="w-full border border-primary border-r-0 pl-12 py-2 pr-3 rounded-l-md focus:outline-none"
                        placeholder="Buscar..."
                    />
                    <button
                        className="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">
                        Buscar
                    </button>
                </div>
                {/* ICONS */}
                <div className="flex items-center space-x-4">
                    {
                        localStorage.getItem('access_token')
                        &&
                        <>
                            <Link className="text-center text-gray-700 hover:text-primary transition relative">
                                <div className="text-2xl">
                                    <i className="fa-solid fa-star text-secondary"></i>
                                </div>
                                <div className="text-xs leading-3">Favoritos</div>
                                <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                                    {favorites?.total}
                                </span>
                            </Link>
                            <Link className="text-center text-gray-700 hover:text-primary transition relative">
                                <div className="text-2xl">
                                    <i className="fa-solid fa-cart-shopping"></i>
                                </div>
                                <div className="text-xs leading-3">Carrito</div>
                                <span className="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                                    8
                                </span>
                            </Link>


                            <Link to="perfil" className="text-center text-gray-700 hover:text-primary transition relative">
                                <div className="text-2xl">
                                    <i className="fa-solid fa-user"></i>
                                </div>
                                <div className="text-xs leading-3">Mi Cuenta</div>
                            </Link>
                        </>
                    }
                </div>
            </div>
        </header>

    )
}

export default Header