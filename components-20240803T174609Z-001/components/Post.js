import React from 'react';
import './css/Post.css';
import { Avatar } from '@mui/material';
import ArrowUpwardOutlined from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardOutlined from '@mui/icons-material/ArrowDownwardOutlined';
import RepeatOneOutlined from '@mui/icons-material/RepeatOneOutlined';
import ChatBubbleOutlined from '@mui/icons-material/ChatBubbleOutlined';
import ShareOutlined from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlined from '@mui/icons-material/MoreHorizOutlined';

function Post() {
    return (
        <div className='post'>
            <div className='post__info'>
                <Avatar />
                <h4>User name</h4>
                <small>Timestampp</small>
            </div>

            <div className='post__body'>
                <p>This is a test question</p>
                <button className='post__btnAnswer'>
                    Answer
                </button>
            </div>
            <div className='post__footer'>
                <div className='post__footerAction'>
                    <ArrowUpwardOutlined />
                    <ArrowDownwardOutlined />
                </div>
                <RepeatOneOutlined />
                <ChatBubbleOutlined />
                <div className='post__footerLeft'>
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>
            <p
                style={{
                    color: "rgba(0,0,0,0.5)",
                    fontSize: "12px",
                    fontWeight: "bold",
                    margin: "10px 0",
                }}
            >
                1 Answer
            </p>
            <div
                style={{
                    margin: "5px 0px 0px 0px",
                    padding: "5px 0px 0px 20px",
                    borderTop: "1px solid lightgray",
                }}
                className='post__answer'
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        padding: "10px 5px",
                        borderTop: "1px solid lightgray",
                    }}
                    className='post-answer-container'
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "10px",
                            fontSize: "12px",
                            fontWeight: 600,
                            color: "#888",
                        }}
                        className='post-answered'
                    >
                        <Avatar />
                        <div
                            style={{
                                margin: "0px 10px",
                            }}
                            className='post-info'
                        >
                            <p>Username</p>
                            <span>Timestampp</span>
                        </div>
                    </div>
                    <div className='post-answer'>
                        This is a test answer
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
