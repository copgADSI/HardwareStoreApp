import { Link } from 'react-router-dom'
import './Styles.css'
const Banner = () => {
    return (
        <div id="banner" className="bg-cover bg-no-repeat bg-center py-36">
            <div className="container">
                <h1 className="text-6xl text-white font-medium mb-4">
                    Bienvenido a <b>Hardware Store</b>
                </h1>
                <p className='text-white '>
                    Encontrarás lo que necesites en Hardware.
                    <br />
                    ¡La mejor tienda en línea!
                </p>

                <div className="mt-12">
                    <Link to="/tienda" className='bg-primary border border-primary text-white px-8 py-3 font-medium rouded-md hover:bg-transparent hover:text-primary transition'>
                        ¡Comprar Ahora!
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner