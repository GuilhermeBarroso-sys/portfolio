import myPhoto from "../../assets/me.jpeg";
import { AboutMe } from "../AboutMe";
import { Projects } from "../Projects";
import { Sidebar } from "../Sidebar";

export function Home() {
	const myName = "Guilherme Barroso";
	const myJob = "Web Developer";
	return (
		<div className=" flex md:flex-row flex-col justify-center items-start relative w-full">


			<Sidebar myPhoto={myPhoto} myName={myName} myJob={myJob}/>


        
			<div className=" bg-slate-700 min-h-screen w-full  self-stretch">
				<h1 className="text-center mt-16 text-white text-6xl "> Welcome 👋 </h1>
				<section className="md:w-4/5 w-full ">
					<AboutMe />
				</section>
				<section className="md:w-4/5 w-full text-center ">
					<Projects />
				</section>
				<br />
			</div>
		</div>
	
		
	
	);
}