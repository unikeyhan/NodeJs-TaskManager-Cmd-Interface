const initialPost = {
  loading: false,
  posts: [],
  error: "",
};

const postReducer = (state = initialPost, action) => {
  switch (action.type) {
    case "FETCH_POSTS_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        loading: false,
        posts: action.payload.posts,
        error: "",
      };
    case "FETCH_POSTS_SUCCESS":
      return {
        loading: false,
        posts: [],
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default postReducer;
