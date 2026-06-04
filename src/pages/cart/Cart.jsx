import { useCart } from "../../context/CartContext";

function Cart() {
  const { cartItems } = useCart();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Shopping Cart
      </h1>

      {cartItems.map((item) => (
        <div
          key={item.id}
          className="border p-4 mb-4"
        >
          <h2>{item.name}</h2>

          <p>₹{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;