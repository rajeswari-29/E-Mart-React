import React, { useEffect, useState } from "react";
import { getAllProducts, getCategories } from "../Services/api";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await getAllProducts();
        const categoryData = await getCategories();

        setProducts(productsData);
        setCategories(categoryData);
      } catch (error) {
        console.error("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // FILTER PRODUCTS
  const filteredProducts = products
    .filter((p) =>
      selectedCategory === "all" ? true : p.category === selectedCategory
    )
    .filter((p) =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  if (loading) {
    return <h2 className="text-center text-xl mt-10">Loading products...</h2>;
  }

  return (
    <div className="flex">

      {/* LEFT SIDE CATEGORY SIDEBAR */}
      <div className="w-64 p-4 border-r bg-gray-50 min-h-screen">

        <h2 className="text-xl font-bold mb-6">Categories</h2>

        <button
          onClick={() => setSelectedCategory("all")}
          className={`block w-full text-left px-3 py-2 rounded mb-2 
          ${selectedCategory === "all"
            ? "bg-blue-500 text-white"
            : "hover:bg-gray-200"}`}
        >
          All
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`block w-full text-left px-3 py-2 rounded mb-2 
            ${selectedCategory === cat
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-200"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* RIGHT SIDE PRODUCTS */}
      <div className="flex-1 p-6">

        {/* SEARCH BAR */}
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* PRODUCTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>

    </div>
  );
};

export default Home;