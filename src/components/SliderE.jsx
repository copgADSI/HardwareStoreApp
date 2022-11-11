import { Link } from 'react-router-dom';
import './Styles.css';
const SliderE = ({productRa}) => {
    return (
        <>
            <div className="main__box">
                <div className="slide__img">
                    <img src="https://transaccional.impresistem.com/documents/10181/13103/1054133.jpg" alt="" />
                    <div className="overlay">
                        <Link to="" className='buy__btn'>Ver Detalles</Link>
                    </div>
                </div>
                <div className="detail__box">
                    <div className="type">
                        <Link to="/">
                            {productRa.name}
                        </Link>
                    </div>
                    <span className='price'> {productRa.price} </span>
                </div>
            </div>

        </>



    )
}

export default SliderE