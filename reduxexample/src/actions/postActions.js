import { FETCH_POSTS, NEW_POST } from './types';
import axios from 'axios';

export const fetchPosts = () => dispatch => {
  axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(res => res.data)
    .then(posts => dispatch({
      type: FETCH_POSTS,
      posts: posts
    })); 
}

export const createPost = (post) => dispatch => {
  axios.post(`https://jsonplaceholder.typicode.com/posts`, {
      body: JSON.stringify(post)
    })
    .then(post => dispatch({
      type: NEW_POST,
      post: post
    }));
}