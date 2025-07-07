"use client";

import { useState } from "react";
import PostCard from "./PostCard";
import Pagination from "./Pagination";
import SortPosts from "./SortPosts";
import { PostMetadata } from "@/app/types/post";
import { parseISO } from "date-fns"; // Import parseISO for parsing date

interface PostListProps {
  posts: PostMetadata[];
}

const POSTS_PER_PAGE = 9;

const PostList = ({ posts }: PostListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

  // Sort posts with proper date parsing
  const sortedPosts = [...posts].sort((a, b) => {
    // Parse string dates ke Date objects
    const dateA = parseISO(a.date);
    const dateB = parseISO(b.date);

    // Sort based on timestamp
    if (sortOrder === "newest") {
      return dateB.getTime() - dateA.getTime();
    } else {
      return dateA.getTime() - dateB.getTime();
    }
  });

  // Calculate total pages
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  // Get current posts
  const indexOfLastPost = currentPage * POSTS_PER_PAGE;
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 500, behavior: "smooth" });
  };

  // Handle sort change
  const handleSortChange = (order: "newest" | "oldest") => {
    setSortOrder(order);
    setCurrentPage(1); // Reset ke halaman pertama
  };

  return (
    <div>
      <div className="flex flex-wrap justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          {sortOrder === "newest" ? "Latest Posts" : "Oldest Posts"}
        </h2>
        <SortPosts sortOrder={sortOrder} onSortChange={handleSortChange} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentPosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default PostList;
