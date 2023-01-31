import { useState } from "react";
import { authService } from "fbase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const inputStyles = {};

const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);
    const [error, setError] = useState("");
    const onChange = (event) => {
        const {
            target: { name, value },
        } = event;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        let data;
        try {
            if (newAccount) {
                data = await createUserWithEmailAndPassword(authService, email, password);
            } else {
                data = await signInWithEmailAndPassword(authService, email, password);
            }
        } catch (error) {
            setError(error.message);
        }
    };
    const toggleAccount = () => setNewAccount((prev) => !prev);

    return (
        <>
            <form onSubmit={onSubmit} className="container">
                <input
                    className="authInput"
                    name="email"
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                    required
                />
                <input
                    className="authInput"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={onChange}
                    required
                />
                <input
                    className="authInput authSubmit"
                    type="submit"
                    value={newAccount ? "Create Account" : "Sign In"}
                />
                {error && <span className="authError">{error}</span>}
            </form>
            <span onClick={toggleAccount} className="authSwitch">
                {newAccount ? "Sign in" : "Create Account"}
            </span>
        </>
    );
};

export default AuthForm;
