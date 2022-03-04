import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Analytics from "./Pages/Analytics";
import Dashboard from "./Pages/Dashboard";
import Notification from "./Pages/Notification";
import Trading from "./Pages/Trading";
import "./App.css";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import GoogleAuth from "./Pages/GoogleAuth";
import PrivateRoute from "./Pages/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [logIn, setLogIn] = useState({});
  return (
    <UserContext.Provider value={[logIn, setLogIn]}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signIn" element={<GoogleAuth />} />

          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="/*" element={<NotFound />} />

          <Route path="/analytics" element={<Analytics />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
