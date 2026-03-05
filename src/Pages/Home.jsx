import { useEffect, useState } from "react"
import { getAllProducts, getCategories } from "../Services/api"
import ProductCard from "../Components/ProductCard"
import { useContext } from "react"
import { CartContext } from "../Context/CartContext"


const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState("all")

 useEffect(() => {
  const fetchData = async () => {
    try {
      const productsData = await getAllProducts()
      const categoryData = await getCategories()

      setProducts(productsData)
      setCategories(categoryData)
    } catch (err) {
      setError("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  fetchData()
}, [])

  if (loading) return <h2>Loading...</h2>
  if (error) return <h2>{error}</h2>

 return (
  <div className="p-4">

    <select
      className="border p-2 mb-4"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option value="all">All</option>

      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products
        .filter((product) =>
          selectedCategory === "all"
            ? true
            : product.category === selectedCategory
        )
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>

  </div>
)
}

export default Home