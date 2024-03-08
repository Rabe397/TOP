import React, { useState } from 'react';
import styled from 'styled-components';
import {FaArrowLeft , FaArrowRight} from 'react-icons/fa';

const Banar = () => {
    const [currSlide , setCurrSlide] = useState(0)
    const prevSlide = ()=>{
      setCurrSlide(currSlide === 0 ? 2 : currSlide - 1)
    }

    const nextSlide = ()=>{
      setCurrSlide(currSlide === 2 ? 0 : currSlide + 1)
    }
    const images = [
        "/images/background/blog1.webp",
        "/images/background/blog2.webp",
        "/images/background/background1.webp",
    ]

  return (
    <BanarSection>
      <Container>
        <div className="images-container flex-full">
          <img src={images[currSlide]}  alt='banar-1' />    
        </div>
        <div className='arrows-container flex-full'>
          <div className='left' onClick={prevSlide}>
            <FaArrowLeft />
          </div>
          <div className='right' onClick={nextSlide}>
            <FaArrowRight />
          </div>
        </div>
      </Container>
    </BanarSection>
  )
}

const BanarSection = styled.section`
  margin-top: 50px;
`
const Container = styled.div`
  .images-container{
    min-width: 100vw;
    height: calc(100vh - 110px);
    overflow-x : hidden;
    
    img{
      min-width: 100vw;
      height: 100%;
      overflow-x : hidden;
    }
  }

  .arrows-container.flex-full{
    justify-content: center;
    position: absolute;
    bottom: 100px;
    left: 50%;
    transform : translatex(-50%);
    div{
      padding: 10px;
      border: 1px solid black;
      margin: 0 5px;
      cursor: pointer;
      display: flex;
      align-items: center;

      @media(max-width: 768px){
        padding: 1.5px;
      }
      &:hover{
        background-color: black;
        color: white;
        transition: 0.3s;
      }
    }
  }
`

export default Banar;