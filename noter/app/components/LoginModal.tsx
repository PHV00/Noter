"use client";

import * as React from "react";
import Image from "next/image";
import GoogleIcon from "../../public/GoogleIcon.svg"
import GitHubIcon from "../../public/GithubIcon.svg";

import { signIn } from "next-auth/react";

export type LoginModelProps ={
    onClose?: () => void ;
}

export default function LoginModal({onClose=()=>{}}:LoginModelProps) {

  return (
    <div >
        {/* if user click in darkness part, will close the modal, so to do this I set a state of showLoginModal with false to dont show this content */}
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-10" onClick={()=>{onClose()}}>
            <div className="w-1/3 h-1/2 flex flex-col items-center justify-around border-1 border-solid border-black rounded-md bg-white">
                <h1 className="w-full text-4xl font-bold text-center">Select a singIn method</h1>
                <div className="w-2/3 h-[10vh] flex flex-row border-1 border-solid border-black rounded-md">
                    <button className="w-full h-full flex items-center justify-center cursor-pointer" onClick={()=>{console.log("Google")}}>
                        <Image src={GoogleIcon} alt="Google" width={27} height={27}></Image>
                    </button>
                </div>
                <div className="w-2/3 h-[10vh] flex flex-row border-1 border-solid border-black rounded-md bg-indigo-400">
                    <button className="w-full h-full text-white flex items-center justify-center cursor-pointer" onClick={()=>{signIn("github", { callbackUrl: "/pages/ManagementNotes/" })}}>
                        <Image src={GitHubIcon} alt="GitHub" width={27} height={27}></Image>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}