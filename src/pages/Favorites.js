import React from 'react';
import styled from 'styled-components';
import { UseSelector, useSelector } from 'react-redux';
import FavBox from '../components/FavBox';
import { Link } from 'react-router-dom';

const Favorites = () => {
    const favorites = useSelector(state => state.top.fav);
  return (
    <>
        <Main></Main>
        <Container className="main-padd">
            {favorites.length > 0 && favorites.map((fav)=>(
               <FavBox item={fav} />
            ))}
        </Container>
        
        {(favorites.length === 0 || favorites === false) &&
        <EmptyFav className='empty-fav'>
            <p> Your Favorites is empty</p>
            <Link to="/"> Add Products to Favorites </Link>
        </EmptyFav>
        }
      
    </>
  )
}

const Main = styled.main`
  height: 70vh;
  width: 100%;
  background-image: url(/images/background/blog1.webp);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.6);
  }

`
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 20px;
  margin: 30px 0;

  @media(max-width: 1440px){
    grid-template-columns : repeat(3 , 1fr);
  }

  @media(max-width: 768px){
    grid-template-columns : repeat(2 , 1fr);
  }

  @media(max-width: 500px){
    grid-template-columns : repeat(1 , 1fr);
  }

`
const EmptyFav = styled.div`
  width: 100%;
  text-align: center;
  margin: 40px 0;
  font-size: 1.2rem;

  a{
    margin-top: 20px;
  }
`
export default Favorites;