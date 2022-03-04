import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Analytics from "./Pages/Analytics";
import Dashboard from "./Pages/Dashboard";
import Notification from "./Pages/Notification";
import Trading from "./Pages/Trading";
import "./App.css";
import NotFound from "./Pages/NotFound";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";

export const UserContext = createContext();

function App() {
  const [logIn, setLogIn] = useState({});
  return (
    <UserContext.Provider value={[logIn, setLogIn]}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          <Route path="/dashboard" element={<PrivateRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="/*" element={<NotFound />} />

          <Route path="/analytics" element={<Analytics />} />
          <Route path="/trading" element={<Trading />} />
          <Route path="/notification" element={<Notification />} />
        </Routes>
      </Router>
      <ToastContainer />
    </UserContext.Provider>
  );
}

export default App;
