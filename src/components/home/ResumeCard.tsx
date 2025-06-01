import { ArrowRight, CodeXml } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ResumeCard() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <div className="">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <CodeXml /> My History<span className="font-black text-yellow-500">.</span>
                </h2>

                <p className="text-gray-600 mt-4">
                    I have been coding for 2 years, starting my journey doing online courses on how to build simple websites with HTML, CSS, JavaScript & PHP. 
                    <br />
                    <br />
                    My love for Web Development started with a simple HTML & CSS website when i saw how some weird words translated into actual things. Since then, i just couldn't stop.
                    <br />
                    <br />
                    As i went deeper & deeper, i started focusing heavily in the React.js ecosystem. Now i specialize in building Modern Aplications using Next.js or MERN Stack. 
                </p>

                <div className="flex flex-col items-baseline md:flex-row md:items-center gap-4 mt-4 truncate">
                    <button
                        className="bg-blue-600 p-2 rounded-md text-white flex items-center gap-2 hover:bg-blue-700 transition-colors duration-300"
                    >
                        <FaGithub size={22} /> View my Github <ArrowRight size={15} />
                    </button>

                    <button
                        className="bg-neutral-800 p-2 px-4 rounded-md text-white flex items-center gap-2 hover:bg-neutral-900 transition-colors duration-300"
                    >
                        Contact Me <ArrowRight size={15} />
                    </button>
                </div>
            </div>

            <div className="p-[2px] rounded-lg bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-300">    

            </div>
        </div>
    );
};