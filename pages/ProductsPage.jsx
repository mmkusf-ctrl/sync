import { useParams } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function ProductsPage() {
  const { category } = useParams();
  const products = PRODUCTS[category];

  if (!products) {
    return <h2>Category not found</h2>;
  }

  return (
    <section className={`products-page ${category}`}>
      <h1>{category.toUpperCase()}</h1>

      <div className="grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
