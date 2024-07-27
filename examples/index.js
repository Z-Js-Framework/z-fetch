'use strict';
import { GET } from '../dist/z-fetch';

const getPosts = async () => {
  const { data, error } = await GET(
    'https://jsonplaceholder.typicode.com/posts'
  );
  if (data) {
    console.log('Data:', data);
  } else {
    console.error('Error:', error.message);
  }
};

getPosts();
