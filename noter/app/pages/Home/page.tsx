"use client"

import Navbar from "@/app/components/NavBar";
import Image from "next/image";
import LittleWriter from "../../../public/LittleWriter.svg";

export default function Home(){
    
    return (
        <div className="w-screen h-screen ">
            <Navbar></Navbar>
            <div className=" mt-[5vw] flex flex-row justify-center items-center">

                <div className="w-1/2 h-full flex flex-row justify-center">
                    <Image
                    alt="little noter boy "
                    quality={100}
                    src={LittleWriter}
                    width={500}
                    height={500}
                    className="border-2 border-black rounded-md object-cover"/>
                </div>

                <div className="w-1/2 h-full">
                    <h1 className="text-center text-6xl font-bold">
                        Wellcome to Noter
                    </h1>
                    <h2 className="mt-[5vw] text-center text-4xl w-11/12">
                        Your notes anywhere and anytime, click on Sign in to get started right now.    
                    </h2>
                    {/* <div className="w-1/3 h-[3vw] justify-center rounded-md border-1 border-solid border-black flex flex-row">
                        <input className="w-3/4 h-full pl-[1vw] focus:outline-none" placeholder="Try write something ..."></input>
                        <svg className="w-1/4 h-1/4" ></svg>
                    </div> */}

                </div>

            </div>
        </div>
    );
}