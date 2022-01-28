import { useEffect } from 'react';
import './App.css';
import Slider from './components/Slider';
import Stub from './components/Stub';
import { canvasMatrix } from './utils/matrix';
import {useMedia} from './hooks/useMedia'
import styled from 'styled-components'

const AppStyled = styled.div`
  position: relative;
`

const Canvas = styled.canvas`
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:-5;
`

const SliderWrap = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

function App() {
  const isTablet = useMedia(1024);

  useEffect(() => {
    canvasMatrix();
  }, [])

  return (
    <AppStyled>
      <Canvas id="canvas" />
      {isTablet ? <Stub /> :
      <SliderWrap>
        <Slider />
      </SliderWrap>}
    </AppStyled>
  );
}

export default App;
