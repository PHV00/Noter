"use client"

import Navbar from "../../components/NavBar";

import { ICreateAnnotation } from "../../lib/interfaces/interface";
import { createAnnotation } from "../../actions/annotationActions";
import { creatAnnotationSchema, CreateAnnotationSchema } from "../../lib/schemas/schema";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLayoutEffect, useState } from "react";

export default function NewNote(){
    const router = useRouter();
    
    const { data: session, status } = useSession()

    function handleCreateAnnotation(data:ICreateAnnotation){
        if(session?.user?.id){
            createAnnotation(data.title,data.content,session?.user?.id);
        }
    }
    
    useLayoutEffect(()=>{    
        if(status == "unauthenticated") redirect("/pages/Home");
    })

    const { register, handleSubmit, formState:{errors} , clearErrors } = useForm<CreateAnnotationSchema>({
        resolver: zodResolver(creatAnnotationSchema),
    });

    return (
        <div className="w-screen h-screen ">
            <Navbar></Navbar>
            <div className=" mt-[5vw] flex flex-row justify-center items-center">
                
                <form onSubmit={handleSubmit(handleCreateAnnotation)} className="w-1/2 h-full">
                    <div>
                        <div className="w-full h-[3vw] justify-center rounded-md border-1 border-solid border-black flex flex-row">
                            <input 
                                {...register("title")}
                                className="w-full h-full pl-[1vw] focus:outline-none" placeholder="Try write something to your tittle ...">    
                            </input>
                        </div>
                        
                        <div className="mt-[1vw]">
                            <textarea 
                                {...register("content")}
                                className="p-[1vw] w-full h-[28vw] rounded-md border-1 border-black" placeholder="Try to type your text .....">                                
                            </textarea>
                        </div>

                        <div className="mt-[1vw] h-[2vw] flex flex-row justify-between">
                            
                            <button type="submit" className="rounded-md border-1 border-black w-2/5 bg-amber-200 cursor-pointer hover:scale-105 duration-200" onClick={()=>{router.back()}}>Save</button>
                        
                            <button className="rounded-md border-1 border-black w-2/5 bg-red-300 cursor-pointer hover:scale-105 duration-200" onClick={()=>{router.back()}}>Discart</button>
                        
                        </div>
                    </div>                    
                </form>    
            </div>
        </div>
    );
}