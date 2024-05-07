import React from "react";
import { Route, Routes } from "react-router-dom";
import { AboutPage, HomePage, NotFound } from "../presentation/pages";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about" element={<AboutPage />} />
        </Routes>
    );
}
