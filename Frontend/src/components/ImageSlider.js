import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../style/Slider.css'; // Create this file for custom styles

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500, // Adjust autoplay speed as needed
    pauseOnHover: true,
    arrows: false,
    className: 'slides', // Add custom class for styling
  };

  return (
    <div className='image_display_sideshow'>
      <Slider {...settings}>
      <div>
        <img src={require('../assets/first.png')} alt="Image 1" loading='lazy' />
      </div>
      <div>
        <img src={require('../assets/second.png')} alt="Image 2"  loading='lazy' />
      </div>
      <div>
        <img src={require('../assets/third.png')} alt="Image 3" loading='lazy' />
      </div>
    </Slider>

    </div>
  );
};

export default ImageSlider;
