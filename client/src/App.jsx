import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import TitleScreen from "./pages/TitleScreen";
import RoadMap from "./pages/RoadMap";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route index element={<TitleScreen />} />
                    <Route path="/road-map" element={<RoadMap />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;