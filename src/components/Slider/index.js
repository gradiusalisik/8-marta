import React, {useState} from 'react';
import SwiperCore, { Keyboard } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import {slides} from '../../constants/hbSlider'

// Import Swiper styles
import 'swiper/css';
import { SwiperStyled, LogoName, Slide, LogoWrap, LogoImg, LogoBottomImg, LogoWrapper, Text, LogoNameWrap, MaskotImg, Content, SlideEnd, Title, Photo, LogoShort } from './style';

SwiperCore.use([Keyboard]);


const Slider = () =>  {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex)
  }

  return (
  <SwiperStyled
    full={activeIndex === slides.length - 1}
    slidesPerView={1}
    keyboard={{
      "enabled": true
    }}
    onSlideChange={handleSlideChange}
  >
    {slides.map((item, key) => {
      if (item.first) {
        return (
          <SwiperSlide key={key}>
            <LogoWrapper>
              <LogoWrap>
              <LogoImg src={item.content.logo} />
              <LogoBottomImg src={item.content.logoBottom} />
              </LogoWrap>
            </LogoWrapper>
          </SwiperSlide>
        )
      }

      if (item.end) {
        return (
          <SwiperSlide key={key}>
              <SlideEnd>
                <LogoShort src={item.content.logo} />
                <Title>{item.content.title}</Title>
                <Photo src={item.content.photo} />
              </SlideEnd>
          </SwiperSlide>
        )
      }

      return (
        <SwiperSlide key={key}>
          <Slide>
            <LogoNameWrap>
            <LogoName src={item.content.logoName} />
            </LogoNameWrap>
            <Content>
              <Text dangerouslySetInnerHTML={{__html: item.content.text }} />
              <MaskotImg src={item.content.maskot} />
            </Content>
          </Slide>
        </SwiperSlide>
    )})}
  </SwiperStyled>
)}


export default Slider;
