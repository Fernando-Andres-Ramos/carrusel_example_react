import React from 'react'
import Slideshow from './components/Slideshow';
import styles from './styles.css'
import styled from 'styled-components';
const App = () => {
  return (
    <main>
      <Titulo>Productos Destacados</Titulo>
      <Slideshow />
    </main>
  )
};

const Titulo = styled.p`
  font-size:18px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 10px;  
  `

export default App