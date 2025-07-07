import Image from "next/image";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { PostMetadata } from "@/app/types/post";

interface PostCardProps {
  post: PostMetadata;
}

export default function PostCard({ post }: PostCardProps) {
  // Ensure the date is parsed correctly
  const formattedDate = format(parseISO(post.date), "MMMM dd, yyyy");
  return (
    <Link href={`/posts/${post.slug}`}>
      <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
        <div className="relative h-48 w-full">
          <Image
            src={post.thumbnail}
            alt={post.title}
            loading="lazy"
            fill
            placeholder="blur"
            blurDataURL={post.thumbnail}
            quality={100}
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 dark:text-gray-900">
            {post.title}
          </h2>
          <p className="text-gray-600 text-xs">{formattedDate}</p>
        </div>
      </div>
    </Link>
  );
}
