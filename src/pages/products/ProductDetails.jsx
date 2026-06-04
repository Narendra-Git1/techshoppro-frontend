import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productService from "../../services/productService";
import { useCart } from "../../context/CartContext";

function ProductDetails() {
const { id } = useParams();

const [product, setProduct] = useState(null);

const { addToCart } = useCart();

useEffect(() => {
loadProduct();
}, [id]);

const loadProduct = async () => {
try {
const response = await productService.getProductById(id);
setProduct(response.data);
} catch (error) {
console.error("Error loading product:", error);
}
};

if (!product) {
return ( <div className="flex justify-center items-center h-screen"> <h2 className="text-2xl font-semibold">
Loading Product... </h2> </div>
);
}

return ( <div className="max-w-6xl mx-auto p-8"> <div className="grid md:grid-cols-2 gap-10 bg-white shadow-lg rounded-lg p-6">


    <div>
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-[450px] object-contain rounded-lg"
      />
    </div>

    <div className="flex flex-col justify-center">
      <h1 className="text-4xl font-bold mb-4">
        {product.name}
      </h1>

      <p className="text-3xl font-semibold text-green-600 mb-4">
        ₹{product.price}
      </p>

      <p className="text-gray-600 mb-4">
        {product.description}
      </p>

      <p className="text-lg mb-6">
        <span className="font-semibold">
          Brand:
        </span>{" "}
        {product.brand}
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          Add To Cart
        </button>

        <button
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Buy Now
        </button>
      </div>
    </div>

  </div>
</div>


);
}

export default ProductDetails;
