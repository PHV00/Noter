"use client";

import { useRouter } from "next/navigation";
import * as React from "react";
import { signOut, useSession } from "next-auth/react";

export type NavBarProps = {
  loginFunction?:()=>void;
  logoutFunction?: ()=>void;
}

export default function NavBar({
  loginFunction = ()=>{},
  logoutFunction = ()=>{signOut();}
}:NavBarProps) {
  const router = useRouter();

  const { status } = useSession();

  return (
    <div className="w-full h-1/12 border-b-2">
        <div className="px-12 w-full h-full flex items-center justify-between">
            <div className="w-[5vw]">
                <h1 onClick={()=>{router.push("/")}} className="italic font-bold text-2xl">Noter</h1>
            </div>
            {status == "unauthenticated" ? (
              <div className="w-1/12 cursor-pointer">
                  <button 
                    onClick={()=>{loginFunction()}}
                    className="w-full rounded-md bg-amber-200 p-1">
                    SingIn
                  </button>
              </div>
            ):(
              <div className="w-1/12 cursor-pointer">
                  <button 
                    onClick={()=>{logoutFunction()}}
                    className="w-full rounded-md bg-red-200 p-1">
                    SingOut
                  </button>
              </div>
            )}
        </div>
    </div>
  );
}