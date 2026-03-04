import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Cart from "./Pages/Cart"
import Login from "./Pages/Login"
import ProductDetails from "./Pages/ProductDetails"
import Navbar from "./Components/Navbar"

function App() {
  return (
    <>
      <Navbar />

    <div className="p-6">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </div>
    </>
  )
}

export default App