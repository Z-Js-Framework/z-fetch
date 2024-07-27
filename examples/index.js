'use strict';
import { DELETE, GET, PATCH, POST, PUT } from '../index.js';

let loader = document.getElementById('loading');
let refetchBtn = document.getElementById('refetch');

const getPosts = async () => {
  const { data, error, loading, refetch } = await GET(
    'https://jsonplaceholder.typicode.com/posts'
  );
  if (loading) {
    loader.innerHTML = 'getting posts...';
    console.log('loading');
  }

  if (data) {
    console.log('got Data:', data);
    loader.innerHTML = 'Posts Data loaded!';
  } else {
    console.error('Error:', error.message);
  }

  refetchBtn.addEventListener('click', () => {
    loader.innerHTML = 'refetching data...';
    refetch((result) => {
      loader.innerHTML = 'data refetched see console!';
      console.log('refetched data:', result.data);
    });
  });
};

getPosts();

const createPost = async () => {
  const { data, error, loading } = await POST(
    'https://jsonplaceholder.typicode.com/posts',
    {
      body: {
        title: 'dune',
        body: 'a story about the dune verse!',
        userId: 1,
      },
    }
  );
  if (data) {
    console.log('posted Data:', data);
  } else {
    console.error('Error:', error.message);
  }
};

createPost();

const updatePost = async () => {
  const { data, error, loading } = await PUT(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      body: {
        title: 'dune latest',
        body: 'a story about the dune verse has changed now the spices rule!',
        userId: 1,
      },
    }
  );
  if (data) {
    console.log('put Data:', data);
  } else {
    console.error('Error:', error.message);
  }
};

updatePost();

const modifyPost = async () => {
  const { data, error, loading } = await PATCH(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      body: {
        title: 'dune movie',
      },
    }
  );
  if (data) {
    console.log('patch Data:', data);
  } else {
    console.error('Error:', error.message);
  }
};

modifyPost();

const deletePost = async () => {
  const { error } = await DELETE(
    'https://jsonplaceholder.typicode.com/posts/1'
  );
  if (!error) {
    console.log('item deleted successfully!');
  } else {
    console.error('Error Deleting Item:', error.message);
  }
};

deletePost();
