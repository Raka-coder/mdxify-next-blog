"use client";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const tooltipId = "theme-toggle-tooltip";

  return (
    <>
      <button
        data-tooltip-id={tooltipId}
        data-tooltip-content={
          theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
        }
        onClick={toggleTheme}
        className="p-1.5 rounded-lg flex items-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-xl"
      >
        {theme === "dark" ? (
          <Sun className="h-6 w-6 text-yellow-300" />
        ) : (
          <Moon className="h-6 w-6 text-zinc-800 dark:text-white" />
        )}
      </button>

      <Tooltip
        id={tooltipId}
        place="left-end"
        className="!bg-zinc-800 !text-white text-center block !text-sm !px-3 !py-1.5 !rounded-md shadow-lg"
        delayShow={100}
      />
    </>
  );
}
