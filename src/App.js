import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analytics from "./Pages/Analytics";
import Dashboard from "./Pages/Dashboard";
import Notification from "./Pages/Notification";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Trading from "./Pages/Trading";
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/trading" element={<Trading />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
