import styled, {css} from 'styled-components'

import { Swiper } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
  height: 80%;
  width: 80%;
  transition: width 0.3s, height 0.3s;

  ${({ full }) => full && css`
    width: 100%;
    height: 100%;
  `}
`

export const Slide = styled.div`
  padding: 24px 60px;
  width: 100%;
  height: 100%;
  border-radius: 40px;
  background-color: rgb(33 36 43 / 80%);
  box-sizing: border-box;
`

export const LogoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LogoWrap = styled.div`
  position: relative;
`

export const LogoImg = styled.img`
  width: 100%;
  height: 130px;
  object-fit: contain;
`

export const LogoBottomImg = styled.img`
  position: absolute;
  top: 80%;
  right: -5%;
  height: 196px;
  object-fit: contain;
`

export const LogoNameWrap = styled.div`
  display: flex;
  justify-content: center;
`

export const LogoName = styled.img`
  height: 200px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  object-fit: contain;
  @media screen and (max-height: 900px) {
    height: 140px;
  }
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Text = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 50px;
  color: white;

  @media screen and (max-height: 900px) {
    font-size: 20px;
    line-height: 40px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 18px;
    line-height: 36px;
  }

  strong {
    color: red;
  }
`

export const MaskotImg = styled.img`
  width: 362px;
  object-fit: contain;
  flex-shrink: 0;

  @media screen and (max-height: 900px) {
    width: 300px;
  }
`

export const SlideEnd = styled.div`
  padding: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const LogoShort = styled.img`
  width: 170px;
  height: 50px;
  object-fit: contain;
`

export const Title = styled.h1`
  font-size: 84px;
  line-height: 100px;
  color: white;
`

export const Photo = styled.img`
  height: 500px;
  width: 100%;
  object-fit: contain;
`
