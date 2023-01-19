import React, { useState } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth.js";
import EditProfile from "../routes/EditProfile.js";
import Home from "../routes/Home.js";
import Profile from "../routes/Profile.js";

const AppRouter = () => {
    const [isLoggdIn, setIsLoggedIn] = useState(false);
    return (
        <Router>
            <Routes>
                {isLoggdIn ? (
                    <>
                        <Route path="/" element={<Home />} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Auth />} />
                    </>
                )}
            </Routes>
        </Router>
    );
};

export default AppRouter;
