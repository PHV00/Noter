"use client";

import * as React from "react";

export type ConfirmModelProps ={
    onClose?: () => void ;
    onConfirm?: ()=> void ;
    onCancel?: ()=> void ;
}

export default function ConfirmModal({onClose=()=>{} , onConfirm= ()=>{} , onCancel=()=>{}}:ConfirmModelProps) {

  return (
    <div >
        {/* if user click in darkness part, will close the modal, so to do this I set a state of showLoginModal with false to dont show this content */}
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-10" onClick={()=>{onClose()}}>
            <div className="w-1/3 h-1/2 flex flex-col items-center justify-around border-1 border-solid border-black rounded-md bg-white">
                <h1 className="w-full text-2xl font-bold text-center">Do you confirm this action?(this action cannot be change!)</h1>
                <div className="flex flex-row w-full justify-between px-[20%]">
                    <div className="w-1/3 h-[10vh] flex flex-row border-1 border-solid border-black rounded-md bg-amber-200 ">
                        <button className="w-full h-full flex items-center justify-center cursor-pointer" onClick={()=>{onConfirm}}>
                            Yes
                        </button>
                    </div>
                    <div className="w-1/3 h-[10vh] flex flex-row border-1 border-solid border-black rounded-md bg-red-300">
                        <button className="w-full h-full text-white flex items-center justify-center cursor-pointer" onClick={()=>{onCancel();}}>
                            No
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}