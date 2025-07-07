"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, Calendar, Clock, Check } from "lucide-react";

interface SortPostsProps {
  sortOrder: "newest" | "oldest";
  onSortChange: (order: "newest" | "oldest") => void;
}

const SortPosts = ({ sortOrder, onSortChange }: SortPostsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options = [
    {
      value: "newest" as const,
      label: "Newest First",
      icon: Calendar,
      description: "Show latest posts first",
    },
    {
      value: "oldest" as const,
      label: "Oldest First",
      icon: Clock,
      description: "Show oldest posts first",
    },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: "newest" | "oldest") => {
    onSortChange(value);
    setIsOpen(false);
  };

  const selectedOption = options.find((option) => option.value === sortOrder);

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm text-gray-600 dark:text-gray-400">Sort by:</span>

      <div className="relative inline-block text-left" ref={dropdownRef}>
        {/* Dropdown Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-between w-56 px-3 py-2 text-sm font-medium text-gray-700  bg-white border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors cursor-pointer"
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          <div className="flex items-center">
            {selectedOption && (
              <selectedOption.icon className="w-4 h-4 mr-2 text-gray-500" />
            )}
            <span>{selectedOption?.label}</span>
          </div>
          <ChevronDown
            className={`w-4 h-4 ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 z-10 w-56 mt-2 bg-white border border-gray-200  rounded-lg shadow-lg animate-in fade-in-0 zoom-in-95">
            <div className="py-2" role="menu">
              {options.map((option) => {
                const IconComponent = option.icon;
                return (
                  <button
                    key={option.value}
                    onClick={() => handleSelect(option.value)}
                    className={`flex items-center w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors cursor-pointer ${
                      sortOrder === option.value ? "bg-blue-50 " : ""
                    }`}
                    role="menuitem"
                  >
                    <IconComponent
                      className={`w-4 h-4 mr-3 ${
                        sortOrder === option.value
                          ? "text-blue-700 "
                          : "text-gray-700"
                      }`}
                    />
                    <div className="flex-1">
                      <div
                        className={`text-sm font-medium ${
                          sortOrder === option.value
                            ? "text-blue-700 "
                            : "text-gray-700"
                        }`}
                      >
                        {option.label}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        {option.description}
                      </div>
                    </div>
                    {sortOrder === option.value && (
                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SortPosts;
