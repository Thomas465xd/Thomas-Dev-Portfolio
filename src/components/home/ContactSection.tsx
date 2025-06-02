import { Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {

    const [characters, setCharacters] = useState(0); 

    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const messageLength = e.target.value.length

        setCharacters(messageLength)
    }

    return (
        <div className="mt-20 space-y-4">
            <h1 className="text-3xl font-bold">
                Contact Me<span className="text-yellow-500">.</span>
            </h1>

            <p className="text-gray-600">
                I'm always in search of new opportunities and ready to embark on exciting new projects.
                If you have an idea in mind or something you'd like to share, feel free to reach out to me!
            </p>

            <form 
                className="mx-auto border dark:border-gray-600 border-gray-300 shadow-lg p-10 rounded-md dark:bg-gray-950 bg-gray-100 space-y-4"
                noValidate
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col">
                        <label 
                            htmlFor="name"
                        >
                            Name
                        </label>
                        <input 
                            id="name"
                            type="text"
                            className="border border-gray-600 rounded-md px-4 py-2 dark:bg-neutral-950 dark:text-white dark:placeholder-gray-400 placeholder:gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your Name (Ex. Thomas)"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label 
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input 
                            id="email"
                            type="email"
                            className="border border-gray-600 rounded-md px-4 py-2 dark:bg-neutral-950 dark:text-white dark:placeholder-gray-400 placeholder:gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your Email (Ex. john@doe.com) "
                        />
                    </div>

                    <div className="flex flex-col md:col-span-2 last:md:col-span-2">
                        <label 
                            htmlFor="message"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            maxLength={650}
                            onChange={handleMessage}
                            className={`border border-gray-600 rounded-lg px-4 py-2 dark:bg-neutral-950 dark:placeholder-gray-400 placeholder:gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${characters === 650 ? "text-red-400 border-red-400" : "dark:text-white"}`}
                            placeholder="Hey there, i was wondering if there was any possibility that you..."
                        />
                    </div>
                </div>
                
                <div className="flex justify-between">
                    <p className={`text-xs font-bold ${characters === 650 ? "text-red-400 opacity-50" : "text-gray-500"}`}>
                        {characters}/650 characters left
                    </p>

                    <button 
                        disabled={characters === 650}
                        className={`flex items-center gap-2 text-white bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-neutral-800`}
                    >
                        <Send />Send
                    </button>
                </div>
            </form>

            <p className="">
                Or you can also contact me via...
            </p>
        </div>
    )
}
