const BASE_URL = "https://fakestoreapi.com"

export const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/products`)

  if (!response.ok) {
    throw new Error("Failed to fetch products")
  }

  return response.json()
}

export const getSingleProduct = async (id) => {
  const response = await fetch(`${BASE_URL}/products/${id}`)

  if (!response.ok) {
    throw new Error("Failed to fetch product")
  }

  return response.json()
}