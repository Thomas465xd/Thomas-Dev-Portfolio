import { NotebookPen } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

export default function PresentationCard() {

    return (
        <div 
            className="w-full mx-auto p-6 bg-white dark:bg-slate-800 rounded-2xl 
                shadow-[10px_10px_#00000020] dark:shadow-[10px_10px_#ffffff30] 
                border dark:border-gray-600 border-gray-200"
        >
            <div className="flex items-center gap-4 mb-4">
                <NotebookPen size={15}  className="hover:animate-pulse "/>
                <h2 className="uppercase">About Me</h2>
            </div>

            <TypeAnimation
                sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Hello, I'm Thomas 👋",
                    3000,
                    "Welcome to my Portfolio 📋",
                    5000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: '2em', display: 'inline-block' }}
                repeat={Infinity}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="">
                    <p className="text-gray-600 dark:text-gray-400">
                        I'm a passionate Full Stack Web Developer from Chile, specializing in creating robust and scalable apps that follow the best practices in software development.
                        <br />
                        <br />
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                        With a focus on both front-end and back-end technologies, I strive to deliver high-quality solutions that meet user needs and business goals.
                    </p>
                </div>
            </div>

        </div>
    )
}
