import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductBox from './ProductBox';
import laptops from '../api/productApi';

const Product = () => {
  const [data , setData] = useState([]);

  // pagination
  const items = 8;
  let [current , setCurrent] = useState(1);
  let pageNumber = Math.ceil(data.length / items);
  let startIndex = (current - 1) + items;
  let endIndex = startIndex + items;
  let dataPerPage = data.slice(startIndex, endIndex);

  useEffect(()=>{
    setData(laptops);
  })

  return (
    <ProductSection className='main-padd'>
        <h3> Shopping everyday </h3>
        <span></span>
        <ProductsContainer className=''>
            {
              dataPerPage?.map((product)=> (
                
                (<ProductBox  product={product}/>)
                
              )
                             
              )
            }
        </ProductsContainer>
        <div className='pags'>
          {
            Array.from({length: pageNumber} , (_,i) => i + 1).map( page => {
              return <button onClick={()=> setCurrent(page)}> {page} </button>
            })
          }
        </div> 
    </ProductSection>
  )
}

const ProductSection = styled.section`
  padding-top: 50px;
  padding-bottom: 50px;

  h3 , span{
    text-align: center;
  }

  h3{
    @media(max-width: 425px){
      font-size: 16px;
    }
  } 
   
  span{
    background-color: black;
    color: black;
    width: 50px;
    height: 5px;
  }

  .pags{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    margin-top: 25px;

    button{
      padding: 5px;
      background-color: blue;
      color: white;
    }
  }
`
const ProductsContainer = styled.div`
  

  display: grid;
  grid-template-columns : repeat(4 , 1fr);
  gap: 20px;
  margin-top: 30px;

  @media(max-width: 1440px){
    grid-template-columns : repeat(3 , 1fr);
  }

  @media(max-width: 768px){
    grid-template-columns : repeat(2 , 1fr);
  }

  @media(max-width: 500px){
    grid-template-columns : repeat(1 , 1fr);
  }
`

export default Product