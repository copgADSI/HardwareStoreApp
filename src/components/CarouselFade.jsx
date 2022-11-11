import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import image1 from '../assets/carousel/image1.jpg'
import image2 from '../assets/carousel/image2.jpg'
function CarouselFade() {
  return (
    <Carousel>
      <Carousel.Item interval={20000}>
        <img
          className="d-block w-100 img_carousel"
          src={image1}
          alt="Image One"
        />
        <Carousel.Caption>
          <h3>¡BIENVENIDO A NUESTRA TIENDA!</h3>
          <p>Encuentra lo que necesites</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={20000}>
        <img
          className="d-block w-100 img_carousel"
          src={image2}
          alt="Image Two"
        />
        <Carousel.Caption>
          <h3>¡ENCUENTRA PC GAMER A TU MEDIDA!</h3>
          <p>Encuentra lo que necesites</p>
          <Link to="/pcgamers">
            <button id='btn__primary'>
              echar un vistazo
            </button>
          </Link>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={20000}>
        <img
          className="d-block w-100 img_carousel"
          src={image2}
          alt="Image Two"
        />
        <Carousel.Caption>
          <h3>PC PARA TU OFICINA O AMBIENTE LABORAL</h3>
          <p>Encuentra lo que necesites.</p>
          <Link to="/pcoficina">
            <button id='btn__primary'>
              echar un vistazo
            </button>
          </Link>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;