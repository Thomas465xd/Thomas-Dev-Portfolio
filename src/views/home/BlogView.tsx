import { motion } from "framer-motion";

export default function BlogView() {
    return (
        <div className="max-w-6xl">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="w-24 h-24 bg-pink-600 rounded mx-auto"
            />

            <motion.div
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.7 }}
                transition={{ duration: 0.3}}
                className="w-24 h-24 bg-pink-600 rounded mx-auto my-10"
            />
        </div>
    );
}
