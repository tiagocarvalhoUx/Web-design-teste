import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import ProfileCard from "./page/ProfileCard.jsx";
import "./index.css";
import App from "./page/App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProfileCard />
    <App />
  </StrictMode>
);
