import axios from "axios";

export const usePostsService = () => {
  const getUserPosts = (params) =>
    axios.get(`/posts`, { params }).then((resp) => resp.data);

  const getCurrentPost = (id) =>
    axios.get(`/posts/${id}`).then((resp) => resp.data);

  const getPostComments = (id) =>
    axios.get(`/posts/${id}/comments`).then((resp) => resp.data);

  return { getUserPosts, getCurrentPost, getPostComments };
};
