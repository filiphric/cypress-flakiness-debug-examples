import type { NextPage } from 'next';
import ProductDetail from '../components/ProductDetail';
import { IProduct } from '../interfaces/product';

const Home: NextPage = () => {
  const product: IProduct = {
    name: 'Flamingo Dawn Sneakers',
    photo: '/shoe.png',
    price: 199,
    description: '"Flamingo Dawn" is a head-turning sneaker featuring various shades of vibrant pink. Inspired by the breathtaking beauty of a sunrise, the sneaker’s dominant hue emulates the warmth and optimism of a new day.',
    availability: false,
  };

  return (
    <div className="p-8">
      <ProductDetail product={product} />
    </div>
  );
}

export default Home;
