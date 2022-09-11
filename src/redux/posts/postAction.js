import axios from "axios";

const fetchPostsRequest = () => {
  return {
    type: "FETCH_POSTS_REQUEST",
  };
};

const fetchPostsSuccess = (posts) => {
  return {
    type: "FETCH_POSTS_SUCCESS",
    payload: {
      posts,
    },
  };
};

const fetchPostsFailure = (error) => {
  return {
    type: "FETCH_POSTS_FAILURE",
    payload: {
      error,
    },
  };
};

const fetchPosts = () => {
  return function (dispatch) {
    dispatch(fetchPostsRequest());
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const postsData = response.data;
        dispatch(fetchPostsSuccess(postsData));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchPostsFailure(errorMsg));
      });
  };
};

export default fetchPosts;
