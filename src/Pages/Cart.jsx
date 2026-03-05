import { useContext } from "react"
import { CartContext } from "../Context/CartContext"

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext)

  if (cart.length === 0) {
    return <h2 className="text-center text-xl mt-10">Your cart is empty</h2>
  }

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  )

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between border p-4 mb-4 rounded"
        >
          <img
            src={item.image}
            alt={item.title}
            className="h-20 object-contain"
          />

          <h3 className="w-1/3">{item.title}</h3>

          <p>Qty: {item.quantity}</p>

          <p className="text-blue-600 font-semibold">
            ₹{item.price * item.quantity}
          </p>

          <button
            onClick={() => removeFromCart(item.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Remove
          </button>
        </div>
      ))}

      <h3 className="text-xl font-bold mt-6">
        Total: ₹{totalPrice.toFixed(2)}
      </h3>
    </div>
  )
}

export default Cart