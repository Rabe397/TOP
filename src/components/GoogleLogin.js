import React from 'react'
import {FaGoogle} from 'react-icons/fa';
import styled from 'styled-components';
import {signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/TopSlice';
import {useNavigate} from 'react-router-dom';

const GoogleLogin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const hundleGoogleLogin = (e)=>{
        e.preventDefault();
        signInWithPopup(auth , provider)
        .then((result)=>{
          const user = result.user;
          
          dispatch(addUser({
            id : user.uid,
            name : user.displayName,
            email : user.email,
            image : user.photoURL,
          }));
          setTimeout(()=>{
            navigate("/");
          },1500)
        }).catch((error)=>{
          alert(error);
        })
      }
  return (
    <Container>
        <button className='google-btn flex-full' onClick={hundleGoogleLogin}>
            <FaGoogle />
            <span> Sign in with Google </span>
        </button>
    </Container>
  )
}

const Container = styled.form`

  .google-btn{
    background-color: tomato;
    color: white;
    width: 100%;
    padding: 10px;
    margin-top: 10px;

    &.flex-full{
      justify-content: center;
      align-items: center;
      gap:5px;
    }
  }
`
export default GoogleLogin