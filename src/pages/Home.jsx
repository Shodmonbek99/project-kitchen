import React from "react";
import  { useContext } from "react";
import { useCollection } from "../hooks/useCollection";
import { GlobalContext } from "../context/useContextGlobal"; // GlobalContext ni import qiling

import Card from "../components/Card";
import Footer from "../components/Footer";
import '../static/home.css'

export default function Home() {
  const { user } = useContext(GlobalContext); // GlobalContext dan user olish
  const { data } = useCollection("eda", ["uid", "==", user.uid]); // useCollection hook ini ishlatish

  return (
    <div className="home">
      <div className="align-content">
        <h1 className="text-4xl text-center font-bold mt-10">Home</h1>
        <div className="grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 mt-11 gap-11 lg:px-10 md:px-28 justify-items-center">
          {data &&
            data.map((product) => (
              <div key={product.id}>
                <Card product={product} />
              </div>
            ))}
        </div>
      </div>
      <Footer /> 
    </div>
  );
}
