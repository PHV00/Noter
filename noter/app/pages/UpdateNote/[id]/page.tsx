"use client"

import { getAnnotationById, updateAnnotation } from "../../../actions/annotationActions";
import Navbar from "../../../components/NavBar";
import { IAnnotationValue, IAnnotationValueComplete } from "../../../lib/interfaces/interface";
import { updateAnnotationSchema, UpdateAnnotationSchema } from "../../../lib/schemas/updateAnnotationsSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function UpdateNote(){
    const router = useRouter();

    const { data: session, status } = useSession()
    
    if(status == "unauthenticated") redirect("/pages/Home");    

    const urlId = Number(useParams().id);

    const [annotationValues,setAnnotationsValues] = useState<IAnnotationValueComplete>();
    
    async function getAnnotation(userId:number) {
        setAnnotationsValues(await getAnnotationById(urlId));
    }

    useLayoutEffect(()=>{
        getAnnotation(urlId);
    },[])

    function handleUpdateAnnotation(data:IAnnotationValue){
        if(session?.user?.id && annotationValues){
            console.log("*************")
            console.log(data.title);
            updateAnnotation(data.title,data.content,annotationValues?.id,session?.user?.id);
        }
    }

    const { register, handleSubmit, formState:{errors} , clearErrors } = useForm<UpdateAnnotationSchema>({
        resolver: zodResolver(updateAnnotationSchema),
    });
    

    return (
        <div className="w-screen h-screen ">
            <Navbar></Navbar>
            <div className=" mt-[5vw] flex flex-row justify-center items-center">
                <form onSubmit={handleSubmit(handleUpdateAnnotation)} className="w-1/2 h-full"> 
                    <div className="w-full h-[3vw] justify-center rounded-md border-1 border-solid border-black flex flex-row">
                        <input className="w-full h-full pl-[1vw] focus:outline-none" placeholder="Write a new tittle ..." defaultValue={annotationValues?.title} {...register("title")}></input>
                    </div>
                    
                    <div className="mt-[1vw]">
                        <textarea className="p-[1vw] w-full h-[28vw] rounded-md border-1 border-black" placeholder="Write a new text ....." defaultValue={annotationValues?.content} {...register("content")}></textarea>
                    </div>

                    <div className="mt-[1vw] h-[2vw] flex flex-row justify-between">
                        
                        <button type="submit" className="rounded-md border-1 border-black w-2/5 bg-amber-200 cursor-pointer hover:scale-105 duration-200" onClick={()=>{router.back()}}>Save Changes</button>
                    
                        <button className="rounded-md border-1 border-black w-2/5 bg-red-300 cursor-pointer hover:scale-105 duration-200" onClick={()=>{router.back()}}>Discart Changes</button>
                    
                    </div>
                </form>
            </div>
        </div>
    );
}