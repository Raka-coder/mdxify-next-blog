import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cache } from "react";
import { PostMetadata } from "../types/post";

const postsDirectory = path.join(process.cwd(), "contents/posts");

export const getPostMetadata = cache(async (): Promise<PostMetadata[]> => {
  try {
    const folders = await fs.promises.readdir(postsDirectory);

    const posts = await Promise.all(
      folders
        .filter((folder) =>
          fs.existsSync(path.join(postsDirectory, folder, "index.mdx")),
        )
        .map(async (folder) => {
          const fullPath = path.join(postsDirectory, folder, "index.mdx");
          const fileContents = await fs.promises.readFile(fullPath, "utf8");
          const { data } = matter(fileContents);

          if (!data.title || !data.date) {
            throw new Error(`Missing title or date in ${folder}/index.mdx`);
          }

          return {
            slug: encodeURIComponent(folder),
            title: data.title,
            date: data.date,
            thumbnail: data.thumbnail,
            description: data.description || "",
          };
        }),
    );

    return posts.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
  } catch (error) {
    console.error("Error reading posts:", error);
    return [];
  }
});

export const getPostContent = cache(async (slug: string) => {
  try {
    const decodedSlug = decodeURIComponent(slug);
    const fullPath = path.join(postsDirectory, slug, "index.mdx");

    if (!fs.existsSync(fullPath)) {
      throw new Error(`Post not found: ${slug}`);
    }

    const fileContents = await fs.promises.readFile(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const thumbnail = data.thumbnail || "";

    return {
      metadata: {
        slug: slug,
        title: data.title,
        date: data.date,
        thumbnail,
        description: data.description || "",
      },
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    throw error;
  }
});
