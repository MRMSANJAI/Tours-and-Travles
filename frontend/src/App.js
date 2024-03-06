import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route}from 'react-router-dom';
import Shop from './Pages/Shop';
import Shopcategory from './Pages/Shopcategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/'element={<Shop/>}/>
      <Route path='/Mens'element={<Shopcategory category="men"/>}/>
      <Route path='/Women'element={<Shopcategory category="women"/>}/>
      <Route path='/Kids'element={<Shopcategory category="kid"/>}/>
      <Route path='/Product'element={<Product/>}>
       <Route path=':productID'element={<Product/>}/>
     </Route>
     <Route path='/cart'element={<Cart/>}/>
     <Route path='/login'element={<LoginSignup/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
