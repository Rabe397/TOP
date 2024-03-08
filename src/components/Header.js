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
        <TopHeader className='main-padd flex-full'>
                <Link to='/' style={{"display" : "block"}}> 
                  <h2 className='brand'> TOP </h2>
                </Link>
                <nav className={mob ? "nav-mob flex-full" : "nav flex-full"}>
                  
                  <Link to='/'> Home </Link>
                  <Link to='/fav'> Favorites </Link>
                  <Link to=''> Shop </Link>
                  <Link to=''> Element </Link>
                  <Link to=''> Blog </Link>
                </nav>
                <div className='cart'>
                  <Link to='/cart'>
                    <FaShoppingCart style={{"width" : "30px" , "height" : "30px"}}/>
                    <span> {productData && productData.length} </span>
                  </Link>
                </div>
                {
                  userInfo && (
                    <>
                      <p className='user-name'> {userInfo.email} </p>
                      <Link onClick={hundleSignOut} className='log-out'> Logout </Link>
                    </>)
                  
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
  z-index: 10;
  padding-top: 7px;
  padding-bottom: 7px;
  
  .nav{
    gap: 10px;
    width: 40%;

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

  .cart{
    position: relative;
    span{
        position: absolute;
        top: 3.7px;
        left: 45%;
        color: white;
    }
  }

  .user-img{
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  
  @media(max-width: 470px){
    &{
      padding-left : 0.5rem;
      padding-right : 0.5rem; 
    }
    .brand{
      font-size: 16px;
    }
    .user-name , .log-out{
      font-size: 0.6rem;
    }
    .user-img{
      width: 13px;
      height: 13px;
    }
  }

  @media(max-width: 320px){
    .user-name , .log-out{
      font-size: 0.5rem;
    }
    .user-img{
      display: none;
    }
  }
  
`

const MobMode = styled.div`
  display: none;

  @media(max-width: 768px){
    display: flex;
  }
`
export default Header;