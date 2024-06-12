// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header1 from './components/Header1';
import ProductItems from './components/ProductItems';
import WomenSection from './components/WomenSection';
import MenSection from './components/MenSection';
import KidSection from './components/KidSection';
import Footer from './components/Footer';
import Home from './components/Home';
import Home1 from './components/Home1';
import Register from './components/Register';
import FirstPage from './components/FirstPage';
import Login from './components/Login';
const productwomen = [
  {
    image: 'src/assets/suit1.jpeg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'src/assets/suit3.jpg',
    name: 'Dress',
    price: '$15.99',
    originalPrice: '$25.99',
    discount: '30% Off',
  },
  {
    image: 'src/assets/suit5.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'src/assets/suit6.jpeg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image:  'src/assets/top5.jpeg',
    name: 'Dress',
    price: '$15.99',
    originalPrice: '$25.99',
    discount: '30% Off',
  },
  {
    image: 'src/assets/saree.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'src/assets/top12.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'src/assets/kurti2.jpeg',
    name: 'Dress',
    price: '$15.99',
    originalPrice: '$25.99',
    discount: '30% Off',
  },
  {
    image: 'src/assets/kurti11.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },

  {
    image: 'src/assets/top12.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'src/assets/tshirt.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'src/assets/top11.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'src/assets/saree3.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  }
 ,
 {
  image: 'src/assets/saree4.jpg',
  name: 'Saree',
  price: '$10.99',
  originalPrice: '$20.99',
  discount: '20% Off',
},
{
  image: 'src/assets/saree5.jpg',
  name: 'Saree',
  price: '$10.99',
  originalPrice: '$20.99',
  discount: '20% Off',
},
{
  image: 'src/assets/saree6.jpg',
  name: 'Saree',
  price: '$10.99',
  originalPrice: '$20.99',
  discount: '20% Off',
},
{
  image: 'src/assets/saree2.jpg',
  name: 'Saree',
  price: '$10.99',
  originalPrice: '$20.99',
  discount: '20% Off',
},
{
  image: 'src/assets/saree4.jpg',
  name: 'Saree',
  price: '$10.99',
  originalPrice: '$20.99',
  discount: '20% Off',
}

];

const productkid = [
  {
    image: 'src/assets/kid1.jpeg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'src/assets/kid2.jpg',
    name: 'Dress',
    price: '$15.99',
    originalPrice: '$25.99',
    discount: '30% Off',
  },
  {
    image: 'src/assets/kid3.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'src/assets/kid4.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image:  'src/assets/kid5.jpg',
    name: 'Dress',
    price: '$15.99',
    originalPrice: '$25.99',
    discount: '30% Off',
  },
  {
    image: 'src/assets/kid6.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'src/assets/kid7.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'src/assets/kid8.jpg',
    name: 'Dress',
    price: '$15.99',
    originalPrice: '$25.99',
    discount: '30% Off',
  },
  {
    image: 'src/assets/kid9.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },

  {
    image: 'src/assets/kid10.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'src/assets/kid1.jpeg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'src/assets/kid2.jpg',
    name: 'Dress',
    price: '$15.99',
    originalPrice: '$25.99',
    discount: '30% Off',
  },

];



function App() {
  return (

    <>
     <Header1></Header1>
   <Router>
      <Routes>
      <Route path="/" element={<FirstPage/>} />
      <Route path="/women" element={<WomenSection products={productwomen} />} />
      <Route path="/men" element={<MenSection products={productwomen} />} />
      <Route path="/kid" element={<KidSection products={productkid} />} />
      <Route path="/register" element={<Register/>} />
    
      </Routes>
    </Router>
  
  


     
      

      
    </>
  );
}

export default App;
