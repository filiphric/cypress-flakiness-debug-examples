interface ProductImageProps {
  src: string;
  alt: string;
}

const ProductImage = ({ src, alt }: ProductImageProps) => (
  <div className='grid content-center'>
    <img src={src} alt={alt} className='shadow-lg'/>
  </div>
);

export default ProductImage;
