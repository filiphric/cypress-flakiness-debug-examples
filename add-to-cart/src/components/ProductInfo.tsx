interface ProductInfoProps {
  name: string;
  description: string;
}

const ProductInfo = ({ name, description }: ProductInfoProps) => (
  <>
    <h2 className='font-extrabold text-5xl my-4'>{name}</h2>
    <p className='text-sm my-4'>{description}</p>
  </>
);

export default ProductInfo;
