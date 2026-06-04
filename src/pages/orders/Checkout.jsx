import { useCart } from "../../context/CartContext";

function Checkout() {

  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-6">

      <h1 className="text-4xl font-bold mb-6">
        Checkout
      </h1>

      {cartItems.map((item) => (

        <div
          key={item.id}
          className="flex justify-between border-b py-4"
        >
          <h2>{item.name}</h2>

          <h2>
            ₹{item.price * item.quantity}
          </h2>
        </div>

      ))}

      <div className="mt-6">

        <h2 className="text-3xl font-bold">
          Total: ₹{totalPrice}
        </h2>

        <button
          className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg"
        >
          Place Order
        </button>

      </div>

    </div>
  );
}

export default Checkout;