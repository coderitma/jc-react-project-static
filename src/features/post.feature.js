import { useCallback, useEffect, useState } from "react";
import { GetPostProvider } from "../providers/post.provider";

export const PostAdmin = () => {
  const [posts, setPosts] = useState([]);

  // const getData = useCallback(() => {
  //   GetPostProvider().then((response) => setPosts(response.data));
  // }, []);

  useEffect(() => {
    console.log("iyaas");
    GetPostProvider().then((response) => setPosts(response.data));
  }, []);

  return (
    <>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            {post.title} <br />
            <img src={post.thumbnailUrl} />
          </li>
        ))}
      </ul>
    </>
  );
};
