import React from 'react';
import SwiperCore, { Keyboard } from 'swiper';
import { SwiperSlide } from 'swiper/react';

import Cat from '../../assets/img/cat.jpg';

// Import Swiper styles
import 'swiper/css';
import { SwiperStyled, Image, Slide} from './style';

SwiperCore.use([Keyboard]);

const images = [
  Cat,
  Cat,
  Cat,
]

const Slider = () =>  (
  <SwiperStyled
    slidesPerView={1}
    keyboard={{
      "enabled": true
    }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
  >
    {images.map((item, key) => <SwiperSlide key={key}>
      <Slide>
      <Image src={item} />
      </Slide>
      </SwiperSlide>
      )}
  </SwiperStyled>
);


export default Slider;
