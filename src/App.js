import React from 'react' ;
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import "./App.css" ;
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import ProductDetails from './components/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import SignUp from './pages/SignUp';
 
function App() {
    
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
          <Route path='/ProductDetailes/:id' element={
            <>
              <Header />
              <ProductDetails />
              <Footer />
            </>
            }
          />
          <Route path='/cart' element={
            <>
              <Header />
              <Cart />
              <Footer />
            </>
           }
          />
          <Route path='/login' element={
            <>
              <Header />
              <Login />
              <Footer />
            </>
          }/>
          <Route path='/register' element={
            <>
              <Header />
              <SignUp />
              <Footer />
            </>
          }/>   
          <Route path='/fav' element={
            <>
              <Header />
              <Favorites />
              <Footer />
            </>
          
          }/>
        </Routes>
        
         
      </BrowserRouter>

  )
}

export default App;

