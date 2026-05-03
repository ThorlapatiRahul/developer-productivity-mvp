import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import "./App.css";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "app dark" : "app light"}>
      
      {/* TOGGLE BUTTON */}
      <div className="theme-toggle">
        <button onClick={() => setDark(!dark)}>
          {dark ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>

      <Dashboard />
    </div>
  );
}