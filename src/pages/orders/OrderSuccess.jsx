import { Link } from "react-router-dom";

function OrderSuccess() {

  return (
    <div className="text-center mt-20">

      <h1 className="text-5xl font-bold text-green-600">
        Order Placed Successfully 🎉
      </h1>

      <p className="mt-4 text-xl">
        Order ID: #{Math.floor(Math.random() * 100000)}
      </p>

      <Link
        to="/products"
        className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg"
      >
        Continue Shopping
      </Link>

    </div>
  );
}

export default OrderSuccess;
