"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Copy, Check } from "lucide-react";

interface CopyButtonProps {
  code: string;
}

const CopyButton = ({ code }: CopyButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);

      toast.success("Code copied to clipboard!", {
        duration: 2000,
        style: {
          backgroundColor: "#fafafa", // Light background
          border: "1px solid #333", // border
          color: "#12D618", // Green text color
        },
      });
      console.log("Code copied to clipboard:", code);

      // Reset copied status after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      toast.error("Failed to copy code!", {
        duration: 2000,
        style: {
          background: "#1a1a1a",
          border: "1px solid #333",
          color: "#DD0707",
        },
      });
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className="absolute top-3 right-3 p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors cursor-pointer"
      aria-label="Copy code"
      title="Copy code"
    >
      {isCopied ? (
        // Copied icon (checkmark)
        <Check className="text-green-400 transition-colors" size={20} />
      ) : (
        // Copy icon
        <Copy
          className="text-gray-300 hover:text-white transition-colors"
          size={20}
        />
      )}
    </button>
  );
};

export default CopyButton;
