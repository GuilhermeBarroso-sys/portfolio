import { useState } from "react";
import github from "../../../assets/github.png";
export function Contacts() {
	const [contacts] = useState([
		{
			icon: 	<svg xmlns="http://www.w3.org/2000/svg" className="md:h-4 md:w-4 h-6 xl:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
			description: "Rio de Janeiro - Brazil",
		},
		{
			icon: 	<svg xmlns="http://www.w3.org/2000/svg" className="md:h-4 md:w-4 h-6 xl:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
			description: "+55 (24) 999367444",
		},
		{
			icon: <svg xmlns="http://www.w3.org/2000/svg" className="md:h-4 md:w-4 h-6 xl:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
				<path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
			</svg>,
			description: "guibarrosodeoliveira5@gmail.com"
		}
	]);
	return (
		<nav>
			<div className="text-white ">
				<h2 className="w-full md:w-5/6 mx-auto text-2xl md:text-left font-semibold" >Contacts</h2>
				{
					contacts.map(({icon,description}) => {
						return (
							<div key={description} className="w-5/6 mx-auto flex md:justify-start justify-center items-start my-3">
								{icon}
								<span className="ml-2 text-sm md:text-md ">{description}</span>
							</div>
						);
					})
				}
			</div>
		</nav>
	);
}