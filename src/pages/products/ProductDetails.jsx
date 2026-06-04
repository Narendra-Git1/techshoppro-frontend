import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getProductById }
from "../../services/productService";

function ProductDetails() {

  const { id } = useParams();

  const [product, setProduct] =
    useState(null);

  useEffect(() => {

    fetchProduct();

  }, []);

  const fetchProduct = async () => {

    try {

      const response =
        await getProductById(id);

      setProduct(response.data);

    } catch (error) {

      console.error(error);
    }
  };

  if (!product) {

    return <h2>Loading...</h2>;
  }

  return (

    <div className="p-6">

      <h1 className="text-4xl font-bold">
        {product.name}
      </h1>

      <p className="mt-4">
        {product.description}
      </p>

      <h2 className="text-2xl mt-4">
        ₹{product.price}
      </h2>

      <p>
        Brand: {product.brand}
      </p>

      <p>
        Stock: {product.stock}
      </p>

    </div>
  );
}

export default ProductDetails;