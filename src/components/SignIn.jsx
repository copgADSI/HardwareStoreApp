import { Link } from "react-router-dom"
import useFormData from "../hooks/useFormData"

const SignIn = () => {
    const { handleSubmit } = useFormData();
    return (
        <div className="max-w-lg mx-auto shadow px-6 py-7 rouded overflow-hidden">
            <h2 className="text-2xl uppercase font-medium mb-1">Iniciar Sesión</h2>
            <p className="text-gray-600 mb-6 text-sm">Inicia sesión si ya tiene una cuenta.</p>
            <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="text-gray-600 mb-2 block">Correo Electrónico</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="Ingresa tu correo electrónico"
                        />

                    </div>
                    <div>
                        <label htmlFor="password" className="text-gray-600 mb-2 block ">Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="Ingresa tu contraseña"
                        />

                    </div>
                    <div className="flex items-center justify-between mt-6">
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                name="remember"
                                id="agreement"
                                className="text-primary focus:ring-0 rounded-sm cursor-pointer"
                            />
                            <label htmlFor="agreement" className="text-gray-600 ml-3 cursos-pointer">Recordarme</label>
                        </div>
                        <Link to="" className="text-primary">¿Olvidó su contraseña?</Link>
                    </div>
                    <div className="mt-4">
                        <button
                            type="submit"
                            className="block w-full py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium"
                        >
                            Ingresar
                        </button>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default SignIn