interface ProductAvailabilityProps {
  available: boolean;
}

const ProductAvailability = ({ available }: ProductAvailabilityProps) => (
  <div className={available ? 'text-green-500 my-1 block border rounded-md' : 'text-red-500 my-1 block border rounded-md'}>
    {available ? 'Available' : 'Not Available'}
  </div>
);

export default ProductAvailability;
