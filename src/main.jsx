import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
