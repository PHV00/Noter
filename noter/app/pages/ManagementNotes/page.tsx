"use client";

import Navbar from "../../components/NavBar";
import Image from "next/image";
import SearchIcon from "../../../public/search_icon.svg";
import UpdateIcon from "../../../public/update_icon.svg";
import DeleteIcon from "../../../public/delete_icon.svg";

import { useLayoutEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { redirect } from "next/navigation";
import ConfirmModal from "../../components/ConfirmModal";
import { IAnnotationManagement } from "../../lib/interfaces/interface";
import { deleteAnnotation, getAllAnnotationByUser } from "../../actions/annotationActions";

export default function ManagementNotes(){
    const router = useRouter();

    const { data: session, status } = useSession()

    if(status == "unauthenticated") redirect("/pages/Home");

    const [searchTerm, setSearchTerm] = useState("");
    const [showConfirmationModal,setConfirmModelState] = useState(false);

    const [annotations,setAnnotations] = useState<IAnnotationManagement[]>([]);

    const [activitySelectedId,setActivitySelectedId] = useState<number>(0);

    async function getAnnotations(userId:string) {
        setAnnotations(await getAllAnnotationByUser(userId));
    }

    useLayoutEffect(()=>{
        if(session?.user?.id){
            getAnnotations(session?.user?.id);
        }
        // getAnnotations("cmakgeqqh0000hqh0u5y1ba9o");
    },[session])

    const filtredData = annotations.filter(
        (annotations)=>
            annotations.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            annotations.content.includes(searchTerm.toLowerCase()) ||
            annotations.creatAt.toISOString().includes(searchTerm) ||
            annotations.updateAt.toISOString().includes(searchTerm)
    )

    return (
        <div className="w-screen h-screen">
            <Navbar></Navbar>
            <div>

                <div className=" mt-[5vw] w-full px-[20%] flex flex-row justify-between">
                    <button className=" border-1 border-solid border-black rounded-md w-2/12 h-[5vh] cursor-pointer hover:scale-105 duration-200" onClick={()=>{router.push("/pages/NewNote")}}>New Note</button>
                    <div className="w-4/12 h-[5vh] flex">
                        <Image src={SearchIcon}  alt="searchIcon" width={23} height={23} ></Image>
                        <input type="text" name="search" onChange={(e) => setSearchTerm(e.target.value)} value={searchTerm} className="w-full p-[1vh] ml-[1vw] border-1 border-solid border-black rounded-md" placeholder="Search any field ..."></input>
                    </div>
                </div>

                <div className="w-full px-[20%] my-[4vh]">
                    <table className="w-full">
                        <thead>
                            <tr className="font-bold">
                                <th className="w-1/5">Title</th>
                                <th className="w-1/5">Create At</th>
                                <th className="w-1/5">Last Update</th>
                                <th className="w-1/5">Update</th>
                                <th className="w-1/5">Delete</th>
                            </tr>
                        </thead>
                            <tbody>
                            {
                                filtredData && filtredData.length > 0 ? (
                                    (filtredData).map((item)=>(
                                        <tr className="h-[8vh] rounded-md border-1 border-solid border-black" id={String(item.id)} key={String(item.id)}>
                                            <td className="w-4/12">
                                                <div className="flex items-center justify-center text-center">
                                                    {item.title}
                                                </div>
                                            </td>
                                            <td className="w-1/12">
                                                <div className="flex items-center justify-center text-center">
                                                    {item.creatAt.toLocaleDateString()}
                                                </div>
                                            </td>
                                            <td className="w-1/12">
                                                <div className="flex items-center justify-center text-center">
                                                    {item.updateAt.toLocaleDateString()}
                                                </div>
                                            </td>
                                            <td className="w-1/12">
                                                 <div className="flex items-center justify-center cursor-pointer hover:scale-115 transition-all duration-200">
                                                    <Image src={UpdateIcon} alt="updateIcon" width={23} height={23} onClick={(e)=>{
                                                        // router.push("/pages/updatenote/"+e.currentTarget.id.toString());}
                                                        router.push("/pages/UpdateNote/"+item.id);
                                                    }}></Image>
                                                </div>
                                            </td>
                                            <td className="w-1/12">
                                                <div className="flex items-center justify-center cursor-pointer hover:scale-115 transition-all duration-200">
                                                    <Image onClick={()=>{
                                                        setActivitySelectedId(item.id);
                                                        setConfirmModelState(true);
                                                    }} 
                                                    src={DeleteIcon} alt="deleteIcon" width={23} height={23} ></Image>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ):( 
                                    <tr className="w-[20vw] flex items-center justify-center text-center">
                                        <td>No contents avaible</td>
                                    </tr>
                                )
                            }
                            </tbody>    
                    </table>
                    {showConfirmationModal ? 
                    (
                    <>
                        <ConfirmModal onClose={()=>{setConfirmModelState(false)}} onCancel={()=>{setConfirmModelState(false)}} onConfirm={() => deleteAnnotation(activitySelectedId)}></ConfirmModal>
                    </>
                    ):
                    (<></>)
                    }
                </div>

            </div>

        </div>
    );
}