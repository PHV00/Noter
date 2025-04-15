"use client"

import Navbar from "@/app/components/NavBar";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

export default function NewNote(){
    const router = useRouter();
    const { status } = useSession();
    
    if(status == "unauthenticated") redirect("/pages/Home");    

    return (
        <div className="w-screen h-screen ">
            <Navbar></Navbar>
            <div className=" mt-[5vw] flex flex-row justify-center items-center">

                <div className="w-1/2 h-full">
                    <div className="w-full h-[3vw] justify-center rounded-md border-1 border-solid border-black flex flex-row">
                        <input className="w-full h-full pl-[1vw] focus:outline-none" placeholder="Try write something to your tittle ..."></input>
                    </div>
                    
                    <div className="mt-[1vw]">
                        <textarea className="p-[1vw] w-full h-[28vw] rounded-md border-1 border-black" placeholder="Try to type your text ....."></textarea>
                    </div>

                    <div className="mt-[1vw] h-[2vw] flex flex-row justify-between">
                        
                        <button className="rounded-md border-1 border-black w-2/5 bg-amber-200 cursor-pointer hover:scale-105 duration-200" onClick={()=>{router.back()}}>Save</button>
                    
                        <button className="rounded-md border-1 border-black w-2/5 bg-red-300 cursor-pointer hover:scale-105 duration-200" onClick={()=>{router.back()}}>Discart</button>
                    
                    </div>
                </div>

            </div>
        </div>
    );
}