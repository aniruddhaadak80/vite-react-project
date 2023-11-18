import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import HookCounterOne from "./useEffect.jsx";
import Board from "./game.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* square for tic-tac-toe game  */}
    <Board />
    {/* for app.jsx */}
    <App />
    {/* for  useEffect hooks  */}
    <HookCounterOne />
  </React.StrictMode>
);
