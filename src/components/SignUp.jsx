import useFormData from "../hooks/useFormData"

const SignUp = () => {
    const { handleSercivesTodo } = useFormData();
    return (
        <div className="max-w-lg mx-auto shadow px-6 py-7 rouded overflow-hidden">
            <h2 className="text-2xl uppercase font-medium mb-1">Regístrate</h2>
            <p className="text-gray-600 mb-6 text-sm">Crea una cuenta.</p>
            <form onSubmit={handleSercivesTodo} id="createUser">
                <div className="space-y-4">
                    <div>
                        <label htmlFor="email" className="text-gray-600 mb-2 block">Nombre</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="Ingresa tu nombre"
                        />

                    </div>
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
                    <div>
                        <label htmlFor="password" className="text-gray-600 mb-2 block ">Confirmar Contraseña</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            className="block w-full border border-gray-300 px-4 py-3 text-gray-600 text-sm rounded focus:ring-0 focus:border-primary placeholder-gray-400"
                            placeholder="repetir contraseña"
                        />

                    </div>

                    <div className="mt-4">
                        <button
                            type="submit"
                            className="block w-full py-2 text-center text-white bg-gray-600 border border-gray-600 rounded hover:bg-transparent hover:text-gray-600 transition uppercase font-roboto font-medium"
                        >
                            Regístrate
                        </button>

                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp