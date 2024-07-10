import { useCollection } from "../hooks/useCollection";
import { GlobalContext } from "../context/useContextGlobal";
import { useContext, useState, useEffect } from "react";
import Card from "../components/Card";
import '../static/home.css';

export default function Home() {
  const { user } = useContext(GlobalContext);
  const { data: initialData } = useCollection("recipes", ["uid", "==", user.uid]); // Ensure collection name is "recipes"
  const [data, setData] = useState(initialData || []);

  useEffect(() => {
    setData(initialData);
  }, [initialData]);

  const handleDelete = (id) => {
    setData(data.filter((product) => product.id !== id));
  };

  return (
    <div className="">
      <div className="align-content">
        <h1 className="text-4xl text-center font-bold mt-10">Home</h1>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-11 gap-11 lg:px-10 md:px-28 justify-items-center">
          {data &&
            data.map((product) => (
              <div key={product.id}>
                <Card product={product} onDelete={handleDelete} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
