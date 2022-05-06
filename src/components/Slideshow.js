import React from 'react'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import {ReactComponent as FlechaIzquierda} from '../img/iconmonstr-arrow-left-lined.svg'
import {ReactComponent as FlechaDerecha} from '../img/iconmonstr-arrow-right-lined.svg'
import styled from 'styled-components';


const Slideshow = () =>{
  return(
    <ContenedorPrincipal>
      <ContenedorSlide>
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
      </ContenedorSlide>
      <ControlesSlide>
        <Boton>
          <FlechaIzquierda />
        </Boton>
        <Boton derecho>
          <FlechaDerecha />
        </Boton>
      </ControlesSlide>
    </ContenedorPrincipal>
  )
}

const ContenedorPrincipal = styled.div`
  position: relative;
`;

const ContenedorSlide = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Slide = styled.div`
  min-width: 100%;
  overflow:hidden;
  transition:.3s ease all;
  z-index: 10;
  max-height: 500px;
  position:relative;
  img{
    width:100%;
    vertical-align:top;
  }
`;

const TextoSlide = styled.div`
  background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.3)'};
  color: ${props => props.colorTexto? props.colorTexto : 'white'};
  color:white;
  width:100%;
  padding: 10px 60px;
  text-align:center;
  position:absolute;
  bottom:0;

  @media screen and (max-width:700px){
    position:relative;
    background:black;
  }


`;

const ControlesSlide = styled.div`
  position: absolute;
  top:0;
  z-index:20;
  width:100%;
  height:100%;
  pointer-events:none;
`;

const Boton = styled.button`
  pointer-events:all;
  background:none;
  border:none;
  cursor:pointer;
  outline:none;
  width: 50px;
  height:100%;
  text-align:center;
  position:absolute;
  transition: .3s ease all;
  &:hover{
    background:rgba(0,0,0,.2);
    path{
      fill:#fff;
    }
  }

  ${props => props.derecho ? 'right:0' : 'left:0'}
`;


export default Slideshow
