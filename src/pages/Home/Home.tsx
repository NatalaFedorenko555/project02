import { useEffect, useState } from "react";
import type { Category } from "../../components/types/Category";
import type { Product } from "../../components/types/Product";
import { Link, useSearchParams } from "react-router-dom";

export default function Home() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const fetchCategories = async () => {
    const res = await fetch(" https://api.escuelajs.co/api/v1/categories");
    const data = await res.json();
    setCategories(data);
  };

  const fetchProductsByCategoryId = async (id: string) => {
    const res = await fetch(
      `https://api.escuelajs.co/api/v1/categories/${id}/products`
    );

    const data = await res.json();
    setProducts(data)
  };

 // const [categoryId, setCategoryId] = useState("1");
    const [searchParams,setSearchParams] = useSearchParams("?categoryId=1");
    const categoryId = searchParams.get("categoryId") || "1";

  useEffect(() => {
    fetchCategories();
  }, []);


  useEffect(() => {
    if(categoryId){
    fetchProductsByCategoryId(categoryId);
    }

  },[categoryId]);

  return (
    <div>
      <select
        name="category"
        value={categoryId || '1'}
        onChange={(e) => setSearchParams({ categoryId:e.target.value})}
      >
        {categories.map((c) => (
          <option value={c.id} key={c.id}>
            {c.name}
          </option>
        ))}
      </select>
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
