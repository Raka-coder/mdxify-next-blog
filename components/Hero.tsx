"use client";
import { ChevronRightCircle } from "lucide-react";

export default function Hero() {
  const scrollToContent = () => {
    const contentElement = document.getElementById("blog-content");
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative h-[500px] mb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/bg.png')] bg-black bg-opacity-50 mix-blend-screen dark:mix-blend-screen rounded-lg" />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">
          Discover Stories That Matter
        </h1>
        <p className="text-lg md:text-lg text-center mb-8 max-w-2xl">
          Explore insightful articles, fresh perspectives, and creative ideas.
          Your next great read starts here.
        </p>
        <div className="flex space-x-4">
          <button
            id="blog-content"
            onClick={scrollToContent}
            className="bg-transparent border-2 border-white text-white px-4.5 py-2.5 rounded-lg font-semibold transition duration-300 cursor-pointer"
          >
            Read More <ChevronRightCircle className="inline-block ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}
