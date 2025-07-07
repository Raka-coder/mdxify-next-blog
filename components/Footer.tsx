"use client";
import Link from "next/link";
import { Github } from "lucide-react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

export default function Footer() {
  const tooltipId = "github-tooltip";

  return (
    <>
      <footer className="bg-muted/50 mt-20">
        <div className="container mx-auto">
          <div className="grid">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br bg-gray-800 flex items-center justify-center">
                  <span className="font-bold text-sm text-white">MB</span>
                </div>
                <span className="font-semibold text-xl tracking-tight">
                  Mdxify Blog
                </span>
              </div>
              <p className="text-muted-foreground">
                Your go-to destination for technology insights and development
                tutorials.
              </p>
            </div>
            <div className="flex items-end space-x-2 lg:w-auto lg:justify-end justify-end mt-4">
              <Link
                href="https://github.com/Raka-coder/mdxify-next-blog"
                target="_blank"
                rel="noopener noreferrer"
                data-tooltip-id={tooltipId}
                data-tooltip-content="Stars repo on GitHub"
                className="cursor-pointer"
              >
                <Github className="h-6 w-6" />
              </Link>
            </div>
            <div className="border-t border-gray-800 dark:border-gray-700 mt-8 pt-8 text-center text-muted-foreground">
              <p className="text-sm">
                &copy; 2025 Mdxify. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        <Tooltip
          id={tooltipId}
          place="top"
          className="!bg-zinc-800 !text-white text-center block !text-sm !px-3 !py-1.5 !rounded-md shadow-lg"
          delayShow={100}
        />
      </footer>
    </>
  );
}
