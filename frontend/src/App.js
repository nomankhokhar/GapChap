import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={"home"} />
      <Route path="/chats" element={"home"} />
    </Routes>
  );
}

export default App;
