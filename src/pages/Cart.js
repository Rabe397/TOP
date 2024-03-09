import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Link , useNavigate} from 'react-router-dom';
import ProductCart from '../components/ProductCart';
import { useDispatch, useSelector } from 'react-redux';
import { resetCart } from '../redux/TopSlice';
import { ToastContainer, toast } from 'react-toastify';


const Cart = () => {
  const productData = useSelector((state)=> state.top.productData);
  const userInfo = useSelector((state) => state.top.userInfo);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let [totalAmount , setTotalAmount] = useState('');
  useEffect(()=>{
    let total = 0;
    productData.map((item)=>{
      total += item.price * item.quantity;
      return total;
    })
    setTotalAmount(total.toFixed(2));
  },[productData])
  
  

  
  
  return (
    <CartSection className=''>
       <div className='img-container'>
        <img src='/images/background/blog2.webp' alt='' />
       </div>
       {productData.length < 1 ? (<p className='no-product'> There is no item on Cart </p>)
        :(
          <Container className='flex-full main-padd'>
            <ProductSide>
              <ProductCart />
              <button className='reset-btn' onClick={()=> dispatch(resetCart()) & toast.error('Your cart is empty')}> Reset Cart </button>
              <div>
                <Link to='/'> Go shopping </Link>
              </div>
            </ProductSide>
            <CartCheckoutSide>
                <h3> Cart Total </h3>
                <div className='subtotal'>
                    <span> Subtotal </span>
                    <span> $ {totalAmount} </span>
                    <hr/>
                    <div className='total flex-full'>
                        <span> Total </span>
                        <span>  $ {totalAmount} </span>
                    </div>
                    <button className='checkout-btn'> proceed to checkout </button>
                    
                </div>
            </CartCheckoutSide>
          </Container>
        )
       }
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
    </CartSection>
  )
}

const CartSection = styled.section`
  margin: 0 0 70px 0;

  .img-container{
    height: 70vh;
    padding: 0;
    margin-bottom: 70px;

    img{
      width: 100%;
      height: 100%;
      display: block;
      padding: 0;
    }
  }

  .no-product{
    text-align: center;
    
    font-size: 1.7rem;
    color: rgb(180,0,0);
  }
`
const Container = styled.div`
  &.flex-full{
    align-items: flex-start;

    @media(max-width: 900px){
      flex-direction: column;
    }
  }

  @media(max-width: 425px){
    padding: 0px 0.5rem;
  }
`
const ProductSide = styled.div`
  width: 70%;
  
  @media(max-width: 900px){
    width: 100%;
  }
  
  
  .reset-btn{
    background-color: red;
    color: white;
    padding: 10px 15px;
    margin: 15px 0;

    @media(max-width: 375px){
      padding: 5px 10px;
      font-size: 0.7rem;
    }
  }
`
const CartCheckoutSide = styled.div`
  background-color: rgb( 240 , 240 , 244);
  padding: 15px;
  width: 20%;
  
  @media(max-width: 900px){
    width: 40%;
    margin-top: 20px;
  }
  @media(max-width: 375px){
    width: 75%;
    font-size: 0.8rem;
  }

  .subtotal , .total{
    margin: 10px 0;
  }
  .checkout-btn{
    background-color: black;
    color: white;
    width: 100%;
    padding: 10px 0;
    margin-top: 10px;
  }
`

export default Cart;