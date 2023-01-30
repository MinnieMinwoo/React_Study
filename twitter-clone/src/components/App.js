import { useEffect, useState } from "react";
import AppRouter from "components/AppRouter";
import { authService } from "fbase";
import { onAuthStateChanged, updateProfile } from "firebase/auth";

function App() {
    const [init, setInit] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userObj, setUserObj] = useState(null);
    useEffect(() => {
        onAuthStateChanged(authService, (user) => {
            if (user) {
                setIsLoggedIn(true);
                setUserObj({
                    displayName: user.displayName,
                    uid: user.uid,
                    updateProfile: (args) => updateProfile(user, { displayName: user.displayName }),
                });
            } else {
                setIsLoggedIn(false);
                setUserObj(null);
            }
            setInit(true);
        });
    }, []);
    const refreshUser = () => {
        const user = authService.currentUser;
        setUserObj({
            displayName: user.displayName,
            uid: user.uid,
            updateProfile: (args) => user.updateProfile(args),
        });
    };
    return (
        <>
            {init ? (
                <AppRouter
                    refreshUser={refreshUser}
                    isLoggedIn={Boolean(userObj)}
                    userObj={userObj}
                />
            ) : (
                "Initializing..."
            )}
            <footer>&copy; {new Date().getFullYear()} Mol?Luitter</footer>
        </>
    );
}

export default App;
