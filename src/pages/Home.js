import React, { useEffect, useState } from 'react'
import Banar from '../components/Banar'
import Product from '../components/Product'
import laptops from '../api/productApi';
import axios from 'axios';

const Home = () => {
  
  const [productData , setProductData] = useState([]);
  useEffect(()=>{
    setProductData(laptops)
  },[])
  
  return (
    <div>
        <Banar />
        <Product/>
    </div>
  )
}

export default Home