import { useEffect, useState } from "react";
import { getAllProducts } from "../../services/productService";

function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetchProducts();

  }, []);

  const fetchProducts = async () => {

    try {

      const response =
        await getAllProducts();

      setProducts(response.data);

    } catch (error) {

      console.error(error);

    }
  };

  return (

    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {products.map((product) => (

          <div
            key={product.id}
            className="border rounded-lg shadow p-4"
          >

            <img
              src={product.imageUrl}
              alt={product.name}
              className="h-48 w-full object-cover"
            />

            <h2 className="text-xl font-semibold mt-2">
              {product.name}
            </h2>

            <p className="text-gray-600">
              ₹{product.price}
            </p>

            <p>
              {product.brand}
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Products;