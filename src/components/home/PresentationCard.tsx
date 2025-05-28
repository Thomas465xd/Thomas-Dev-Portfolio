import { NotebookPen } from "lucide-react";

export default function PresentationCard() {
    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-white dark:bg-slate-800 rounded-lg shadow-lg border dark:border-gray-600 border-gray-200">
            <div className="flex items-center gap-4 mb-4">
                <NotebookPen size={18} />
                <h2 className="text-xl">About Me</h2>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Hello, I'm Thomas 👋</h1>

            <div className="grid grid-cols-2 gap-4">
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
