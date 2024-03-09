import React, { useState } from 'react';
import styled from 'styled-components';
import {FaArrowLeft , FaArrowRight} from 'react-icons/fa';

const Banar = () => {
 
  return (
    <BanarSection>
      <Container>
        <div className="images-container flex-full">
          <img src="/images/background/background1.webp"  alt='banar-1' />
          <div className="hero">
            <h2> Best Place To Buy Laptop </h2>
            <div className="btns">
              <button className="btn btn-1"> Learn More </button>
              <button className="btn btn-2"> Shop Now </button>
            </div>
          </div>    
        </div>
      </Container>
    </BanarSection>
  )
}

const BanarSection = styled.section`
  
`
const Container = styled.div`
  .images-container{
    min-width: 100vw;
    height: 100vh;
    overflow-x : hidden;
    position: relative;

    &:before{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0,0,0,0.7);
    }
    img{
      min-width: 100vw;
      height: 100%;
      overflow-x : hidden;
    }
    
    .hero{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      text-align: center;
      color: white;

      .btns{
        margin-top: 20px;

        .btn{
          padding: 10px 15px;
          border-radius: 8px;
        }

        .btn-2{
          background-color: rgb(0, 50,100);
          color: white;
          margin-left: 5px;
        }
      }
    }
  }

`

export default Banar;