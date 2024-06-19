import Home1 from "./Home1";
import ProductItems from "./ProductItems";

const products = [
  {
    id: 1,
    image: 'https://i5.walmartimages.com/asr/e7fdeea2-59bd-4905-86e5-14479f55496b_1.f353b8aa2222b97eef822e3077e93a9d.jpeg', 
    name: 'Tops',
    price: '299',
    discount:499,
    offer:'Under ₹ 399'
  },
  {
    id: 2,
    image: 'https://i.pinimg.com/originals/6c/31/0a/6c310a0c950262dacd447f59e057ea64.jpg',
    name: 'Saree ',
    price: 499.00,
    discount:799,
   offer:'Under ₹ 399'
  },
  {
    id: 3,
    image:'https://static3.azafashions.com/uploads/product_gallery/1656582-0404759001660991161.jpg',
    name: 'Frocks for Girls',
    price: 19.99,
    discount:30,
   offer:'Under ₹ 399'
  },
  {
    id: 4,
    image: 'https://5.imimg.com/data5/DD/RH/MY-78308246/mens-formal-cotton-shirt-500x500.jpg',
    name: 'Shirts',
    price: 299,
    discount:399,
   offer:'Under ₹ 399'
  },
  {
    id: 5,
    image: 'https://academy.scene7.com/is/image/academy/20628318?$pdp-gallery-ng$',
    name: 'Track Pants',
    price: 250,
    discount:299,
    offer:'Under ₹ 250'
  },
  {
    id: 6,
    image: 'https://th.bing.com/th/id/OIP.ATgTlIwfCfuvToso1mgfOgHaKi?w=202&h=288&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    name: 'Jeans',
    price: 299,
    discount:499,
    offer:'Under ₹ 399'
  },
  {
    id: 7,
    image:'https://i.pinimg.com/originals/b2/4f/83/b24f838f75943927f0b6dc90de0870f6.jpg',
    name: 'Formal Suits',
    price: 799,
    discount:999,
    offer:'Under ₹1000'
  },
  {
    id: 8,
    image: 'https://th.bing.com/th/id/OIP.BguBcmSOcalyGUWLKC1ZTgHaJe?pid=ImgDet&w=179&h=229&c=7&dpr=1.3',
    name: 'Kurti',
    price: 199,
    discount:250,
    offer:'Under ₹ 200'
  },
  {
    id: 9,
    image:'https://stylesatlife.com/wp-content/uploads/2017/02/Apple-Cut-Salwar-Kameez.jpg',
    name: 'Salwar Suit',
    price: 399,
    discount:599,
    offer:'Under ₹ 400'
  },
  {
    id: 10,
    image: 'https://th.bing.com/th/id/OIP.n41WAG0usYOtcgKW-uC1WgHaJ4?w=1200&h=1600&rs=1&pid=ImgDetMain',
    name: 'T-Shirts',
    price: 199,
    discount:300,
   offer:'Under ₹ 200'
  },
 
 
 
];

function Home(){
  return(
    <>
      
    
    <h1 class="catheading">SHOP BY CATEGORY</h1>

{/* /* This is category section */ }
<div className="grid-container">
{products.map(product => (
        <ProductItems 
          key={product.id} 
          image={product.image} 
          name={product.name} 
          price={product.price}
          discount={product.discount} 
          offer={product.offer}
        />
      ))}
      </div>
   
    </>
  )
}

export default Home;