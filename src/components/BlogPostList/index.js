import React from 'react';
import BlogPost from '../BlogPost';

import {BlogsListsContainer, Heading, UnorderedListContainer, NoListCOntainer, Image, NoBlogHeading} from './styledComponents'

const BlogPostList = ({ posts, onDeletePost, onStartEditing }) => {
  return (
    <BlogsListsContainer>
      <Heading>Blog Posts</Heading>
      {posts.length === 0 ? (
      <NoListCOntainer>
        <Image src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png" alt="no blogs" />
        <NoBlogHeading>No Blogs Yet</NoBlogHeading>
      </NoListCOntainer>) : (<UnorderedListContainer>
        {posts.map(post => (
            <BlogPost
            key={post.id}
            post={post}
            onDelete={() => onDeletePost(post.id)}
            onStartEditing={() => onStartEditing(post.id)}
            />
        ))}
      </UnorderedListContainer>)}
      
    </BlogsListsContainer>
  );
};

export default BlogPostList;
