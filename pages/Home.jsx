import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <button onClick={() => navigate("/products/necklace")}>
          Necklace
        </button>

        <button onClick={() => navigate("/products/earrings")}>
          Ear Rings
        </button>

        <button onClick={() => navigate("/products/bracelet")}>
          Bracelett
        </button>
      </div>
    </section>
  );
}
