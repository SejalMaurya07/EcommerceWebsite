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
    image: 'https://i.pinimg.com/originals/a8/b2/e0/a8b2e07d69fdaafd0ac6b9a82fc6bd8f.jpg',
    name: 'Dress',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'https://th.bing.com/th/id/OIP.BVtjNhPPn6rspiFl3cVsdwHaJ4?w=202&h=269&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    name: 'Saree',
    price: '$15.99',
    originalPrice: '$25.99',
    discount: '30% Off',
  },
  {
    image: 'https://th.bing.com/th/id/OIP.C8WXnCDjhiGzldd7LtHjkAHaKL?w=202&h=278&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'https://cdn.sareeka.com/image/cache/data2020/designer-salwar-kameez-resham-art-silk-in-navy-blue-151871-1000x1375.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image:  'https://th.bing.com/th/id/OIP.39I3JrZCYtapZV2vGmja-wHaKs?w=202&h=291&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    name: 'Dress',
    price: '$15.99',
    originalPrice: '$25.99',
    discount: '30% Off',
  },
  {
    image: 'https://i.pinimg.com/originals/6c/31/0a/6c310a0c950262dacd447f59e057ea64.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'https://i.pinimg.com/originals/5f/d0/ae/5fd0ae5348ccda9c7661d9116838f2db.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'https://th.bing.com/th/id/OIP.E-a07XWWgNI2YcWyI1lT1gHaJ4?w=202&h=269&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    name: 'Dress',
    price: '$15.99',
    originalPrice: '$25.99',
    discount: '30% Off',
  },
  {
    image: 'https://th.bing.com/th/id/OIP.UsebBoXeII7jgzPjghgKAAHaLH?w=202&h=303&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },

  {
    image: 'https://i.pinimg.com/originals/cb/e8/bb/cbe8bb3571cea01a571abab82cb83c6c.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'https://th.bing.com/th/id/OIP.KdcU4Z5SB5z5nBlHTwkAowAAAA?w=191&h=325&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'https://i5.walmartimages.com/asr/f98881c9-e1d9-45ff-8b83-db69f55df544_1.27304592ffdc8d8e11038f78c2a55184.jpeg',
    name: 'Dress',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'https://th.bing.com/th/id/OIP.00plmAfCw2N7BgN9FZEOnAAAAA?pid=ImgDet&w=182&h=263&c=7&dpr=1.3',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  }
 ,
 {
  image: 'https://th.bing.com/th/id/OIP.u1_OYdyb10e-ZJCLZ6UVLgHaKt?w=202&h=293&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  name: 'Saree',
  price: '$10.99',
  originalPrice: '$20.99',
  discount: '20% Off',
},
{
  image: 'https://th.bing.com/th/id/OIP.VMzq9EI3PzC6RLjfNCti0AHaLH?w=202&h=303&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  name: 'Saree',
  price: '$10.99',
  originalPrice: '$20.99',
  discount: '20% Off',
},
{
  image: 'https://pothysdress.s3.ap-south-1.amazonaws.com/109218_img1.jpg',
  name: 'Saree',
  price: '$10.99',
  originalPrice: '$20.99',
  discount: '20% Off',
},
{
  image: 'https://i.pinimg.com/736x/dc/3a/08/dc3a08ae040d40bfdc8f973afa81815c.jpg',
  name: 'Saree',
  price: '$10.99',
  originalPrice: '$20.99',
  discount: '20% Off',
},
{
  image: 'https://th.bing.com/th/id/OIP.dXF4uoeHPTa6wt2RoCnTuwAAAA?w=202&h=269&c=7&r=0&o=5&dpr=1.3&pid=1.7',
  name: 'Saree',
  price: '$10.99',
  originalPrice: '$20.99',
  discount: '20% Off',
}
,
{
  image: 'https://th.bing.com/th/id/OIP.eAYbpOO9zO3HSVRp1wizogHaJb?pid=ImgDet&w=179&h=227&c=7&dpr=1.3',
  name: 'Saree',
  price: '$10.99',
  originalPrice: '$20.99',
  discount: '20% Off',
}

,
{
  image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/top/t/o/3/xl-16931822-all-about-you-original-imaghnhh5zpaahqb.jpeg?q=70',
  name: 'Saree',
  price: '$10.99',
  originalPrice: '$20.99',
  discount: '20% Off',
}

,
{
  image: 'https://n4.sdlcdn.com/imgs/j/o/3/Zola-Red-Cotton-Frock-Style-SDL679983167-5-1524e.jpg',
  name: 'Saree',
  price: '$10.99',
  originalPrice: '$20.99',
  discount: '20% Off',
}
,
{
  image: 'https://i.etsystatic.com/25986688/r/il/1e9b60/2976674997/il_1588xN.2976674997_9llk.jpg',
  name: 'Saree',
  price: '$10.99',
  originalPrice: '$20.99',
  discount: '20% Off',
}
,
{
  image: 'https://ik.imagekit.io/theloomdev/tr:c-at_max,w-1000,h-1333/catalog/product/i/m/img_3670_1.jpg',
  name: 'Saree',
  price: '$10.99',
  originalPrice: '$20.99',
  discount: '20% Off',
}
,
{
  image: 'https://img.theloom.in/tr:c-at_max,w-580,h-774/catalog/product/l/c/lc614_3_.jpg',
  name: 'Saree',
  price: '$10.99',
  originalPrice: '$20.99',
  discount: '20% Off',
}


];

const productkid = [
  {
    image: 'https://th.bing.com/th/id/OIP.SdtLrkOELf7oGw8CfKCv-AHaLG?w=683&h=1024&rs=1&pid=ImgDetMain',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'https://3.imimg.com/data3/TQ/CN/MY-13933419/507-black-500x500.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'https://images.meesho.com/images/products/346970188/lwihf_512.webp',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  
  {
    image: 'https://th.bing.com/th/id/OIP.M0ZuMerOvWZKoBNHEnoMGQAAAA?w=417&h=626&rs=1&pid=ImgDetMain',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },

  {
    image: 'https://i.pinimg.com/originals/fe/2e/df/fe2edf620aa857ee37d01e2e9f25119d.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'https://i.pinimg.com/originals/4b/68/f6/4b68f612ab122bb53e0c903734c3541a.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'https://th.bing.com/th/id/OIP.B8BkdUriO5cxugbiwa8ZDQHaNV?w=500&h=900&rs=1&pid=ImgDetMain',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'https://i.pinimg.com/originals/42/32/f1/4232f187b4f8c549dd6fa945fa4c48a8.jpg',
    name: 'Dress',
    price: '$15.99',
    originalPrice: '$25.99',
    discount: '30% Off',
  },
  {
    image: 'https://th.bing.com/th/id/OIP.OKu-AbidTkA2fHJXe3YU1wHaMy?pid=ImgDet&w=179&h=309&c=7&dpr=1.3',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  
  {
    image: 'https://n3.sdlcdn.com/imgs/j/q/1/BLACKJALI-SDL270356044-1-bd177.jpeg',
    name: 'Dress',
    price: '$15.99',
    originalPrice: '$25.99',
    discount: '30% Off',
  },
  {
    image: 'https://i.pinimg.com/originals/4b/57/51/4b57515006837fa0044411eaff90f666.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'https://5.imimg.com/data5/QW/QY/PZ/SELLER-97597101/kids-girls-top-and-denim-jeans-set-500x500.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image:  'https://i.pinimg.com/originals/d1/1d/0e/d11d0e073eebd1913b90f0c375b6959c.jpg',
    name: 'Dress',
    price: '$15.99',
    originalPrice: '$25.99',
    discount: '30% Off',
  },
  {
    image: 'https://5.imimg.com/data5/HG/QM/ND/SELLER-25285191/kids-dress-500x500.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'https://i.pinimg.com/originals/be/93/68/be93680190986bbd4a07549a2fd3fec6.jpg',
    name: 'Dress',
    price: '$15.99',
    originalPrice: '$25.99',
    discount: '30% Off',
  },
  
  {
    image: 'https://th.bing.com/th/id/OIP.OKrb9j__vrYaUr3cesKTIQHaHa?w=736&h=736&rs=1&pid=ImgDetMain',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  }

];

const productmen = [
  {
    image: 'https://th.bing.com/th/id/OIP.tniM6kGQmdnUcWVbOOg_rQAAAA?w=202&h=269&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/products/pictures/item/free/original/C-DqxZoWS-NIKE-Mens-Black-Gym-Track-Pants.jpeg',
    name: 'Dress',
    price: '$15.99',
    originalPrice: '$25.99',
    discount: '30% Off',
  },
  {
    image: 'https://th.bing.com/th/id/OIP.LFS3tlueVBZ4eDULJkNgWwHaIp?rs=1&pid=ImgDetMain',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'https://i.pinimg.com/originals/0b/f4/89/0bf48934449519383116093940ef6fcc.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image:  'https://cdn.shopify.com/s/files/1/0981/8178/files/tone-on-tone-dressing-blue-oxford-shirt.jpg?5470127182368086585',
    name: 'Dress',
    price: '$15.99',
    originalPrice: '$25.99',
    discount: '30% Off',
  },
  {
    image: 'https://pnghq.com/wp-content/uploads/men-fashion-png-png-see-through-background.png',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'https://th.bing.com/th/id/OIP.SFo6SieL22bbJzOSrY2_zQAAAA?rs=1&pid=ImgDetMain',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'https://th.bing.com/th/id/OIP.bdvTNEn_7FL9gH6LiNk4bAHaJ4?rs=1&pid=ImgDetMain',
    name: 'Dress',
    price: '$15.99',
    originalPrice: '$25.99',
    discount: '30% Off',
  },
  {
    image: 'https://johnlewis.scene7.com/is/image/JohnLewis/006222873',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },

  {
    image: 'https://imageseu.wrangler.com/is/image/EUWrangler/112341422_1?$KDP-LARGE2$',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'https://i.pinimg.com/736x/76/53/a8/7653a8331b161b77262ece9ac9f9c8f8--shirt-collars-shirts-for-men.jpg',
    name: 'Saree',
    price: '$10.99',
    originalPrice: '$20.99',
    discount: '20% Off',
  },
  {
    image: 'https://i.pinimg.com/originals/85/95/8b/85958b426d123da167458bdde582e3e7.jpg',
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
      <Route path="/men" element={<MenSection products={productmen} />} />
      <Route path="/kid" element={<KidSection products={productkid} />} />
      <Route path="/register" element={<Register/>} />
    
      </Routes>
    </Router>
  
  


     
      

      
    </>
  );
}

export default App;
