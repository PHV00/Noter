"use client"

import Navbar from "@/app/components/NavBar";

import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { redirect } from "next/navigation";

export default function UpdateNote(){
    const router = useRouter();
    const { status } = useSession();
    
    if(status == "unauthenticated") redirect("/pages/Home");    

    const urlId = Number(useParams().id);

    return (
        <div className="w-screen h-screen ">
            <Navbar></Navbar>
            <div className=" mt-[5vw] flex flex-row justify-center items-center">

                <div className="w-1/2 h-full">
                    <div className="w-full h-[3vw] justify-center rounded-md border-1 border-solid border-black flex flex-row">
                        <input className="w-full h-full pl-[1vw] focus:outline-none" placeholder="Write a new tittle ..."></input>
                    </div>
                    
                    <div className="mt-[1vw]">
                        <textarea className="p-[1vw] w-full h-[28vw] rounded-md border-1 border-black" placeholder="Write a new text ....."></textarea>
                    </div>

                    <div className="mt-[1vw] h-[2vw] flex flex-row justify-between">
                        
                        <button className="rounded-md border-1 border-black w-2/5 bg-amber-200 cursor-pointer hover:scale-105 duration-200" onClick={()=>{router.back()}}>Save Changes</button>
                    
                        <button className="rounded-md border-1 border-black w-2/5 bg-red-300 cursor-pointer hover:scale-105 duration-200" onClick={()=>{router.back()}}>Discart Changes</button>
                    
                    </div>
                </div>

            </div>
        </div>
    );
}