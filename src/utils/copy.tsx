import { toast } from "react-toastify";

export const copyToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        toast.info("Copied to clipboard");
    } catch {
        toast.error("Error copying to clipboard");
    }
};