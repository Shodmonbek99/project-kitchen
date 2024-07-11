// "use client";
// import React from "react";
// import "../static/Login.css";
// import { Link, Form, useActionData } from "react-router-dom";
// import { useEffect } from "react";
// // react icons
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebookF } from "react-icons/fa";
// import { LuLogIn } from "react-icons/lu";
// import { IoMdArrowRoundForward } from "react-icons/io";

// import { UseSignup } from "../hooks/useSignup";

// export const action = async ({ request }) => {
//   let formData = await request.formData();
//   let email = formData.get("Email");
//   let photo = formData.get("Photo");
//   let password = formData.get("Password");
//   let name = formData.get("Name");

//   return { email, password, name, photo };
// };

// export default function Register() {
//   let userSignup = useActionData();
//   const { SignupWithGoogle, SigupWithPassword, user, error } = UseSignup();

//   useEffect(() => {
//     if (userSignup)
//       SigupWithPassword(
//         userSignup.email,
//         userSignup.password,
//         userSignup.name,
//         userSignup.photo
//       );
//     console.log(userSignup);
//   }, [userSignup]);

//   return (
//       <div className="relative">
//         <video
//           autoPlay
//           loop
//           muted
//           className="absolute w-full h-full object-cover "
//           preload="auto"
//         >
//           <source src=" https://videos.pexels.com/video-files/5780433/5780433-uhd_2560_1440_24fps.mp4
// " type="video/mp4" />
//         </video>

//       <div className="max-w-[400px] mx-auto min-h-screen grid place-items-center">
//         <div className="relative z-10  ">
//           <Form method="post" className="form bg-gray-300 shadow-gray opacity-95">
//             <div className="title flex items-center">
//               Register
//             </div>
//             <input
//               className="input"
//               name="Name"
//               placeholder="Enter Name"
//               type="text"
//             />
//             <input
//               className="input"
//               name="Photo"
//               placeholder="Enter Photo Url"
//               type="url"
//             />
//             <input
//               className="input"
//               name="Email"
//               placeholder="ENter Email"
//               type="email"
//             />
//             <input
//               className="input"
//               name="Password"
//               placeholder="New Password"
//               type="password"
//             />
//             <div className="login-with">
//               <Link to="/login">
//                 <div className="button-log">
//                   <span className="font-bold"><LuLogIn  />
//             </span>
//                 </div>
//               </Link>

//               <div className="button-log" onClick={SignupWithGoogle}>
//               <FcGoogle /> buni bosganda Google orqali ro'yxatdan o'tishi kerak shuni ishlatib ber
//               </div>
//                 </div>
//             <button className="button-confirm btn-outline btn-accent" type="submit">Register</button>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect } from "react";
import "../static/Login.css";
import { Link, Form, useActionData } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { LuLogIn } from "react-icons/lu";
import { IoMdArrowRoundForward } from "react-icons/io";
import { UseSignup } from "../hooks/useSignup";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("Email");
  let photo = formData.get("Photo");
  let password = formData.get("Password");
  let name = formData.get("Name");

  return { email, password, name, photo };
};

export default function Register() {
  let userSignup = useActionData();
  const { SignupWithGoogle, SigupWithPassword, user, error } = UseSignup();

  useEffect(() => {
    if (userSignup) {
      SigupWithPassword(
        userSignup.email,
        userSignup.password,
        userSignup.name,
        userSignup.photo
      );
    }
  }, [userSignup, SigupWithPassword]);

  return (
    <div className="relative">
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover"
        preload="auto"
      >
        <source
          src="https://videos.pexels.com/video-files/5780433/5780433-uhd_2560_1440_24fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="max-w-[400px] mx-auto min-h-screen grid place-items-center">
        <div className="relative z-10">
          <Form method="post" className="form bg-gray-300 shadow-gray opacity-95">
            <div className="title flex items-center">
              Register
            </div>
            <input
              className="input"
              name="Name"
              placeholder="Enter Name"
              type="text"
            />
            <input
              className="input"
              name="Photo"
              placeholder="Enter Photo Url"
              type="url"
            />
            <input
              className="input"
              name="Email"
              placeholder="Enter Email"
              type="email"
            />
            <input
              className="input"
              name="Password"
              placeholder="New Password"
              type="password"
            />
            <div className="login-with">
              <Link to="/login">
                <div className="button-log">
                  <span className="font-bold">
                    <LuLogIn />
                  </span>
                </div>
              </Link>
              <div className="button-log" onClick={SignupWithGoogle}>
                <FcGoogle />
              </div>
            </div>
            <button className="button-confirm btn-outline btn-accent" type="submit">
              Register
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
}
