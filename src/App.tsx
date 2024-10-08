import { Button } from "@/components/ui/button";
import useStore from "./useStore";

function App() {
  const cart = useStore((state) => state.cart);
  const addToCart = useStore((state) => state.addToCart);
  const removeFromCart = useStore((state) => state.removeFromCart);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">MegaMart Cart</h1>
      <Button
        onClick={() => addToCart({ id: 1, name: "Sample Product" })}
        className="mt-5"
      >
        Add Sample Product to Cart
      </Button>
      <div className="mt-5">
        <h2 className="text-xl">Cart Items:</h2>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <p>{item.name}</p>
              <Button
                variant="destructive"
                onClick={() => removeFromCart(item.id)}
                className="py-1 px-2 rounded"
              >
                Remove
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
