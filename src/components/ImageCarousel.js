import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { heroAssets } from '../data';

const images = heroAssets.map((asset) => ({ url: asset.images }));

function ImageCarousel() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      const newSize = window.innerWidth;
      setWindowSize(newSize);
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Swiper
      loop={true}
      style={{
        height: '100%',
        width: '100%',
      }}
      slidesPerView={1}
    >
      {images.map((image, index) => (
        <SwiperSlide
          key={index}
          style={{
            height: '100%',
            width: '100%',
            backgroundImage: `url(${
              windowSize >= 400 ? image.url[0] : image.url[1]
            })`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        />
      ))}
    </Swiper>
  );
}

export default ImageCarousel;
