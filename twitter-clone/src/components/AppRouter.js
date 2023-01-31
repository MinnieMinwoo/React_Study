import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth.js";
import Home from "../routes/Home.js";
import Profile from "../routes/Profile.js";
import Navigation from "./Navigation.js";

/*
div style={{
                maxWidth: 890,
                width: "100%",
                margin: "0 auto",
                marginTop: 80,
                display: "flex",
                justifyContent: "center",
            }}
*/
const AppRouter = ({ refreshUser, isLoggedIn, userObj }) => {
    return (
        <div>
            <Router>
                {isLoggedIn && <Navigation userObj={userObj} />}
                <Routes>
                    {isLoggedIn ? (
                        <>
                            <Route path="/" element={<Home userObj={userObj} />} />
                            <Route
                                path="/profile"
                                element={<Profile userObj={userObj} refreshUser={refreshUser} />}
                            />
                        </>
                    ) : (
                        <>
                            <Route path="/" element={<Auth />} />
                        </>
                    )}
                </Routes>
            </Router>
        </div>
    );
};

export default AppRouter;
