import React, { useState, useEffect } from 'react';
import { FormContainer, BlogFormContainer, Heading, InputContainer, Label, Input, TextInput, SaveButton, CancelButton, ButtonsContainer} from './styledComponents';

const EditPostForm = ({ post, onEditPost, onCancelEdit }) => {
  const [editedPost, setEditedPost] = useState(post);

  useEffect(() => {
    setEditedPost(post);
  }, [post]);

  const handleSubmit = e => {
    e.preventDefault();
    onEditPost(editedPost);
  };

  const handleCancel = () => {
    onCancelEdit();
  };

  return (
    <BlogFormContainer>
      <Heading>Edit the Blog</Heading>
      <FormContainer onSubmit={handleSubmit}>
        <InputContainer>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            placeholder="Title"
            value={editedPost.title}
            onChange={e => setEditedPost({ ...editedPost, title: e.target.value })}
            required
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="author">Author</Label>
          <Input
            type="text"
            id="author"
            placeholder="Author"
            value={editedPost.author}
            onChange={e => setEditedPost({ ...editedPost, author: e.target.value })}
            required
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="textarea">Content</Label>
          <TextInput
            rows="6"
            cols="50"
            placeholder="Content"
            id="textarea"
            value={editedPost.content}
            onChange={e => setEditedPost({ ...editedPost, content: e.target.value })}
            required
          />
        </InputContainer>
        <ButtonsContainer>
        <SaveButton type="submit">Save Changes</SaveButton>
        <CancelButton type="button" onClick={handleCancel}>Cancel</CancelButton>
        </ButtonsContainer>
      </FormContainer>
    </BlogFormContainer>
  );
};

export default EditPostForm;