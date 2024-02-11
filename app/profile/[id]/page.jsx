"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Profile from "@components/Profile";

const userProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const userName = searchParams.get("name");
  const [userPosts, setUserPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${params?.id}/posts`);
      const data = await res.json();
      setUserPosts(data);
    };

    fetchPosts();
  }, [params.id]);
  return (
    
    <div>
      <Profile
        name={userName}
        desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
        data={userPosts}
      />
    </div>
  );
};

export default userProfile;
