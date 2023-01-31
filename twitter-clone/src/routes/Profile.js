import React, { useState, useEffect } from "react";
import { authService, dbService } from "fbase";
import { signOut, updateProfile } from "firebase/auth";
import { collection, getDocs, query, where, orderBy } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";

const Profile = ({ refreshUser, userObj }) => {
    const [newDisplayName, setNewDisplayName] = useState(userObj.displayName);
    const navigate = useNavigate();
    const onLogOutClick = () => {
        signOut(authService);
        navigate("/", { replace: true });
        refreshUser();
    };
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewDisplayName(value);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        if (userObj.displayName !== newDisplayName) {
            await updateProfile(authService.currentUser, { displayName: newDisplayName });
            refreshUser();
        }
    };
    const getMyTweets = async () => {
        const q = query(
            collection(dbService, "tweets"),
            where("creatorId", "==", userObj.uid, orderBy("createdAt", "desc"))
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    };
    useEffect(() => {
        getMyTweets();
    }, []);
    return (
        <div
            className="container"
            style={{
                maxWidth: 890,
                width: "100%",
                margin: "0 auto",
                marginTop: 80,
                display: "flex",
                justifyContent: "center",
            }}
        >
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    type="text"
                    autoFocus
                    placeholder="Display name"
                    value={newDisplayName}
                    className="formInput"
                />
                <input
                    type="submit"
                    value="Update Profile"
                    className="formBtn"
                    style={{
                        marginTop: 10,
                    }}
                />
            </form>
            <button className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
                Log Out
            </button>
        </div>
    );
};
export default Profile;
