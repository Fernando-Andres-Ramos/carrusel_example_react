import React from 'react'
import {Slideshow, Slide, TextoSlide} from './components/Slideshow';
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import styles from './styles.css'
import styled from 'styled-components';
const App = () => {
  return (
    <main>
      <Titulo>Productos Destacados</Titulo>
      <Slideshow controles={true} tiempoIntervalo={5000} autoplay={true} velocidad={300}>
        <Slide>
            <a href="https://www.facebook.com/fernando.ramos.3152" rel="noreferrer" target="_blank">
              <img src={img1} alt="img"></img>
            </a>
            <TextoSlide  colorFondo="rgba(0,0,0,.3)" colorTexto="white">
              <p>15% de descuento</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <a href="https://www.facebook.com/fernando.ramos.3152" rel="noreferrer" target="_blank">
              <img src={img2} alt="img"></img>
            </a>
            <TextoSlide>
              <p>15% de descuento</p>
            </TextoSlide>
          </Slide>
          <Slide>
            <a href="https://www.facebook.com/fernando.ramos.3152" rel="noreferrer" target="_blank">
              <img src={img3} alt="img"></img>
            </a>
            <TextoSlide>
              <p>15% de descuento</p>
            </TextoSlide>
          </Slide>
      </Slideshow>
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