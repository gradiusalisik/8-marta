import styled from 'styled-components'

import { Swiper } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
  height: 100vh;
  width: 100%;
`

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`

export const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`
