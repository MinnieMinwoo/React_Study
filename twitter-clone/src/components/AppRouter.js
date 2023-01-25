import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth.js";
import EditProfile from "../routes/EditProfile.js";
import Home from "../routes/Home.js";
import Profile from "../routes/Profile.js";
import Navigation from "./Navigation.js";

const AppRouter = ({ isLoggedIn, userObj }) => {
    return (
        <Router>
            {isLoggedIn && <Navigation />}
            <Routes>
                {isLoggedIn ? (
                    <>
                        <Route path="/" element={<Home userObj={userObj} />} />
                        <Route path="/profile" element={<Profile />} />
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
