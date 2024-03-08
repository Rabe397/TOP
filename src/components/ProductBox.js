import React from 'react'
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import { useDispatch  , useSelector} from 'react-redux';
import { addToCart, addToFav , checkFav} from '../redux/TopSlice';
import { ToastContainer, toast } from 'react-toastify';
import {FaHeart} from 'react-icons/fa';

const ProductBox = ({product}) => {
  const dispatch = useDispatch();
  const fav = useSelector(state => state.top.fav);
  const userInfo = useSelector(state => state.top.userInfo);
  let addedToFav = fav.find(item => item.id === product.id);
  const navigate = useNavigate();
  
  const _id = product.name;
  const idString = (_id)=>{
    return String(_id).toLowerCase().split(" ").join("");
  }
  const idRoot = idString(_id);
  
  const hundleProduct = ()=>{
    navigate(`/ProductDetailes/${idRoot}` ,
    {
      state : {
        item : product,
      }
    })
}


  return (
    <ProductBoxContainer>
      <div className='img-container' onClick={hundleProduct}>
        <img src={product.image} alt={product.name} />
      </div>
      <div className='product-info flex-full'>
        <p> {product.name} </p>
        <p className='price'> ${product.price} </p>
      </div>
      <p className='cate'> {product.brand} </p>
      <div className="btns flex-full">
        <button className='add-to-cart' onClick={()=> userInfo? dispatch(addToCart({
      id: product.id,
      name: product.name,
      image: product.image,
      price: product.price,
      quantity: 1,
      })) : navigate("/register")}> Add to cart 
        </button>
        <StyleHeart addedToFav={addedToFav ? true : false} onClick={()=> userInfo? dispatch(addToFav({
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity: product.quantity,
        })) & toast.success(`${product.name} is added to Fav`) : navigate("/register")}></StyleHeart>
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
    </ProductBoxContainer>
  )
}

const ProductBoxContainer = styled.div`
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
  color: ${(props) => props.addedToFav ? "red" :" rgb(240,240,240)"};
  font-size: 1.3rem;
`

export default ProductBox;