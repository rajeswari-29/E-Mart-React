import { useEffect, useState } from "react"
import { getAllProducts } from "../Services/api"
import ProductCard from "../Components/ProductCard"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"
const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts()
        setProducts(data)
      } catch (err) {
        setError("Something went wrong")
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>{error}</h2>
  const { cart } = useContext(CartContext)
console.log(cart)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default Home