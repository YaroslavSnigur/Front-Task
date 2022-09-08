// import { useRouter } from "next/router";
// import Link from 'next/link';
import React, { useState } from "react";
import axios from "axios";
import PostList from "../components/PostList/PostList";
import { useQuery } from "react-query";

// const posts = [
//   {
//     id: 1,
//     title: "Post",
//     description:
//       "Similique ipsum ut quae et cum. Quas et nisi at. Mollitia dolor quo dolores quia dolorem quam harum aut quis. Est enim vitae voluptate aliquid eligendi quia est doloremque.",
//     date: "2021-05-20T01:13:07.861Z",
//     authors: "Alison Ondricka",
//     comments: "Qui quo non omnis tenetur.",
//   },
//   {
//     id: 2,
//     title: "Post",
//     description:
//       "Similique ipsum ut quae et cum. Quas et nisi at. Mollitia dolor quo dolores quia dolorem quam harum aut quis. Est enim vitae voluptate aliquid eligendi quia est doloremque.",
//     date: "2021-05-20T01:13:07.861Z",
//     authors: "Alison Ondricka",
//     comments: "Qui quo non omnis tenetur.",
//   },
// ];

const fetchPosts = () =>
  axios
    .get(`https://6144e843411c860017d256f0.mockapi.io/api/v1/posts`)
    .then((response) => {
      ({ posts }) => JSON.Parse(posts);
      console.log(posts);
    });

function PostPage() {
  const [posts, setPosts] = useState(fetchPosts);
  console.log(posts);

  return <PostList posts={posts} />;
}

export default PostPage;
