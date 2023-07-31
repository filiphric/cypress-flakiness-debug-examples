## Add item to cart test
Simple test for adding an item to the cart. Test can be found [here]('./cypress/e2e/spec.cy.ts'). 

### The problem
Test is trying to click on a button to add an item to a cart. The test sometimes fails when the "add to cart" button is pressed too fast.

The usual go-to solution for Cypress would be to add a `cy.intercept()` command that would rout the correct API call, use `cy.wait(<alias>)` to wait for a response and then wait for the test. The problem is that this solution does not fix the issue for users with slower internet connection. They can still experience inability to add item to a card.

### Why is this happening?
In the product detail page, application checks item’s availability. This defaults to 0, but is changed when a response from API comes back. If user clicks befor the response comes back, 0 items will be added to cart. This will throw an error from API, as 0 items cannot be added to a cart.

### Solution to problem
"Add to cart" button should not be sending requests to server if the response from availability endpoint has not yet come back. A possible solution would be to make the button disabled if the quantity property is 0.

The solution is explained in greater detail [in this video](https://youtu.be/4wL8Qi9vjho).

```diff 
interface AddToCartButtonProps {
  onClick: () => void;
+ disabled: boolean
}

- const AddToCartButton = ({ onClick }: AddToCartButtonProps) => (
-  <button className='bg-pink-500 text-white font-semibold text-2xl px-4 py-2 rounded-sm my-4' onClick={onClick}>
+ const AddToCartButton = ({ onClick, disabled }: AddToCartButtonProps) => (
+  <button className='bg-pink-500 text-white font-semibold text-2xl px-4 py-2 rounded-sm my-4 disabled:opacity-50' onClick={onClick} disabled={disabled}>
Add to Cart
  </button>
);

export default AddToCartButton;

```

### Resources
- [Replay.io link](https://app.replay.io/recording/cypresse2especcyts--ff8097ba-1d68-406f-8c41-2f8259d03a01)
- [YouTube link](https://youtu.be/4wL8Qi9vjho)