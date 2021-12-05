import React, { useState, useEffect } from 'react'
import './Post.css'
import { db } from '../firebase';
import Avatar from '@material-ui/core/Avatar';
import firebase from 'firebase'
import SendIcon from '@material-ui/icons/Send';

function Post({ postId, user, username, imageUrl, caption }) {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');

    useEffect(() => {
        let unsubscribe;
        if (postId) {
            unsubscribe = db
                .collection("posts")
                .doc(postId)
                .collection("comments")
                .orderBy('timestamp', 'desc')
                .onSnapshot((snapshot) => {
                    setComments(snapshot.docs.map((doc) => doc.data()));
                });
        }
        return () => {
            unsubscribe();
        };

    }, [postId]);

    const postComment = (event) => {
        event.preventDefault();

        db.collection("posts").doc(postId).collection("comments").add({
            text: comment,
            username: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()

        })
        setComment('');
    }

    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avtar"
                    alt={username}
                    src="/static/images/avatar/1.jpg"
                />
                <h2 >{username}</h2>
            </div>
            <img className="post_img" src={imageUrl} alt="" />
            <h4 className="post_text">
                <strong>{username} :</strong>{caption}
            </h4>
            <div className="post__comments">
                {comments.map((comment) => (
                    <p>
                        <strong>{comment.username}</strong> :{comment.text}
                    </p>
                ))}
            </div>
            {user && (
                <form className="post__commentBox" >
                    <input
                        className="post__input"
                        type="text"
                        placeholder="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <button
                        className="post__button"
                        disabled={!comment}
                        type="submit"
                        onClick={postComment}
                    >
                        <SendIcon className="postIcon" />
                </button>

                </form>

            )}


        </div>
    )
}

export default Post
