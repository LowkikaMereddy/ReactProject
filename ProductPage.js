import { useParams } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();

  // Dummy product data (we will replace this with API data later)
  const product = {
    id,
    name: "Sample Product",
    description: "This is a sample product description.",
    price: 999,
    image: "https://via.placeholder.com/300",
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-lg" />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 my-4">{product.description}</p>
          <p className="text-xl font-semibold text-blue-600">${product.price}</p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded mt-4">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
