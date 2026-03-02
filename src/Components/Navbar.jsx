import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-dark p-3">
      <div className="container d-flex justify-content-between">
        <Link to="/" className="text-white text-decoration-none fw-bold">
          E-Mart
        </Link>

        <div className="d-flex gap-3">
          <Link to="/" className="text-white text-decoration-none">
            Home
          </Link>
          <Link to="/cart" className="text-white text-decoration-none">
            Cart
          </Link>
          <Link to="/login" className="text-white text-decoration-none">
            Login
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar