import { useStore } from "../context/StoreContext";

export default function Cart() {
  const { cart } = useStore();
  const items = Object.entries(cart);

  const total = items.reduce(
    (sum, [, item]) => sum + item.qty * item.price,
    0
  );

  return (
    <div className="cart">
      <h3>Cart Summary</h3>
      {items.length === 0 && <p>No items</p>}

      {items.map(([id, item]) => (
        <p key={id}>
          {id} × {item.qty} = ${item.qty * item.price}
        </p>
      ))}

      {total > 0 && <strong>Total: ${total}</strong>}
    </div>
  );
}
