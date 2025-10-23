import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../components/types/Product";


export default function ProductsList() {

const [products, setProduct] = useState<Product[]>([]);

  async function fetchProducts() {
    const res = await fetch("https://api.escuelajs.co/api/v1/products");
    const arr = await res.json();
    setProduct(arr);
  }
  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      ProductsList
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.title}
            <img src={p.images[0]} alt={p.title} width={"200px"}/>
            <Link to={`/products/${p.id}`}>To product</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// выпишите на отдельном листе названия хуков и что они делают
// useState
// useEffect
// useParams
// useSearchParams
