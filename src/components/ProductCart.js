import React from 'react';
import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import { useDispatch , useSelector} from 'react-redux';
import { decreamentQuantity, increamentQuantity, removeFromCart } from '../redux/TopSlice';
import { ToastContainer, toast } from 'react-toastify';

const ProductCart = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state)=> state.top.productData);

  return (
    
    <>
      {
        productData.map((product)=>(
            <ProductCartBox className='flex-full' key={product.id}>
              <FaTimes onClick={()=> dispatch(removeFromCart(product.id)) & toast.error(`${product.name} is removed`)}/>
              <img src={product.image} alt={product.name} />
              <p className='tit'> {product.name} </p>
              <span className='price'> $ {product.price} </span>
              <div className='quantity-box'>
                <button onClick={()=> dispatch(decreamentQuantity(product.id))}> - </button>
                <span className='product-q'> {product.quantity} </span>
                <button onClick={()=> dispatch(increamentQuantity(product.id))}> + </button>
              </div>
              <div className='pro-subtotal'>
                 $ {Number(`${product.quantity * product.price}`).toFixed(2)}
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
            </ProductCartBox>
        ))
      }
    </>

      
        
  )
}

const ProductCartBox = styled.div`
  margin-bottom: 30px;

  img{
    height: 100px;
    width: 100px;

    @media(max-width: 600px){
      height: 30px;
      width: 30px;
    }
    @media(max-width: 300px){
      height: 20px;
      width: 20px;
    }
  }

  
  .tit{
    width: 40%;

    @media(max-width: 500px){
      width: 30%;
    }
    @media(max-width: 375px){
      font-size: 0.7rem;
    }
    @media(max-width: 300px){
      font-size: 0.5rem;
    }
  }

  .product-q , .price , .pro-subtotal{
    @media(max-width: 375px){
      font-size: 0.7rem;
    }
    @media(max-width: 300px){
      font-size: 0.5rem;
    }
  }
  .quantity-box button{
    @media(max-width: 375px){
      width: 0.7rem;
    }
    @media(max-width: 300px){
      width: 0.5rem;
    }
  }
`
export default ProductCart;