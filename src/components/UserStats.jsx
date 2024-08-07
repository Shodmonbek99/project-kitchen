"use client";
import React from "react";

export default function UserStats({user}) {
console.log(user);
const creationTime = user.metadata.creationTime;

const date = creationTime.split(", ")[1].split(" ")[0] + " " + creationTime.split(", ")[1].split(" ")[1] + " " + creationTime.split(", ")[1].split(" ")[2];
  return (
    <>
      <div className="stats shadow">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Food </div>
          <div className="stat-value text-primary">{date}</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Your Email</div>
          <div className="text-xl font-bold text-secondary">{user.email}</div>
          <div className="stat-desc"></div>
        </div>

        <div className="stat flex justify-between items-center">
          <div className="text-2xl font-bold">{user.displayName}</div>
          <div className="stat-figure text-secondary">
            <div className="avatar online">
              <div className="w-16 rounded-full">
                <img src={user.photoURL} />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
