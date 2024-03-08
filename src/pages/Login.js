import React , {useState} from 'react';
import styled from 'styled-components';
import {signInWithEmailAndPassword,  signOut} from 'firebase/auth';
import { auth } from '../firebase';
import {toast , ToastContainer} from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/TopSlice';
import {Link, useNavigate} from 'react-router-dom';
import GoogleLogin from '../components/GoogleLogin';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData , setFormData] = useState({
    email:"",
    password:"",
  })
  const {email , password} = formData;

  function onChangeInput(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id] : e.target.value
    }))
  }
  
  const hundleSignIn = async ()=>{
    try{
      const userCredential = await signInWithEmailAndPassword(auth,email,password);
      const user = userCredential.user;
      if(user){
        dispatch(addUser({
          id : user.uid,
          name : user.name,
          email : user.email,
          image : user.photoURL,
        }));
        setTimeout(()=>{
          navigate("/");
        },1500)
      }
    }catch(error){
      toast.error("Invalid Email or Password");
    }
  }
  
  
  return (
    <LoginSection>
        <Container>
            <input type="email" id="email" value={email} placeholder=' email' onChange={onChangeInput}/>
            <input type="password" id="password" value={password} placeholder=' password' onChange={onChangeInput}/>
            <div className="no-account flex-full">
              <span> Don't have an account? </span>
              <Link to="/register"> Register </Link>
            </div>
            <button className="sign-in-btn" onClick={hundleSignIn}> SIGN IN </button>
            <p> OR </p>
            <GoogleLogin />
        </Container>
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
    </LoginSection>
  )
}

const LoginSection = styled.section`
  margin: 252px 0 171px 0;
  display : flex;
  justify-content: center;
`
const Container = styled.div`
  width: 50%;
  margin: auto;

  input{
    display: block;
    width: 100%;
    padding: 10px;
    margin: 8px 0;
  }

  .no-account.flex-full{
    justify-content: unset;
    align-items: center;
    gap:5px;

    a{
      color: red;
    }
  }

  .sign-in-btn{
    background-color: blue;
    color: white;
    width: 100%;
    padding: 10px;
    margin: 8px 0;
  }
`


export default Login;