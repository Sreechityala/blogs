import React from 'react';

import {ListItem, Heading, Author, Content, Date, Button, AuthorDate, ButtonsContainer} from './styledComponents'

const BlogPost = ({ post, onDelete, onStartEditing }) => {
  return (
    <ListItem>
      <Heading>{post.title}</Heading>
      <AuthorDate>
        <Author>Author: {post.author}</Author>
        <Date>Published on: {post.publicationDate}</Date>
      </AuthorDate>
      <Content>{post.content}</Content>
      <ButtonsContainer>
      <Button onClick={onStartEditing}>Edit</Button>
      <Button onClick={onDelete}>Delete</Button>
      </ButtonsContainer>
      
    </ListItem>
  );
};

export default BlogPost;