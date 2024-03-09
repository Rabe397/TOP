import React, { useState } from 'react';
import {Link , useLocation} from 'react-router-dom';
import {FaShoppingCart , FaBars , FaTimes} from 'react-icons/fa';
import styled from 'styled-components';
import {useDispatch, useSelector} from 'react-redux';
import { removeUser } from '../redux/TopSlice';
import {toast , ToastContainer} from 'react-toastify';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

const Header = ()=>{
    const [mob , isMob] = useState(false);
    const productData = useSelector((state) => state.top.productData);
    const userInfo = useSelector((state) => state.top.userInfo);
    const dispatch = useDispatch();
    const location = useLocation();
    
    const hundleSignOut = ()=>{
      signOut(auth)
      .then(()=>{
        toast.success("Log out successfully");
        dispatch(removeUser());
      })
      .catch((error)=>{
        toast.error("Something Went Wrong");
      })
    }
    return(
        <TopHeader className='main-padd '>
          <div className="container flex-full">
            <Link to='/' style={{"display" : "block"}}> 
              <h2 className='brand'> TOP </h2>
            </Link>
            <nav className={mob ? "nav-mob flex-full" : "nav flex-full"}>
              <Link to='/'> Home </Link>
              <Link to='/fav'> Favorites </Link>
              <Link to='/cart'> Orders </Link>
            </nav>
            <div className='cart'>
              <Link to='/cart'>
                <ShoppingCartIcon></ShoppingCartIcon>
                <span> {productData && productData.length} </span>
              </Link>
            </div>
              {
               userInfo && (
                <div className="flex-full email-logout">
                  <p className='user-name'> {userInfo.email} </p>
                  <Link onClick={hundleSignOut} className='log-out'> Logout </Link>
                </div>)
              
              }
              {
               !userInfo &&(
               location.pathname ==="/register" && !userInfo ? 
                 (<Link to='/login'> Login </Link>)
               : 
                 (<Link to='/register'> Sign Up </Link>))
                }
               
              
              <MobMode onClick={()=> isMob(!mob)}>
              { mob ? <FaTimes className='fa-bars'/> : <FaBars /> }
                </MobMode> 
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
        </TopHeader>
    )
}

const TopHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid black;
  background-color: white;
  z-index: 100;
  padding-top: 7px;
  padding-bottom: 7px;
  
  .nav{
    gap: 10px;
    width: 30%;

    @media(max-width:768px){
       display: none;
    }
    
  }

  .nav-mob{
      
    @media(max-width: 768px){
      position: fixed;
      top: 50px;
      right: 2rem;
      width: 200px;
      flex-direction: column;
      gap: 15px;
      background-color: rgb(0 , 80 , 80);
      color: white;
      z-index: 100;
      padding: 15px 0;
    }
    @media(max-width: 260px){
      right: 0;
      width: 100%;
    }
   }
  

  

  a:hover{
    color: orange;
    text-decoration: underline;
  }

  .brand{
    @media(max-width: 320px){
      font-size: 1.2rem;
    }
    
  }

  .cart{
    display: flex;
    align-items: center;
    position: relative;

    span{
        position: absolute;
        top: 4.8px;
        left: 52%;
        color: white;
        font-size: 0.6rem;

        @media(max-width: 320px){
          top: 2px;
          font-size: 0.5rem;
          left: 45%;
        }
    }
  }

  .email-logout.flex-full{
    gap: 25px;
    @media(max-width: 320px){
      gap: 5px;
    }
  }
  
  @media(max-width: 470px){
    &{
      padding-left : 0.5rem;
      padding-right : 0.5rem; 
    }

    .user-name , .log-out{
      font-size: 0.6rem;
    }

  }

  @media(max-width: 320px){
    .user-name , .log-out{
      font-size: 0.5rem;
    }

  }
  
`

const MobMode = styled.div`
  display: none;

  @media(max-width: 768px){
    display: flex;
  }
`
const ShoppingCartIcon = styled(FaShoppingCart)`
  
  width: 30px ;
  height: 30px;
  
  @media(max-width: 768px){
    width: 25px ;
    height: 25px;
  }
  @media(max-width: 320px){
    width: 15px ;
    height: 15px;
  }
`

export default Header;