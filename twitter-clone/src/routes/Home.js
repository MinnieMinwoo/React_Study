import { dbService } from "fbase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import Tweet from "components/Tweet";
import TweetFactory from "components/TweetFactory";

const Home = ({ userObj }) => {
    const [tweets, setTweets] = useState([]);

    useEffect(() => {
        const q = query(collection(dbService, "tweets"), orderBy("createdAt", "desc"));
        onSnapshot(q, (snapshot) => {
            const tweetArr = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setTweets(tweetArr);
        });
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
            <TweetFactory userObj={userObj} />
            <div style={{ marginTop: 30 }}>
                {tweets.map((data) => (
                    <Tweet key={data.id} tweetObj={data} isOwner={data.creatorId === userObj.uid} />
                ))}
            </div>
        </div>
    );
};

export default Home;
