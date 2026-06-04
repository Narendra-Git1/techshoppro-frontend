import { useCart } from "../../context/CartContext";

function Cart() {

  const {
    cartItems,
    removeFromCart
  } = useCart();

  return (
    <div className="p-6">

      <h1 className="text-4xl font-bold mb-6">
        Shopping Cart
      </h1>

      <p className="text-xl mb-4">
        Items Count: {cartItems.length}
      </p>

      {cartItems.length === 0 ? (

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl text-gray-500">
            Your cart is empty
          </h2>
        </div>

      ) : (

        <div className="space-y-4">

          {cartItems.map((item, index) => (

            <div
              key={`${item.id}-${index}`}
              className="flex items-center gap-4 border rounded-lg p-4 shadow"
            >

              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />

              <div className="flex-1">

                <h2 className="text-xl font-semibold">
                  {item.name}
                </h2>

                <p className="text-green-600 font-bold">
                  ₹{item.price}
                </p>

                <p className="text-gray-500">
                  {item.brand}
                </p>

              </div>

              <button
                onClick={() =>
                  removeFromCart(item.id)
                }
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Remove
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Cart;