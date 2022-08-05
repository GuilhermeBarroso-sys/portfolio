import { useState } from "react";

export function Skills() {
	const [skills] = useState(["Javascript","Typescript","Node.js","React.js","Unit Tests","Mysql","AWS","Serverless","DynamoDB","Linux","Git","Docker",]);
	return (
		<div className="text-white">
			<h2 className="md:w-5/6 w-full mx-auto text-center text-2xl md:text-left font-semibold" >Skills</h2>
			<div className="md:w-5/6 w-full mx-auto md:block flex items-center justify-center  text-lg text-left">
  
				<ul className=" list-disc list-inside  marker:text-white text-white">
					{skills.map(skill => { return <li key = {skill}> {skill} </li>; })}
				</ul>
			</div>
		</div>
	);
}