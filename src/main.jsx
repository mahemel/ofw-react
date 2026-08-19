import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes/Routes.jsx";
import { CountryProvider } from "./context/CountryContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <CountryProvider>
            <RouterProvider router={router}></RouterProvider>
        </CountryProvider>
    </StrictMode>,
);
