import React from "react";
import { Loader } from "lucide-react";

function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center text-gray-800 p-8">
        <Loader className="text-blue-500 w-24 h-24 mx-auto mb-4 animate-spin" />
        <h1 className="text-4xl font-bold mb-4">Loading...</h1>
        <p className="text-xl mb-8">Please wait while we fetch your content.</p>
        <div className="space-y-4">
          <p className="text-lg">Did you know?</p>
          <ul className="space-y-2 text-left max-w-md mx-auto">
            {loadingFacts.map((fact, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2"></span>
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

const loadingFacts = [
  "The first computer bug was an actual real-life bug.",
  "The first programmer in the world was a woman named Ada Lovelace.",
  "The first computer mouse was made of wood.",
  "The most popular programming language changes almost every year.",
];

export default Loading;
