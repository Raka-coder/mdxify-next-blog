"use client";
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap md:p-0 p-0 mb-8">
      <div className="flex items-center flex-shrink-0 mr-6">
        <div className="h-8 w-8 rounded-lg bg-gradient-to-br bg-gray-800 flex items-center justify-center">
          <span className="font-bold text-sm text-white p-2">MB</span>
        </div>
        <span className="font-semibold text-xl tracking-tight pl-2">
          Mdxify Blog
        </span>
      </div>
      <div className="block lg:hidden">
        <ThemeToggle />
      </div>
      <div
        className={
          `lg:flex lg:items-end lg:w-auto lg:justify-end` +
          (isOpen ? " block" : " hidden")
        }
      >
        <div className="text-sm lg:flex-grow">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
