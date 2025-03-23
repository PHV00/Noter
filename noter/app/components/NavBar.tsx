"use client";

import * as React from "react";

export default function Navbar() {
  return (
    <div className="w-full h-1/12 border-b-2">
        <div className="pl-12 pr-12 w-full h-full flex items-center justify-between">
            <div className="w-[5vw]">
                <h1 className="italic font-bold text-2xl">Noter</h1>
            </div>
            <div className="w-[5vw]">
                <button className="w-full rounded-md bg-amber-200 p-1">Sing In</button>
            </div>
        </div>
    </div>
  );
}