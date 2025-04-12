"use client";

import { useRouter } from "next/navigation";
import * as React from "react";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="w-full h-1/12 border-b-2">
        <div className="px-12 w-full h-full flex items-center justify-between">
            <div className="w-[5vw]">
                <h1 onClick={()=>{router.push("/")}} className="italic font-bold text-2xl">Noter</h1>
            </div>
            <div className="w-[5vw]">
                <button 
                  onClick={()=>{router.push("/pages/NewNotes")}}
                  className="w-full rounded-md bg-amber-200 p-1">
                  Sing In
                </button>
            </div>
        </div>
    </div>
  );
}