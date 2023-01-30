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
        <>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    type="text"
                    placeholder="Display name"
                    value={newDisplayName}
                />
                <input type="submit" value="Update Profile" />
            </form>
            <button onClick={onLogOutClick}>Log Out</button>
        </>
    );
};
export default Profile;
