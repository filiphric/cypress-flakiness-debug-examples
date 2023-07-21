interface AddToCartButtonProps {
  onClick: () => void;
}

const AddToCartButton = ({ onClick }: AddToCartButtonProps) => (
  <button className='bg-pink-500 text-white font-semibold text-2xl px-4 py-2 rounded-sm my-4' onClick={onClick}>
    Add to Cart
  </button>
);

export default AddToCartButton;
