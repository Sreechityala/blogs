import React, { useState } from 'react';
import {v4 as uuid} from 'uuid'

import {BlogFormContainer, Heading, FormContainer, InputContainer, Input, Label, TextInput, Button} from './styledComponents'

const PostForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    const newPost = {
      id: uuid(),
      title,
      author,
      content,
      publicationDate: new Date().toLocaleDateString()  // Mock publication date
    };
    onSubmit(newPost);
    setTitle('');
    setAuthor('');
    setContent('');
  };

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeAuthor = event => {
    setAuthor(event.target.value)
  }

  const onChangeContent = event => {
    setContent(event.target.value)
  }

  return (
    <BlogFormContainer>
        <Heading>Create a Blog</Heading>
        <FormContainer onSubmit={handleSubmit}>
            <InputContainer>
                <Label htmlFor="title">Title:</Label>
                <Input
                    type="text"
                    id="title"
                    placeholder="Title of Blog"
                    value={title}
                    onChange={onChangeTitle}
                    required
                />
            </InputContainer>
            <InputContainer>
                <Label htmlFor="author">Author:</Label>
                <Input type="text"
                    id="author"
                    placeholder="Author Name"
                    value={author}
                    onChange={onChangeAuthor}
                    required
                />
            </InputContainer>
            <InputContainer>
                <Label htmlFor="content">Content:</Label>
                <TextInput
                    id="content"
                    rows="6"
                    cols="100"
                    placeholder="Content"
                    value={content}
                    onChange={onChangeContent}
                    required
                />
            </InputContainer>
            <Button type="submit">Submit</Button>
        </FormContainer>
    </BlogFormContainer>
  );
};

export default PostForm;