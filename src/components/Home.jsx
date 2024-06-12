import Home1 from "./Home1";
import ProductItems from "./ProductItems";

const products = [
  {
    id: 1,
    image: 'src/assets/top1.jpeg', 
    name: 'Tops',
    price: '299',
    discount:499,
    offer:'Under ₹ 399'
  },
  {
    id: 2,
    image: 'src/assets/saree.jpg',
    name: 'Saree ',
    price: 499.00,
    discount:799,
   offer:'Under ₹ 399'
  },
  {
    id: 3,
    image:'src/assets/dress2.jpg',
    name: 'Frocks for Girls',
    price: 19.99,
    discount:30,
   offer:'Under ₹ 399'
  },
  {
    id: 4,
    image: 'src/assets/men1.jpeg',
    name: 'Shirts',
    price: 299,
    discount:399,
   offer:'Under ₹ 399'
  },
  {
    id: 5,
    image: 'src/assets/pant1.jpeg',
    name: 'Track Pants',
    price: 250,
    discount:299,
    offer:'Under ₹ 250'
  },
  {
    id: 6,
    image: 'src/assets/pant2.jpeg',
    name: 'Jeans',
    price: 299,
    discount:499,
    offer:'Under ₹ 399'
  },
  {
    id: 7,
    image:'src/assets/men2.jpeg',
    name: 'Formal Suits',
    price: 799,
    discount:999,
    offer:'Under ₹1000'
  },
  {
    id: 8,
    image: 'src/assets/kurti2.jpeg',
    name: 'Kurti',
    price: 199,
    discount:250,
    offer:'Under ₹ 200'
  },
  {
    id: 9,
    image:'src/assets/suit6.jpeg',
    name: 'Salwar Suit',
    price: 399,
    discount:599,
    offer:'Under ₹ 400'
  },
  {
    id: 10,
    image: 'src/assets/men4.jpeg',
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