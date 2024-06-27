import React, { useState, useEffect } from 'react';
import BlogPostList from './components/BlogPostList';
import PostForm from './components/PostForm';
import EditPostForm from './components/EditPostForm';

import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

const Container = styled.div`
  background-color: #f5d0fe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  min-height: 100vh;
`;

const Heading = styled.div`
  color: #d946ef;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Bree Serif';
  padding-bottom: 30px;
  @media screen and (min-width: 768px) {
    font-size: 45px;
  }
`;

const App = () => {
  const blogsPost = JSON.parse(localStorage.getItem('blogPosts'))
  const [posts, setPosts] = useState(blogsPost.length === 0 ? [] : blogsPost);
  const [editingPostId, setEditingPostId] = useState(null);

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    setPosts(storedPosts);
  }, []);

  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(posts));
  }, [posts]);

  const handleAddPost = newPost => {
    const updatedPosts = [...posts, { ...newPost}];
    setPosts(updatedPosts);
  };

  const handleEditPost = editedPost => {
    const updatedPosts = posts.map(post =>
      post.id === editedPost.id ? { ...post, ...editedPost } : post
    );
    setPosts(updatedPosts);
    setEditingPostId(null);
  };

  const handleDeletePost = id => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    setEditingPostId(null);
  };

  const handleStartEditing = id => {
    setEditingPostId(id);
  };

  const handleCancelEditing = () => {
    setEditingPostId(null);
  };

  return (
    <Container>
      <GlobalStyles />
      <Heading>Blogging Platform</Heading>
      {editingPostId ? (
        <EditPostForm
          post={posts.find(post => post.id === editingPostId)}
          onEditPost={handleEditPost}
          onCancelEdit={handleCancelEditing}
        />
      ) : (
        <PostForm onSubmit={handleAddPost} />
      )}
      <BlogPostList
        posts={posts}
        onDeletePost={handleDeletePost}
        onStartEditing={handleStartEditing}
      />
    </Container>
  );
};

export default App;