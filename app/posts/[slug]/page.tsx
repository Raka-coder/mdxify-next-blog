import { format, parseISO } from "date-fns";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostContent, getPostMetadata } from "@/app/utils/mdx";
import Image from "next/image";
import components from "../../../components/MDXComponent";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const posts = await getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default async function PostPage({ params }: PostPageProps) {
  try {
    const { slug } = await params;
    const { metadata, content } = await getPostContent(slug);
    const formattedDate = format(parseISO(metadata.date), "MMMM dd, yyyy");

    return (
      <>
        <SEO
          title={metadata.title}
          description={
            metadata.description || `Read ${metadata.title} on our blog`
          }
          image={metadata.thumbnail}
          article={true}
        />
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <Navbar />
          <div className="relative h-96 w-full mb-8">
            <Image
              src={metadata.thumbnail}
              alt={metadata.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
          <time
            dateTime={metadata.date}
            className="text-gray-600 mb-8 block text-base"
          >
            {formattedDate}
          </time>
          <div className="prose dark:prose-invert prose-lg max-w-none">
            <MDXRemote source={content} components={components} />
          </div>
          <Footer />
        </article>
      </>
    );
  } catch (error) {
    console.error("Error loading post:", error);
    return <div>Error loading post</div>;
  }
}
