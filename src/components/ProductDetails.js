import React, { useEffect , useState} from 'react';
import styled from 'styled-components';
import {FaStar} from 'react-icons/fa';
import {useLocation, useNavigate} from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { addToCart } from '../redux/TopSlice';

const ProductDetails = () => {
    const dispatch = useDispatch();
    let [quant , setQuant] = useState(1);
    const [item , setItem] = useState({});
    const userInfo = useSelector(state => state.top.userInfo);
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{
      setItem(location.state.item);
    },[location.state.item])
    
  return (
    <ProductsDetailSection className='main-padd'>
        <Container className='flex-full'>
            <div className='img-container' >
                <img src={ `/${item.image}`} alt={item.name} />
            </div>
            <div className='detailes'>
                <h3> {item.name} </h3>
                <p> $ {item.price} </p>
                <div className='star-icons' style={{"color" : "yellow"}}>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className='quantity-container'>
                    <button onClick={()=> setQuant( quant + 1)}> + </button>
                    <span> {quant} </span>
                    <button onClick={()=> setQuant( quant === 1 ? (quant = 1) : quant - 1)}> - </button>
                </div>
                <button className='add-btn' onClick={()=> userInfo? dispatch(addToCart({
                    id : item.id,
                    name : item.name,
                    image : item.image,
                    price : item.price,
                    quantity : quant,
                }))  : navigate("/register") }
                > Add to Cart </button>
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
                <div>
                    <span> Brand : </span>
                    <span> {item.brand} </span>
                </div>
            </div>
        </Container>
    </ProductsDetailSection>
  )
}

const ProductsDetailSection = styled.section`
  margin: 170px 0 170px 0;
  @media(min-height: 1300px){
    margin: 240px 0 240px 0;
  }
`
const Container = styled.div`
  &.flex-full{
    justify-content: unset;
    gap: 100px;

    @media(max-width: 768px){
      flex-direction: column;
      align-items: center;
      gap: 30px;
    }

    @media(min-height: 1000px){
      flex-direction: column;
      align-items: center;
      gap: 120px;
    }
    @media(min-height: 1300px){
      gap: 150px;
    }
  }

  .img-container{
    width: 400px;
    height: 400px;
    
    @media(max-width: 768px){
      width: 300px;
      height: 300px;
    }
    
    @media(max-width: 320px){
      width: 200px;
      height: 200px;
    }

    img{
      max-width: 100%;
      max-height: 100%;
      display: block;
      margin: auto;
    }
  }

  .detailes{
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 25px;
    
    @media(max-width: 768px){
      width: 100%;
    }

    .quantity-container{
        button{
            padding: 7px;
        }
        span{
            margin: 0 5px;
        }
    }

    .add-btn{
        padding: 7px 10px;
        border-radius: 10px;
        background-color: black;
        color: white;

        &:hover{
            opacity: 0.7;
        }
    }
  }
`
export default ProductDetails;