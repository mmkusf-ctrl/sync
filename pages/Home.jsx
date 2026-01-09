import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">

        <button
          className="category-btn"
          onClick={() => navigate("/products/necklace")}
        >
          Necklace
        </button>

        <button
          className="category-btn"
          onClick={() => navigate("/products/earrings")}
        >
          Ear Rings
        </button>

        <button
          className="category-btn"
          onClick={() => navigate("/products/bracelet")}
        >
          Bracelett
        </button>

      </div>
    </section>
  );
}
