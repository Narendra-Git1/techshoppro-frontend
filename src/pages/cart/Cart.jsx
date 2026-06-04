import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Cart() {

    const {
        cartItems,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
    } = useCart();

    const totalPrice = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );

    return (
        <div className="max-w-6xl mx-auto p-6">

            <h1 className="text-4xl font-bold mb-8">
                Shopping Cart
            </h1>

            {cartItems.length === 0 ? (

                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl text-gray-500">
                        Your cart is empty
                    </h2>
                </div>

            ) : (

                <>
                    <div className="space-y-4">

                        {cartItems.map((item) => (

                            <div
                                key={item.id}
                                className="flex items-center justify-between border rounded-lg p-4 shadow"
                            >

                                <div className="flex items-center gap-4">

                                    <img
                                        src={item.imageUrl}
                                        alt={item.name}
                                        className="w-24 h-24 object-cover rounded"
                                    />

                                    <div>

                                        <h2 className="text-2xl font-semibold">
                                            {item.name}
                                        </h2>

                                        <p className="text-green-600 font-bold text-xl">
                                            ₹{item.price}
                                        </p>

                                        <p className="text-gray-500">
                                            {item.brand}
                                        </p>

                                        <div className="flex items-center gap-3 mt-3">

                                            <button
                                                onClick={() =>
                                                    decreaseQuantity(item.id)
                                                }
                                                className="bg-gray-500 text-white px-3 py-1 rounded"
                                            >
                                                -
                                            </button>

                                            <span className="font-bold text-lg">
                                                {item.quantity}
                                            </span>

                                            <button
                                                onClick={() =>
                                                    increaseQuantity(item.id)
                                                }
                                                className="bg-gray-500 text-white px-3 py-1 rounded"
                                            >
                                                +
                                            </button>

                                        </div>

                                    </div>

                                </div>

                                <button
                                    onClick={() =>
                                        removeFromCart(item.id)
                                    }
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                >
                                    Remove
                                </button>

                            </div>

                        ))}

                    </div>

                    <div className="mt-8 border-t pt-6">

                        <h2 className="text-4xl font-bold">
                            Total: ₹{totalPrice.toLocaleString()}
                        </h2>

                        <div className="flex gap-4 mt-6">

                            <Link
                                to="/products"
                                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
                            >
                                Continue Shopping
                            </Link>

                            <Link
                                to="/checkout"
                                className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                            >
                                Checkout
                            </Link>

                        </div>

                    </div>

                </>

            )}

        </div>
    );
}

export default Cart;