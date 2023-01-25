import { dbService } from "fbase";
import { addDoc, collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import Tweet from "components/Tweet";

const Home = ({ userObj }) => {
    const [tweet, setTweet] = useState("");
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
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await addDoc(collection(dbService, "tweets"), {
                text: tweet,
                createdAt: Date.now(),
                creatorId: userObj.uid,
            });
        } catch (error) {
            console.error("Error adding document: ", error);
        }
        setTweet("");
    };
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setTweet(value);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    value={tweet}
                    onChange={onChange}
                    type="text"
                    placeholder="What's on your mind?"
                    maxLength={120}
                />
                <input type="submit" value="tweet" />
            </form>
            <div>
                {tweets.map((data) => (
                    <Tweet key={data.id} tweetObj={data} isOwner={data.creatorId === userObj.uid} />
                ))}
            </div>
        </div>
    );
};

export default Home;
