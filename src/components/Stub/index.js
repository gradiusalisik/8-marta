import React from 'react'
import styled from 'styled-components'

const Styled = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  text-align: center;
`
const Title = styled.h1`
  font-size: 40px;
  color: white;
`

const Text = styled.p`
  color: white;
  font-size: 20px;
`

const Stub = () => {
  return (
    <Styled>
      <Title>С Днём Рождения, ICWT</Title>
      <Text>Перейдите на ПК, чтобы открыть ящик пандоры</Text>
    </Styled>
  )
}

export default Stub;
