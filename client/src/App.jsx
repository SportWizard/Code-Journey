import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import TitleScreen from "./pages/TitleScreen";
import RoadMap from "./pages/RoadMap";
import Python from "./pages/Python";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<TitleScreen />} />
                    <Route path="/road-map" element={<RoadMap />} />
                    <Route path="/python" element={<Python />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;