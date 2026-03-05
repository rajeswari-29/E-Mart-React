import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleProduct } from "../Services/api"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"


const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const { addToCart } = useContext(CartContext)

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getSingleProduct(id)
      setProduct(data)
    }

    fetchProduct()
  }, [id])

  if (!product) return <h2>Loading...</h2>

  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
      <img
        src={product.image}
        alt={product.title}
        className="h-80 mx-auto object-contain"
      />
      <div>
        <h2 className="text-2xl font-bold">{product.title}</h2>
        <p className="text-gray-600 my-4">{product.description}</p>
        <p className="text-blue-600 text-xl font-semibold">
          ₹{product.price}
        </p>
                <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductDetails