import { PRODUCTS } from "../data/products";
import ProductGrid from "../components/ProductGrid";

export default function Home() {
  return (
    <>
      <ProductGrid title="Necklace" products={PRODUCTS.necklace} />
      <ProductGrid title="Ear Rings" products={PRODUCTS.earrings} />
      <ProductGrid title="Bracelett" products={PRODUCTS.bracelet} />
    </>
  );
}
