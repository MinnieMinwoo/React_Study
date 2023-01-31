import { useState } from "react";
import { dbService, storageService } from "fbase";
import { deleteObject, ref } from "firebase/storage";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Tweet = ({ tweetObj, isOwner }) => {
    const [editing, setEditing] = useState(false);
    const [newTweet, setNewTweet] = useState(tweetObj.text);
    const onDeleteClick = async () => {
        const ok = window.confirm("Are you sure you want to delete this tweet?");
        if (ok) {
            await deleteDoc(doc(dbService, "tweets", `${tweetObj.id}`));
            await deleteObject(ref(storageService, tweetObj.attachmentUrl));
        }
    };
    const toggleEditing = () => {
        setEditing((prev) => !prev);
    };
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            await updateDoc(doc(dbService, "tweets", `${tweetObj.id}`), {
                text: newTweet,
            });
        } catch (error) {
            console.error("Error adding document: ", error);
        }
        setEditing(false);
    };
    const onChange = (event) => {
        const {
            target: { value },
        } = event;
        setNewTweet(value);
    };
    return (
        <div className="tweet">
            {editing ? (
                <>
                    <form onSubmit={onSubmit} className="container tweetEdit">
                        <input
                            type="text"
                            placeholder="Edit your tweet"
                            value={newTweet}
                            onChange={onChange}
                            required
                            autoFocus
                            className="formInput"
                        />
                        <input type="submit" value="Update Tweet" className="formBtn" />
                    </form>
                    <button onClick={toggleEditing}>Cancel</button>
                </>
            ) : (
                <>
                    <h4>{tweetObj.text}</h4>
                    {tweetObj.attachmentUrl && (
                        <img src={tweetObj.attachmentUrl} alt="tweet image" />
                    )}
                    {isOwner && (
                        <div className="tweet_actions">
                            <button onClick={onDeleteClick}>
                                <FontAwesomeIcon icon={faTrash} />
                            </button>
                            <button onClick={toggleEditing}>
                                <FontAwesomeIcon icon={faPencilAlt} />
                            </button>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Tweet;
