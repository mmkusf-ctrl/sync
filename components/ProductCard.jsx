import { useStore } from "../context/StoreContext";

export default function ProductCard({ product }) {
  const { cart, addToCart, updateQty } = useStore();
  const qty = cart[product.id]?.qty || 0;

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>Model: {product.id}</p>
      <p>${product.price}</p>

      <div className="qty">
        <button onClick={() => updateQty(product.id, qty - 1)}>-</button>
        <span>{qty}</span>
        <button onClick={() => addToCart(product.id, product.price)}>+</button>
      </div>
    </div>
  );
}
