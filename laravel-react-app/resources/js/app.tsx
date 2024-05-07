import "./bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import AppRoutes from "./domain/app.routes";

export default function App() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    );
}

const container = document.getElementById("laravel-app");
const root = createRoot(container);
root.render(<App />);