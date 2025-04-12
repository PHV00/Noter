"use client"

import Navbar from "@/app/components/NavBar";
import Image from "next/image";
import SearchIcon from "../../../public/search_icon.svg";
import UpdateIcon from "../../../public/update_icon.svg";
import DeleteIcon from "../../../public/delete_icon.svg";
import router from "next/router";

import { useState } from "react";

export default function Home(){
    
    const [searchTerm, setSearchTerm] = useState("");

    const notes = [
        {
            id:1,
            title:"The name of the bests films to see with a brother",
            createAt:"06/05/2005",
            lastUpdate:"12/05/2005"
        }
    ]

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
                    <button className=" border-1 border-solid border-black rounded-md w-2/12 h-[5vh]" onClick={()=>{router.push("/pages/NewNotes")}}>New Note</button>
                    <div className="w-4/12 h-[5vh] flex">
                        <Image src={SearchIcon}  alt="searchIcon" width={23} height={23} ></Image>
                        <input className="w-full p-[1vh] ml-[1vw] border-1 border-solid border-black rounded-md " placeholder="Search any field " value={searchTerm}></input>
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
                            {notes && notes.length > 0 ? (
                                (notes).map((item, index) => (<>item</>))
                                ):(
                                <>Não</>
                            )}

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
                                    <div className="flex items-center justify-center cursor-pointer hover:scale-125">
                                        <Image src={UpdateIcon} alt="updateIcon" width={23} height={23}></Image>
                                    </div>
                                </td>
                                <td className="w-1/12">
                                    <div className="flex items-center justify-center cursor-pointer hover:scale-125">
                                        <Image onClick={(e)=>{
                                            // router.push("/pages/updateactivity/"+e.currentTarget.id.toString());}
                                            console.log(e.currentTarget.id.toString());
                                        }} 
                                        src={DeleteIcon} alt="deleteIcon" width={23} height={23} ></Image>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </div>
    );
}