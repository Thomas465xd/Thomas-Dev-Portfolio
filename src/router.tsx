import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
            </Routes>
        </BrowserRouter>
    )
}