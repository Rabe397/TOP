import React from 'react'
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { removeFromFav } from '../redux/TopSlice';
import { ToastContainer, toast } from 'react-toastify';
import {FaHeart} from 'react-icons/fa';

const FavBox = ({item}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  
  return (
    <FavBoxContainer>
      <div className='img-container'>
        <img src={item.image} alt={item.name} />
      </div>
      <div className='product-info flex-full'>
        <p> {item.name} </p>
        <p className='price'> {item.price} </p>
      </div>
      <p className='cate'> {item.brand} </p>
      <div className="btns flex-full">
        <StyleHeart onClick={()=> dispatch(removeFromFav(item.id)) & toast.error(`${item.name} is removed from Fav`)}></StyleHeart>
      </div>
      
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </FavBoxContainer>
  )
}

const FavBoxContainer = styled.div`
  border: 1px solid black;
  padding: 10px;
  position: relative;

  .img-container{
    width: 250px;
    height: 150px;
    margin: auto;
    padding-bottom: 10px;

    @media(max-width: 920px){
      width: 200px;
    }

    @media(max-width: 768px){
      width: 120px;
      height: 120px;
    }

    img{
      display: block;
      max-width: 100%;
      height: 100%;
      margin: auto;
    }
  }

  .product-info{
   padding-bottom: 15px;
   
   @media(max-width: 320px){
    font-size: 0.8rem;
   }

   &.flex-full{
    @media(max-width: 260px){
      flex-direction: column;
      gap: 15px;
      text-align: center;
    }
   }
   p:first-child{
    max-width: 80%;
   }
   
  }

  .cate{
    padding: 0px 0 13px 0;
    margin-bottom: 18px;

    @media(max-width: 260px){
      text-align: center;
    }
  }

  .add-to-cart{
    padding: 5px 10px;
    border-radius: 10px;
    color: white;
    background-color: black;

    @media(max-width: 250px){
      padding: 3px 6px;
      border-radius: 6px;
      font-size: 0.7rem;
    }
  }


`
const StyleHeart = styled(FaHeart)`
  color: red;
  font-size: 1.3rem;
`
export default FavBox;