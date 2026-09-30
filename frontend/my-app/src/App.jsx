import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detils from "./pages/Details";
import Search from "./pages/Search.jsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Details/:id" element={<Detils />} />
            <Route path="/search" element={<Search />} />
        </Routes>
    );
}
