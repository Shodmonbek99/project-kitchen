"use client";
import React from "react";
import {
  clearCart,
  editItem,
  updateFromLocalStorage,
  removeItem
} from "../features/cart/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// react icons
import { FaRegCreditCard } from "react-icons/fa";

import { toast, Toaster } from "react-hot-toast";
import '../static/cart.css'

export default function Cart() {
  const [inputValue, setInputValue] = useState("");
  const [promo, setPromo] = useState("");
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const numItemsInCart = useSelector((state) => state.cart.numItemsInCart);
  console.log(cartItems);
  useEffect(() => {
    dispatch(updateFromLocalStorage());
  }, [dispatch]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const promoValue = (e) => {
    setPromo(e.target.value);
  };
  const promoCheck = () => {
    if (promo === "unwanted") {
      toast.success("You wrote a true Promo code");
      setPromo("");
      cartTotal = cartTotal - 5;
    } else {
      toast.error("Your Promo code is incorrect. Please write another.");
      setPromo("");
    }
  };

  const cardAdd = () => {
    if (inputValue.length === 16) {
      toast.success("Your card is added successfully");
    } else {
      toast.error("Please! The length of the card number must be 16 digits");
    }
  };

  return (
    <div className="home">
      <div className="container mx-auto mt-16 p-4">
        <Toaster />
        <div className="flex flex-col lg:flex-row gap-10 justify-center">
          <div className="flex flex-col gap-5 w-full lg:w-2/3">
            {cartTotal !== 0 ? (
              cartItems.map((item) => (
                <div key={item.customID} className="flex flex-col lg:flex-row items-center justify-between bg-gray-500 p-3 rounded-xl">
                  <img
                    src={item.img[0]}
                    alt=""
                    className="w-32 h-32 rounded-xl"
                  />
                  <div className="flex flex-col gap-5">
                    <h1 className="text-xl font-bold capitalize">{item.name}</h1>
                    <p className="text-lg capitalize text-lime-100 font-semibold">
                      {item.category}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p className="text-white">Food's price:</p>
                    <h1 className="text-2xl font-extrabold font-serif">${item.price}</h1>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        dispatch(
                          editItem({
                            id: item.customID,
                            amount: item.amount - 1,
                          })
                        )
                      }
                      className="text-center text-3xl text-white bg-gray-400 font-extrabold hover:opacity-75 w-12 h-12 rounded-xl"
                    >
                      -
                    </button>
                    <input
                      type="text"
                      value={item.amount}
                      readOnly
                      className="text-center font-semibold border-none w-12 h-12 rounded-xl bg-gray-700 text-white"
                    />
                    <button
                      onClick={() =>
                        dispatch(
                          editItem({
                            id: item.customID,
                            amount: item.amount + 1,
                          })
                        )
                      }
                      className="text-center text-3xl text-white bg-gray-400 font-extrabold hover:opacity-75 w-12 h-12 rounded-xl"
                    >
                      +
                    </button>
                  </div>
                  <button className="button" onClick={() => dispatch(removeItem({ id: item.customID }))}>
                    <svg viewBox="0 0 448 512" className="svgIcon">
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                    </svg>
                  </button>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center">
                <p className="font-bold text-xl opacity-75 text-black">
                The cart is empty
                </p>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-5 w-full lg:w-1/3 bg-[#212121d4] p-5 rounded-2xl">
            <h1 className="text-xl font-extrabold text-accent">
              Order Summary:
            </h1>
            <div className="flex flex-col gap-5 border-b-2 border-b-slate-600 pb-5">
              <p className="text-secondary font-bold">
                Enter your card number:
              </p>
              <input
                placeholder="(only 16 numbers)"
                className="text-white border-2 h-9 border-[#8707ff] rounded-lg p-2.5 bg-transparent focus:outline-none focus:ring-4 focus:ring-[#8707ff]/60"
                name="text"
                type="number"
                value={inputValue}
                onChange={handleChange}
              />
              <button onClick={cardAdd} className="btn">
                <span>Add</span>
              </button>
            </div>
            <div className="flex justify-center text-center"> <FaRegCreditCard size={70} inputValue={inputValue} /></div>
            <div className="flex flex-col gap-2 border-b-2 border-b-slate-600 pb-5">
              <div className="flex justify-between px-5">
                <h2 className="text-white font-bold">Product price:</h2>
                <p className="text-emerald-500 text-xl">${cartTotal}</p>
              </div>
              <div className="flex justify-between px-5">
                <h2 className="text-white font-bold">Shipping:</h2>
                <p className="text-blue-500 text-xl">$5</p>
              </div>
            </div>
            <div className="flex justify-between px-5">
              <h1 className="text-fuchsia-400 text-3xl font-bold">All:</h1>
              <p className="text-2xl text-white font-semibold">${cartTotal + 3}</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
  );
}

