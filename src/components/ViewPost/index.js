import React from 'react'
import BlogPost from '../BlogPost'
import {PostContainer} from './styledComponents'

const ViewPost = ({post}) => {
    if(!post) {
        return <p>Post not found!</p>;
    }

    return (
        <PostContainer>
            <h1>{post.title}</h1>
            <p>{post.author}</p>
            <p>{new Date(post.date).toLocaleDateString()}</p>
            <p>{post.content}</p>
            <button onClick={() => <BlogPost />}>Back</button>
        </PostContainer>
    )
}

export default ViewPost