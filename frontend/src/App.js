import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ChatPage from "./components/ChatPage.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} exact />
      <Route path="/chats" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
