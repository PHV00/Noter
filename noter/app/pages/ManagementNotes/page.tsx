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
import { getAllAnnotationByUser } from "../../actions/annotationActions";

export default function ManagementNotes(){
    const router = useRouter();

    const { data: session, status } = useSession()

    if(status == "unauthenticated") redirect("/pages/Home");

    const [searchTerm, setSearchTerm] = useState("");
    const [showConfirmationModal,setConfirmModelState] = useState(false);

    const [annotations,setAnnotations] = useState<IAnnotationManagement[]>([]);

    const notes = [
        {
            id:1,
            title:"The name of the bests films to see with a brother",
            createAt:"06/05/2005",
            lastUpdate:"12/05/2005"
        }
    ]

    async function getAnnotations(userId:string) {
        setAnnotations(await getAllAnnotationByUser(userId));
    }

    useLayoutEffect(()=>{
        if(session?.user?.id){
            getAnnotations(session?.user?.id);
        }
    },[])

    const filtredData = notes.filter(
        (note)=>
            note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            note.createAt.includes(searchTerm.toLowerCase()) ||
            note.lastUpdate.includes(searchTerm.toLowerCase())
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
                            {/* {notes && notes.length > 0 ? (
                                (notes).map((item, index) => (<>item</>))
                                ):(
                                <>Não</>
                            )} */}

                            <tr className="rounded-md border-1 border-solid border-black" id="1">
                                <td className="w-4/12">
                                    <div className="flex items-center justify-center text-center">
                                        The name of the bests films to see with a brother
                                    </div>
                                </td>
                                <td className="w-1/12">
                                    <div className="flex items-center justify-center">
                                        05/02/2005
                                    </div>
                                </td>
                                <td className="w-1/12">
                                    <div className="flex items-center justify-center">
                                        12/05/2005
                                    </div>
                                </td>
                                <td className="w-1/12">
                                    <div className="flex items-center justify-center cursor-pointer hover:scale-115 transition-all duration-200">
                                        <Image src={UpdateIcon} alt="updateIcon" width={23} height={23} onClick={(e)=>{
                                            // router.push("/pages/updatenote/"+e.currentTarget.id.toString());}
                                            router.push("/pages/UpdateNote/1");
                                        }}></Image>
                                    </div>
                                </td>
                                <td className="w-1/12">
                                    <div className="flex items-center justify-center cursor-pointer hover:scale-115 transition-all duration-200">
                                        <Image onClick={()=>{
                                            setConfirmModelState(true);   
                                        }} 
                                        src={DeleteIcon} alt="deleteIcon" width={23} height={23} ></Image>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                     {showConfirmationModal ? 
                    (
                    <>
                        <ConfirmModal onClose={()=>{setConfirmModelState(false)}} onCancel={()=>{setConfirmModelState(false)}}></ConfirmModal>
                    </>
                    ):
                    (<></>)
                    }
                </div>

            </div>

        </div>
    );
}