interface ProductPriceProps {
  price: number;
}

const ProductPrice = ({ price }: ProductPriceProps) => (
  <p className='text-5xl font-bold my-4 block'>{price} $</p>
);

export default ProductPrice;
