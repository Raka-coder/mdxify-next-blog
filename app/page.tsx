import { getPostMetadata } from "@/app/utils/mdx";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PostList from "@/components/PostList";
import Footer from "@/components/Footer";

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const posts = await getPostMetadata();

  return (
    <main className="container mx-auto px-12 lg:px-12 lg:py-8">
      <Navbar />
      <Hero />
      <PostList posts={posts} />
      <Footer />
    </main>
  );
}
