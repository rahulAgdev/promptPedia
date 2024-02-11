"use client";
import { useState, useEffect } from "react";
import PromptCard from "./PromptCard";
const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => {
        return (
          <PromptCard
            key={post._id}
            post={post}
            handleTagClick={handleTagClick}
          />
        );
      })}
    </div>
  );
};

const Feed = () => {
  const handleTagClick = (tag) => {
    setSearchText(tag);
    console.log("value of tag is : " ,tag);
    const searchResult = filterPrompts(tag);
    console.log("valued of searchRefult after filtering is : " ,searchResult);
    setSearchedResults(searchResult);
  }
  const [searchText, setSearchText] = useState("");
  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i");
    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    const promptInput = e.target.value;
    setSearchText(promptInput);
    // console.log("prompt inside the input is : " , promptInput);
    // we have to somehow set the setPosts to the posts which contain the value of searchText.
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };
  // console.log(searchedResults)
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for tag pr username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      {/* <PromptCardList data={posts} handleTagClick={() => {}} /> */}
      {searchText ? (
        <PromptCardList data={searchedResults} handleTagClick={handleTagClick} />
      ): (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
