import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import fetchPosts from "../redux/posts/postAction";

const Posts = () => {
  const postsData = useSelector((state) => state.postReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  console.log(postsData);

  return (
    <div>
      {postsData.loading ? (
        <h2>is loading</h2>
      ) : postsData.error ? (
        <p>{postsData.error}</p>
      ) : (
        postsData.posts.map((post) => <div key={post.id}>d{post.title}</div>)
      )}
    </div>
  );
};

export default Posts;
