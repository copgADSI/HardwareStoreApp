const Features = () => {
    return (
        <div className="container py-16">
            <div className="w-10/12 grid grid-cols-3 gap-6 mx-auto justify-center">
                {/* FEATURE */}
                <div className="border border-primary rouded-sum px-3 py-3 py-6 flex justify-center items-center gap-5">
                    <i className="fa-solid fa-truck text-primary"></i>
                    <div>
                        <h4 className="font-medium capitalize text-lg object-contain">
                            Envío Gratis
                        </h4>
                        <p className="text-gray-500 text-sm">
                            Comprar sobre $60.000.
                        </p>
                    </div>
                </div>
                <div className="border border-primary rouded-sum px-3 py-3 py-6 flex justify-center items-center gap-5">
                    <i className="fa-solid fa-money-bill text-primary"></i>
                    <div>
                        <h4 className="font-medium capitalize text-lg object-contain">
                            Devoluciones de Dinero
                        </h4>
                        <p className="text-gray-500 text-sm">
                            30 días hábiles después de la compra.
                        </p>
                    </div>
                </div>
                <div className="border border-primary rouded-sum px-3 py-3 py-6 flex justify-center items-center gap-5">
                    <i className="fa-solid fa-face-smile text-primary"></i>
                    <div>
                        <h4 className="font-medium capitalize text-lg object-contain">
                            Soporte 24/7
                        </h4>
                        <p className="text-gray-500 text-sm">
                            Atención al Cliente.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Features