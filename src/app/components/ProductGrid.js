//номер 4 сумки продол
import ProductCard from './ProductCard';

const ProductGrid = () => {
  const products = [
    { 
      name: 'Hobo Small', 
      price: '195.00',
      imageUrl: '/image 1.png' 
    },
    { 
      name: 'Bo Soft Strap', 
      price: '365.00',
      imageUrl: '/image 2.png' 
    },
    {
        name: 'Hobo Small', 
        price: '195.00',
        imageUrl: '/image 3.png'    
    },
    {
        name: 'Bo Soft Stap', 
        price: '365.00',
        imageUrl: '/image 4.png'
    },
    {
        name: 'Hobo Large', 
        price: '615.00',
        imageUrl: '/image 5.png'
    },
    {
        name: 'Storml', 
        price:  '195.00',
        imageUrl: '/image 6.png'
    },
    {
        name: 'Hobo Small', 
        price: '195.00',
        imageUrl: '/image 7.png'
    },
    {
        name: 'Storml', 
        price: '195.00',
        imageUrl: '/image 8.png'
    },
    {
        name: 'Bo Soft Stap', 
        price: '365.00',
        imageUrl: '/image 9.png'
    },
    {
        name: 'Hobo Large', 
        price: '615.00',
        imageUrl: '/image 10.png'
    }

    
  ];

  return (
    <div className="max-w-md mx-auto px-4 py-8">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          secondPrice={product.secondPrice}
          imageUrl={product.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProductGrid;