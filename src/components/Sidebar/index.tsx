import { useState } from "react";
import { Contacts } from "./Contacts";
import { Skills } from "./Skills";


interface SidebarProps {
  myPhoto: string
  myName: string
  myJob: string
}

import github from "../../assets/github.png";
export function Sidebar( { myPhoto , myName, myJob} : SidebarProps) {

	return (
		<div className="w-full  md:w-4/5 xl:w-2/5 bg-slate-800 min-h-screen text-center self-stretch">
        
			<div className="w-52 h-52 rounded-full overflow-hidden border-slate-500 mx-auto mt-16 border-8">
				<img src = {myPhoto} className="w-full" />
			</div>
			<h2 className="text-white mt-4 text-2xl font-semibold">{myName}</h2>
			<small className="text-white mt-4 text-2xl" >{myJob}</small>
			<div className="mt-7">
				<Contacts />
			</div>
			<div className="mt-7">
				<Skills />
			</div>
			
		</div>
      
	);
}