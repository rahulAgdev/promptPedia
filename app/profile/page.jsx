// "use client";

// import { useSession } from "next-auth/react";
// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// import Profile from "@components/Profile";

// const MyProfile = () => {
//   const router = useRouter();
//   const { data: session } = useSession();

//   const [myPosts, setMyPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await fetch(`/api/users/${session?.user.id}/posts`);
//       const data = await response.json();

//       setMyPosts(data);
//     };

//     if (session?.user.id) fetchPosts();
//   }, [session?.user.id]);

//   const handleEdit = (post) => {
//   };

//   const handleDelete = async (post) => {
    
//   };

//   return (
//     <Profile
//       name='My'
//       desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
//       data={myPosts}
//       handleEdit={handleEdit}
//       handleDelete={handleDelete}
//     />
//   );
// };

// export default MyProfile;

"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";
const profile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await res.json();
      setPosts(data);
    };
    if(session?.user.id) fetchPosts();
  }, [session?.user.id]);
  const handleEdit = () => {};
  const handleDelete = () => {};
  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page."
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default profile;