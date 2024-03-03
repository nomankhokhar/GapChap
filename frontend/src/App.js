import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={"lol"} />
      <Route path="/contact" element={"Noman Ali"} />
    </Routes>
  );
}

export default App;
