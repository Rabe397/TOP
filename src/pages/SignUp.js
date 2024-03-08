import React , {useState} from 'react';
import styled from 'styled-components';
import {createUserWithEmailAndPassword,  signOut} from 'firebase/auth';
import { auth } from '../firebase';
import {toast , ToastContainer} from 'react-toastify';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/TopSlice';
import {Link, useNavigate} from 'react-router-dom';
import GoogleLogin from '../components/GoogleLogin';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData , setFormData] = useState({
    name:"",
    email:"",
    password:"",
  })
  const {name, email , password} = formData;

  function onChangeInput(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id] : e.target.value
    }))
  }
  
  const onCreateUser = async ()=>{
    try{
        const userCredential = await createUserWithEmailAndPassword(auth,email,password);
        const user = userCredential.user;
        console.log(user)
        dispatch(addUser({
            id : user.uid,
            name : user.name,
            email : user.email,
            image : user.photoURL,
          }));
          setTimeout(()=>{
            navigate("/");
          },1500)
    }catch(error){
        toast.error("Something Went Wrong!");
    }
  }

  
  
  return (
    <SignUpSection>
        <Container>
        <input type="text" id="name" value={name} placeholder=' name' onChange={onChangeInput}/>
            <input type="email" id="email" value={email} placeholder=' email' onChange={onChangeInput}/>
            <input type="password" id="password" value={password} placeholder=' password' onChange={onChangeInput}/>
            <div className="have-account flex-full">
              <span> have an account? </span>
              <Link to="/login"> Log In </Link>
            </div>
            <button className="sign-up-btn" onClick={onCreateUser}> SIGN UP </button>
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
    </SignUpSection>
  )
}

const SignUpSection = styled.section`
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

  .have-account.flex-full{
    justify-content: unset;
    align-items: center;
    gap:5px;

    a{
      color: red;
    }
  }

  .sign-up-btn{
    background-color: blue;
    color: white;
    width: 100%;
    padding: 10px;
    margin: 8px 0;
  }
`


export default SignUp;