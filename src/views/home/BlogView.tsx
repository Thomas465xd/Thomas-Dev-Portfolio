import { ArrowRight, House } from "lucide-react";
import { Link } from "react-router-dom";

export default function BlogView() {
    return (
        <div className="max-w-6xl">
            <p className="text-center mt-20">
                In Development... 🚚🛠️
            </p>

            <div className="flex justify-center mt-8">
                <div className="flex flex-col items-center gap-2 text-center">
                    <Link
                        to="/"
                        className="group bg-gradient-to-r from-gray-900 via-neutral-800 to-slate-900 bg-[length:200%_200%] bg-[position:0%_50%] hover:bg-[position:100%_50%] transition-all duration-500 px-4 py-2 rounded-md flex items-center gap-2 text-white"
                    >
                        <House size={16} /> Go Back Home <ArrowRight className="group-hover:translate-x-1 transition-all duration-500" size={16} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
