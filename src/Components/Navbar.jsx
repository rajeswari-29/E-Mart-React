import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          E-Mart
        </Link>

        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-200">
            Home
          </Link>

          <Link to="/cart" className="hover:text-gray-200">
            Cart
          </Link>

          <Link to="/login" className="hover:text-gray-200">
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar