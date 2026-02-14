"use client";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import { Send } from "lucide-react";

export default function ContactForm() {

    const form = useRef<HTMLFormElement>(null);

    const [name, setName] = useState("") 
    const [email, setEmail] = useState("") 
    const [message, setMessage] = useState("") 

    const [characters, setCharacters] = useState(0);
    
    const { t } = useTranslation(); 

    const handleMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const message = e.target.value
        const messageLength = e.target.value.length

        setMessage(message)
        setCharacters(messageLength)
    }

    const isEmailValid = (email: string) => /\S+@\S+\.\S+/.test(email);

    const isFormValid = () => {
        return name && isEmailValid(email) && message && characters < 650;
    };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs
            .sendForm('service_gcnshhj', 'template_lbf0o2p', form.current, {
                publicKey: 'Egwo5MvqZT-kt5DuA',
            })
            .then(
                () => {
                    toast.success("Email sent Successfully! 📧")

                    // Reset form values
                    form.current?.reset()

                    // Clear states
                    setName("")
                    setEmail("")
                    setMessage("")
                },
                (error) => {
                    toast.error(error.text + "❌")
                },
            );
        } else {
            console.error('Form reference is null.');
        }
    };

    return (
        <form 
            className="mx-auto border dark:border-gray-600 border-gray-300 shadow-lg p-10 rounded-md dark:bg-gray-950 bg-gray-50 space-y-4"
            noValidate
            ref={form}
            onSubmit={ sendEmail }
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="flex flex-col">
                    <label 
                        htmlFor="name"
                    >
                        {`${t("contact.label-1")}`}<span className="text-xs text-red-500 relative -top-1 left-0.5">*</span>
                    </label>
                    <input 
                        id="name"
                        type="text"
                        name="name"
                        className="border border-gray-600 rounded-md px-4 py-2 dark:bg-neutral-950 dark:text-white dark:placeholder-gray-400 placeholder:gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder={`${t("contact.placeholder-1")}`}
                        maxLength={60}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="flex flex-col">
                    <label 
                        htmlFor="email"
                    >
                        {`${t("contact.label-2")}`}<span className="text-xs text-red-500 relative -top-1 left-0.5">*</span>
                    </label>
                    <input 
                        id="email"
                        type="email"
                        name="email"
                        className={`
                            border border-gray-600 rounded-md px-4 py-2 
                            dark:bg-neutral-950 dark:placeholder-gray-400 placeholder:gray-600 
                            focus:outline-none focus:ring-2 focus:ring-blue-500
                            ${email !== "" && (
                                !isEmailValid(email) ? 
                                "text-red-400 border-red-400" : 
                                "dark:text-white"
                            )}
                        `}
                        placeholder={`${t("contact.placeholder-2")}`}
                        maxLength={40}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="flex flex-col md:col-span-2 last:md:col-span-2">
                    <label 
                        htmlFor="message"
                    >
                        {`${t("contact.label-3")}`}
                        <span className="text-xs text-red-500 relative -top-1 left-0.5">*</span>
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={5}
                        maxLength={650}
                        value={message}
                        onChange={handleMessage}
                        className={`
                            border border-gray-600 rounded-lg px-4 py-2 
                            dark:bg-neutral-950 dark:placeholder-gray-400 placeholder:gray-600 
                            focus:outline-none focus:ring-2 focus:ring-blue-500 
                            ${characters === 650 ? "text-red-400 border-red-400" : "dark:text-white"}`}
                        placeholder={`${t("contact.placeholder-3")}`}
                    />
                </div>
            </div>

            <input id="year" name="year" value={new Date().getFullYear()} type="hidden" />
            <input id="time" name="time" value={new Date().getTime()} type="hidden" />
            
            <div className="flex justify-between">
                <p className={`text-xs font-bold ${characters === 650 ? "text-red-400 opacity-50" : "text-gray-500"}`}>
                    {characters}/650 {`${t("contact.limit")}`}
                </p>

                <button 
                    disabled={!isFormValid()}
                    className={`flex items-center gap-2 group text-white bg-blue-700 px-4 py-2 rounded hover:bg-blue-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-neutral-800`}
                    type="submit" 
                >
                    <Send className="group-hover:scale-105 transition-all duration-300" />{`${t("contact.button-1")}`}
                </button>
            </div>
        </form>
    )
}
