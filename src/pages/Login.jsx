import React from "react";
import { Link, Form, useActionData } from "react-router-dom";
import "../static/Login.css";
import useLogin from "../hooks/useLogin";
import { useEffect } from "react";
//react icons
import { FcGoogle } from "react-icons/fc";
import { FaRegRegistered } from "react-icons/fa";

import { UseSignup } from "../hooks/useSignup";

export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("Email");
  let password = formData.get("Password");

  return { email, password };
};

export default function Login() {
  const useSignin = useActionData();
  const { SignInWithPassword } = useLogin();
  const { SignupWithGoogle } = UseSignup();

  useEffect(() => {
    if (useSignin) SignInWithPassword(useSignin.email, useSignin.password);
  }, [useSignin]);

  return (
    <div className="relative h-screen">
       <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover "
          preload="auto"
        >
          <source src=" https://videos.pexels.com/video-files/5533218/5533218-hd_1920_1080_30fps.mp4

" type="video/mp4" />
        </video>
      <div className="max-w-[400px] mx-auto min-h-screen flex items-center justify-center ">
        <div className="relative z-10 bg-green-300 p-6 rounded-lg shadow-lg">
          <Form method="post" className="form">
            <div className="title mb-4 text-center">
              Welcome,
              <br />
              <span>Login</span>
            </div>
            <input
              className="input mb-4 p-2 w-full rounded"
              name="Email"
              placeholder="Email"
              type="email"
            />
            <input
              className="input mb-4 p-2 w-full rounded"
              name="Password"
              placeholder="Password"
              type="password"
            />
            <div className="login-with flex justify-between items-center mb-4">
              <Link to="/register">
                <div className="button-log p-2">
                  <FaRegRegistered size={25} />
                </div>
              </Link>
              <div className="button-log p-2" onClick={SignupWithGoogle}>
                <FcGoogle size={25} />
              </div>
            </div>
            <button className="btn btn-outline btn-info w-full">Login</button>
          </Form>
        </div>
      </div>
    </div>
  );
}
