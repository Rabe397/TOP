import React from 'react';
import styled from 'styled-components';
import {FaFacebookF , FaLinkedin , FaWhatsapp , FaGithub} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <FooterSection className='main-padd'>
        <Container className='flex-full'>
            <div className='start'>
                <h2 className='footer-brand'> TOP </h2>
                <div className='social-media'>
                    <Link to='https://www.facebook.com/rabie.khalifa'> <FaFacebookF /> </Link>
                    <Link to='https://github.com/Rabee397'> <FaGithub />    </Link>
                    <Link to='https://wa.me/+249113583477/?text='> <FaWhatsapp />  </Link>
                    <Link to='https://www.linkedin.com/in/rabee-khalifa-0a0630281'> <FaLinkedin />  </Link>
                </div>
            </div>
            <div className='second'>
                <h3> Contact </h3>
                <p> Email : rabie201097_1_11@hotmail.com </p>
                <p> Phone : +249113583477 </p>
            </div>
            <div className='third'>
                <h3> Profile </h3>
                <p> My account </p>
                <p> Checkout </p>
                <p> Order tracking </p>
                <p> Help & support </p>
            </div>
            <div className='last'>
                <input type='email' placeholder='Email' />
                <button> Subscribe </button>
            </div>
        </Container>
        <p> Developed by Rabee 2024 </p>
    </FooterSection>
  )
}

const FooterSection = styled.section`
  background-color: black;
  color: white;
  
  &>p{
    text-align: center;
    padding: 4px 0;
  }
`
const Container = styled.div`
  padding: 20px 0;

  &.flex-full{
    align-items: flex-start;
    gap: 10px;
    flex-wrap: wrap;
  }

  div{

    h3 , h2{
        padding-bottom: 10px;
    }

    p{
      padding-top: 5px;
      color: rgb(100 , 100 , 100);
    }
  }
   
  .start {

    @media(max-width: 425px){
      .footer-brand{
        font-size: 0.9rem;
      }
    }

    .social-media{

        a{
            margin-left: 8px;
        }

        a:first-child{
            margin-left: 0;
        }
    }
  }

  .second , .third{
    p{
      @media(max-width: 320px){
        font-size: 0.6rem;
      }
    }

    h3{
      @media(max-width: 425px){
          font-size: 0.9rem;
      }
    }
  }
  .last{

    input{
        outline: none;
        background-color: transparent;
        padding: 4px;
        color: white;

        @media(max-width: 320px){
          padding: 2px 1px;
          font-size: 0.7rem;
          width: 70%;
        }
        @media(max-width: 250px){
          width: 100%;
        }
    }

    button{
        padding: 4px;

        @media(max-width: 320px){
          padding: 2px 1px;
          font-size: 0.7rem;
        }
        @media(max-width: 250px){
          text-align: center;
          display: block;
          margin: 4px auto;
        }
  }
  
   


`

export default Footer;