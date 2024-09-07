// PostsComponent.js
import React from 'react';
import { useQuery } from 'react-query';
import { fetchPosts } from './api';

function PostsComponent() {
  const { data: posts, isLoading, isError, error, refetch } = useQuery('posts', fetchPosts);

  if (isLoading) {
    return <p>Loading posts...</p>;
  }

  if (isError) {
    return <p>Error fetching posts: {error.message}</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={() => refetch()}>Refresh Posts</button>
    </div>
  );
}

export default PostsComponent;
