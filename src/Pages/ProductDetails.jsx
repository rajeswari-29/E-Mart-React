import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleProduct } from "../Services/api"

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

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
      </div>
    </div>
  )
}

export default ProductDetails