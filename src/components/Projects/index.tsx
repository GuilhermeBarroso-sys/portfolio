import todolist from "../../assets/todo.png";
import movies from "../../assets/movies.png";
import finances from "../../assets/finances.png";

import { useState } from "react";


export function Projects() {
	const [projects] = useState([{
		image: todolist,
		name: "Todo list",
		description: "A simple todolist to check your tasks!",
		url: "https://todolist-react-ts.vercel.app",

	},
	{
		image: finances,
		name: "Finances control",
		description: "A finance control website",
		url: "https://efinances-front-66my7st3t-guilhermebarroso-sys.vercel.app/",

	},
	{
		image: movies,
		name: "TMDB project ",
		description: "See which movie is in trending (only github)",
		url: "https://github.com/GuilhermeBarroso-sys/TMDB-Desafio-Front-end",

	}]);
	return (
		<>
			<h2 className="md:ml-12 md:text-left text-center text-2xl md:text-2xl xl:text-3xl mt-12 text-white font-bold mb-2">Some of my projects</h2>
			<p className="md:ml-12 md:text-justify text-center text-lg mt-4 text-slate-300 font mb-10 md:px-0 px-10" >These projects are open-source, you can also find it and more in my <a href = "https://github.com/guilhermebarroso-sys" target={"_blank"} className="text-[#20c997] font-extrabold hover:brightness-90" rel="noreferrer">github </a>:D  </p>

			<div className=" flex xl:w-full w-5/6 mx-auto flex-col justify-center  items-center xl:flex-row xl:justify-around xl:items-start">
				{projects.map(({name,description,image,url}) => {
					return (
						<div key={name} className=" md:w-full md:my-4 md:mx-5 w-full  my-10 bg-slate-600 hover:bg-slate-500 h-96 rounded-md text-center"> {/*text-[#20c997]*/}
							<div className="mt-5">
								<img src ={image} className="w-20 mx-auto mt-5" /> 
							</div>
							<h3 className="text-2xl text-white text-center mt-5">{name}</h3>
							<div className=" h-28 text-center flex-nowrap mb-12">
								<p className="text-slate-300  text-md text-center mt-2 mb-5 px-2 "> {description} </p>
							</div>
							<a href={url} target={"_blank"} className="bg-[#2db98f]  hover:bg-[#44c29c] text-white font-bold  py-2 px-4 rounded" rel="noreferrer">Go</a>
						</div>
					);
				})}
			</div>
	
		</>
	);
}