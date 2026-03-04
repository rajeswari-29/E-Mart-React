import { Link } from "react-router-dom"

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 mx-auto object-contain"
      />

      <h3 className="font-bold mt-2 line-clamp-1">
        {product.title}
      </h3>

      <p className="text-blue-600 font-semibold">
        ₹{product.price}
      </p>

      <Link
        to={`/product/${product.id}`}
        className="block mt-3 bg-blue-600 text-white text-center py-1 rounded"
      >
        View Details
      </Link>
    </div>
  )
}

export default ProductCard