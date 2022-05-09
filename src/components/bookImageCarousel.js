import Carousel from 'react-bootstrap/Carousel';

const bookImageCarousel = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            alt='1st slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            alt='2nd slide'
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            alt='3rd slide'
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default bookImageCarousel;