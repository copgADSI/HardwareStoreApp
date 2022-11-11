import { Link, NavLink } from "react-router-dom"
import { ROUTES } from "../utils/utils"
import image from '../assets/carousel/image1.jpg'
const Navbar = () => {
    return (
        <nav className="bg-gray-800">
            <div className="container flex">
                {/* ALL CATEGORIES */}
                <div className="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
                    <span className="text-white">
                        <i className="fas fa-bars"></i>
                    </span>
                    <span className="capatalize ml-2 text-white">Todas las categorías</span>
                    <div className="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300">
                        {ROUTES.map((route) => (
                            <Link key={route.id} to={route.to}
                                className="flex items-center px-6 py-3 hover:bg-gray-100 transition"
                            >
                                <span className="ml-6-gray-600 text-sm">
                                    {route.text}
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex items-center justify-between flex-grow pl-12">
                    <div className="flex items-center space-x-6 ">
                        <NavLink to="/"
                            className="text-gray-200 hover:text-white transition" >
                            inicio
                        </NavLink>
                        <NavLink to="tienda"
                            className="text-gray-200 hover:text-white transition" >
                            productos
                        </NavLink>
                        <NavLink to="/acerca-de-nosotros"
                            className="text-gray-200 hover:text-white transition" >
                            contáctanos
                        </NavLink>
                        <NavLink to="/contactanos"
                            className="text-gray-200 hover:text-white transition" >
                            contáctanos
                        </NavLink>
                    </div>

                    {
                        localStorage.getItem('access_toker') !== null
                        &&
                        <Link
                            to="iniciar-sesion"
                            className="lr-12 text-gray-200 hover:text-white transition"
                        >
                            iniciar Sesión/regístrase
                        </Link>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar