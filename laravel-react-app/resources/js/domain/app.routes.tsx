import React from "react";
import { Route, Routes } from "react-router-dom";
import {
    AboutPage,  
    Login,
    NotFound,
} from "../presentation/pages";
import { HomePage } from "../presentation/pages/home/home";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            {/*
           <Route path="/add-article" element={<AddArticle />} />
           */}
        </Routes>
    );
}
