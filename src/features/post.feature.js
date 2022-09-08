import { useEffect, useState } from "react";
import { GetPostProvider } from "../providers/post.provider";

export const PostAdmin = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
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
