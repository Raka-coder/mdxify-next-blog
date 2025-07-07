import Link from "next/link";
import { AlertTriangle, Home } from "lucide-react";

function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center text-gray-800 p-8">
        <AlertTriangle className="text-yellow-500 w-24 h-24 mx-auto mb-4" />
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-4">Oops! Page Not Found</h2>
        <p className="text-lg mb-8">
          The page you&apos;re looking for seems to have wandered off.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="flex items-center justify-center text-blue-600 hover:text-blue-800"
          >
            <Home className="mr-2" size={20} /> Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default NotFound;
