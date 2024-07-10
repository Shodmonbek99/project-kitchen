// import React, { useContext, useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { GlobalContext } from "../context/useContextGlobal";
// import { signOut } from "firebase/auth";
// import { auth } from "../firebase/firebaseConfig";
// import toast, { Toaster } from "react-hot-toast";
// import "../static/button.css";
// // react icons
// import { FaShopify } from "react-icons/fa6";
// import { TiShoppingCart } from "react-icons/ti";
// import { IoIosHome } from "react-icons/io";
// import { FaCartPlus } from "react-icons/fa";
// import { FcStatistics } from "react-icons/fc";
// import { BiSolidMessageSquareAdd } from "react-icons/bi";
// import { RiHeartAdd2Fill  } from "react-icons/ri";
// import { GiHeartMinus } from "react-icons/gi";

// import {
//   clearCart,
//   editItem,
//   updateFromLocalStorage,
// } from "../features/cart/CartSlice";

// const Navbar = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart.cartItems);
 
//   const cartTotal = useSelector((state) => state.cart.cartTotal);
//   const numItemsInCart = useSelector((state) => state.cart.numItemsInCart);
//   const { user } = useContext(GlobalContext);
//   useEffect(() => {
//     toast.success(`Welcome ${user.displayName}`);
//   }, []);

//   useEffect(() => {
//     dispatch(updateFromLocalStorage());
//   }, [dispatch]);

//   const signOutFunc = () => {
//     signOut(auth)
//       .then(() => {
//         console.log("Logout");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <header className="header-area">
//       <div className="navbar top-0 left-0 right-0 z-50 bg-gray-100 shadow-lg border-none px-10">
//         <div className="navbar-start gap-4">
//           <div className="dropdown flex items-center gap-5">
//             <label tabIndex="0" className="btn btn-ghost btn-circle">
//               <Toaster />
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h7"
//                 />
//               </svg>
//             </label>
//             <ul
//               tabIndex="0"
//               className="menu menu-compact dropdown-content mt-32 p-2 shadow-lg bg-base-100 rounded-box w-52"
//             >
//              <li><Link to="/"><IoIosHome size={20} /> Homepage</Link></li>
//               <li><Link to="/cart"><FaCartPlus size={20} /> Cart</Link></li>
//               <li><Link to="/statics"><FcStatistics size={20} />Statics</Link></li>
//             </ul>
//           </div>
//           <Link to="/create"><BiSolidMessageSquareAdd className="cursor-pointer" size={32} /></Link>

//         </div>
//         <div className="navbar-center">
//           <a className="btn btn-ghost normal-case text-xl">Shodmonbek Akbarov</a>
//         </div>
//         <div className="navbar-end">
//           <div className="flex gap-4 items-center">
//             <button
//               onClick={() => document.getElementById("my_modal_2").showModal()}
//               className="indicator"
//             >
//               <TiShoppingCart size={32} />
//           <span className="badge badge-warning indicator-item w-2">
//                 {numItemsInCart}
//               </span>
//             </button>
//           </div>
//           <dialog id="my_modal_2" className="modal">
//             <div className="modal-box max-w-[377px]">
//               <div>
//                 {cartTotal !== 0 ? (
//                   <div className="flex justify-between mb-8">
//                     <h1 className="font-bold text-lg">
//                       CART ({cartItems.length})
//                     </h1>
//                     <button
//                       onClick={() => dispatch(clearCart())}
//                       className="link text-[15px] btn btn-active btn-primary"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 ) : (
//                   <div></div>
//                 )}
//                 {cartTotal !== 0 ? (
//                   cartItems.map((item) => (
//                     <div
//                       key={item.customID} 
//                       className="flex justify-between items-center mb-6"
//                     >
//                       <div className="flex gap-4 items-center">
//                         <img
//                           src={item.img[0]}
//                           alt={item.name}
//                           className="w-16 h-16 rounded-xl"
//                         />
//                         <div>
//                           <h2 className="font-bold">{item.name}</h2>
//                           <p className="font-bold text-sm opacity-75">
//                           💲  {item.price}
//                           </p>
//                         </div>
//                       </div>
//                       <div className="max-w-24 flex justify-center items-center">
//                         <button
//                           onClick={() =>
//                             dispatch(
//                               editItem({
//                                 id: item.customID,
//                                 amount: item.amount - 1,
//                               })
//                             )
//                           }
//                           className="text-center border-none bg-red-400 font-extrabold hover:opacity-65 w-8 h-8"
//                         >
//                           <span className="opacity-65 hover:opacity-100">
//                           <GiHeartMinus size={20} />
//                           </span>
//                         </button>

//                         <input
//                           type="text"
//                           value={item.amount}
//                           readOnly
//                           className="text-center font-semibold border-none bg-base-300 w-8 h-8"
//                         />
//                         <button
//                           onClick={() =>
//                             dispatch(
//                               editItem({
//                                 id: item.customID,
//                                 amount: item.amount + 1,
//                               })
//                             )
//                           }
                          
//                           className="text-center border-none bg-red-400 font-extrabold hover:opacity-65 w-8 h-8"
//                         >
//                           <span className="opacity-65 hover:opacity-100">
//                           <RiHeartAdd2Fill  size={20}/>
//                           </span>
//                         </button>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="flex justify-center items-center">
//                     <p className="font-bold text-sm opacity-75 text-black">
//                       No items in cart
//                     </p>
//                   </div>
//                 )}
//                 {cartTotal !== 0 ? (
//                   <div>
//                     <p className="flex justify-between mb-6">
//                       <span>All:</span>
//                       <span className="font-bold">💲{cartTotal}</span>
//                     </p>
//                     <Link to="/cart">
//                       <div className="flex justify-center">
//                       <button className="  btn btn-success">
//                         Cart Checkout
//                       </button>
//                       </div>
//                     </Link>
//                   </div>
//                 ) : (
//                   <div></div>
//                 )}
//               </div>
//             </div>
//             <form method="dialog" className="modal-backdrop">
//               <button className="btn btn-active btn-gray-300 cyrsor pointer">close</button>
//             </form>
//           </dialog>
//           <div className="dropdown dropdown-end ml-5">
//             <div
//               tabIndex={0}
//               role="button"
//               className="btn btn-ghost btn-circle avatar"
//             >
//               <div className="w-10 rounded-full">
//                 <img alt="" src={user.photoURL} />
//               </div>
//             </div>
//             <ul
//               tabIndex={0}
//               className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
//             >
//               <li>
//                 <a className="justify-between">{user.displayName}</a>
//               </li>
//               <li>
//                 <a>Settings</a>
//               </li>
//               <li>
//                 <a onClick={signOutFunc}>Logout</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

// src/components/Navbar.js
import React, { useContext, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/useContextGlobal";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import toast, { Toaster } from "react-hot-toast";
import "../static/button.css";
import Weather from "./Weather"; // Import Weather component
// react icons
import { FaShopify } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { IoIosHome } from "react-icons/io";
import { FaCartPlus } from "react-icons/fa";
import { FcStatistics } from "react-icons/fc";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { RiHeartAdd2Fill  } from "react-icons/ri";
import { GiHeartMinus } from "react-icons/gi";
import {
  clearCart,
  editItem,
  updateFromLocalStorage,
} from "../features/cart/CartSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart.cartTotal);
  const numItemsInCart = useSelector((state) => state.cart.numItemsInCart);
  const { user } = useContext(GlobalContext);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    toast.success(`Welcome ${user.displayName}`);
  }, [user]);

  useEffect(() => {
    dispatch(updateFromLocalStorage());
  }, [dispatch]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const signOutFunc = () => {
    signOut(auth)
      .then(() => {
        console.log("Logout");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <header className="header-area">
      <div className={`navbar top-0 left-0 right-0 z-50 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'} shadow-lg border-none px-10`}>
        <div className="navbar-start gap-4">
          <div className="dropdown flex items-center gap-5">
            <label tabIndex="0" className="btn btn-ghost btn-circle">
              <Toaster />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-32 p-2 shadow-lg bg-base-100 rounded-box w-52"
            >
              <li><Link to="/"><IoIosHome size={20} /> Homepage</Link></li>
              <li><Link to="/cart"><FaCartPlus size={20} /> Cart</Link></li>
              <li><Link to="/statics"><FcStatistics size={20} />Statics</Link></li>
            </ul>
          </div>
          <Link to="/create"><BiSolidMessageSquareAdd className="cursor-pointer" size={32} /></Link>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost normal-case text-xl">Shodmonbek Akbarov</a>
        </div>
        <div className="navbar-end">
          <Weather /> {/* Add Weather component */}
          <div className="flex gap-4 items-center">
            <button
              onClick={() => document.getElementById("my_modal_2").showModal()}
              className="indicator"
            >
              <TiShoppingCart size={32} />
              <span className="badge badge-warning indicator-item w-2">
                {numItemsInCart}
              </span>
            </button>
          </div>
          <dialog id="my_modal_2" className="modal">
            <div className="modal-box max-w-[377px]">
              <div>
                {cartTotal !== 0 ? (
                  <div className="flex justify-between mb-8">
                    <h1 className="font-bold text-lg">
                      CART ({cartItems.length})
                    </h1>
                    <button
                      onClick={() => dispatch(clearCart())}
                      className="link text-[15px] btn btn-active btn-primary"
                    >
                    </button>
                  </div>
                ) : (
                  <div></div>
                )}
                {cartTotal !== 0 ? (
                  cartItems.map((item) => (
                    <div
                      key={item.customID} 
                      className="flex justify-between items-center mb-6"
                    >
                      <div className="flex gap-4 items-center">
                        <img
                          src={item.img[0]}
                          alt={item.name}
                          className="w-16 h-16 rounded-xl"
                        />
                        <div>
                          <h2 className="font-bold">{item.name}</h2>
                          <p className="font-bold text-sm opacity-75">
                          💲  {item.price}
                          </p>
                        </div>
                      </div>
                      <div className="max-w-24 flex justify-center items-center">
                        <button
                          onClick={() =>
                            dispatch(
                              editItem({
                                id: item.customID,
                                amount: item.amount - 1,
                              })
                            )
                          }
                          className="text-center border-none bg-red-400 font-extrabold hover:opacity-65 w-8 h-8"
                        >
                          <span className="opacity-65 hover:opacity-100">
                          <GiHeartMinus size={20} />
                          </span>
                        </button>
                        <input
                          type="text"
                          value={item.amount}
                          readOnly
                          className="text-center font-semibold border-none bg-base-300 w-8 h-8"
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
                          className="text-center border-none bg-red-400 font-extrabold hover:opacity-65 w-8 h-8"
                        >
                          <span className="opacity-65 hover:opacity-100">
                          <RiHeartAdd2Fill  size={20}/>
                          </span>
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="flex justify-center items-center">
                    <p className="font-bold text-sm opacity-75 text-black">
                      No items in cart
                    </p>
                  </div>
                )}
                {cartTotal !== 0 ? (
                  <div>
                    <p className="flex justify-between mb-6">
                      <span>All:</span>
                      <span className="font-bold">💲{cartTotal}</span>
                    </p>
                    <Link to="/cart">
                      <div className="flex justify-center">
                        <button className="btn btn-success">
                          Cart Checkout
                        </button>
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
            </div>
            <form method="dialog" className="modal-backdrop">
              <button className="btn btn-active btn-primary cyrsor pointer"></button>
            </form>
          </dialog>
          <div className="dropdown dropdown-end ml-5">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img alt="" src={user.photoURL} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">{user.displayName}</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={signOutFunc}>Logout</a>
              </li>
            </ul>
          </div>
          <button 
            onClick={toggleDarkMode} 
            className="btn btn-ghost btn-circle ml-4"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

