import React from 'react'

import {ReactComponent as FlechaIzquierda} from '../img/iconmonstr-arrow-left-lined.svg'
import {ReactComponent as FlechaDerecha} from '../img/iconmonstr-arrow-right-lined.svg'
import styled from 'styled-components';
import { useRef, useEffect,useCallback } from 'react'


const Slideshow = ({
  children,
  controles= true, 
  tiempoIntervalo= 5000, 
  autoplay = true, 
  velocidad = 300
  }) => {
  const slideShow = useRef(null)

  const siguiente = useCallback (()=>{
    //Compruebo que el slideshow tenga elementos
    if(slideShow.current.children.length > 0){
      //Capturo el primer elemento
      const primerElemento = slideShow.current.children[0];
      //Agrego una transición
      slideShow.current.style.transition = `${velocidad}ms ease-out all`;
  
      //Capturo el tamaño de ancho del slideShow
      const tamañoSlide =  slideShow.current.children[0].offsetWidth;
      //Mover el slideshow
      slideShow.current.style.transform = `translateX(${-tamañoSlide}px)`
  
      const transicion = () => {
        //Reinicio la posición
        slideShow.current.style.transition = `none`;
        slideShow.current.style.transform = `translateX(0)`;
        //Muevo el primer elemento del slideshow hacia el final
        slideShow.current.appendChild(primerElemento);
        slideShow.current.removeEventListener('transitionend',transicion);
      }
      slideShow.current.addEventListener('transitionend',transicion);
    }
  },[velocidad]);

  const anterior = () => {
    if(slideShow.current.children.length>0){
      //Obtener ultimo elemento
      const index = slideShow.current.children.length -1;
      const ultimoElement = slideShow.current.children[index]
      slideShow.current.insertBefore(ultimoElement,slideShow.current.firstChild)

      //Agrego una transición
      slideShow.current.style.transition = `none`;

      //Capturo el tamaño de ancho del slideShow
      const tamañoSlide =  slideShow.current.children[0].offsetWidth;
      //Mover el slideshow
      slideShow.current.style.transform = `translateX(-${tamañoSlide}px)`;

      setTimeout(()=>{
        slideShow.current.style.transition = `${velocidad}ms ease-out all`;
        slideShow.current.style.transform = `translateX(0)`
      },50)
    }
  }

  useEffect(()=>{
    if(autoplay){
      let intervalo = setInterval(()=>{
        siguiente();
      },tiempoIntervalo);
  
      //Eliminar intervalos
  
      slideShow.current.addEventListener('mouseenter',()=>{
        clearInterval(intervalo);
      });
  
      slideShow.current.addEventListener('mouseleave',()=>{
        intervalo = setInterval(()=>{
          siguiente();
        },tiempoIntervalo);
      });
      
    }

    //Agrega intervalos
  },[autoplay,tiempoIntervalo,siguiente]);

  return(
    <ContenedorPrincipal>
      <ContenedorSlide ref={slideShow}>
        {children}
      </ContenedorSlide>
      {controles && <ControlesSlide>
        <Boton onClick={anterior}>
          <FlechaIzquierda />
        </Boton>
        <Boton derecho onClick={siguiente}>
          <FlechaDerecha />
        </Boton>
      </ControlesSlide>}
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


export {Slideshow,Slide,TextoSlide}
