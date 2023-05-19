import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/");

export function getPostsFiles(postType) {
  const postTypeDirectory = path.join(postsDirectory, postType);
  return fs.readdirSync(postTypeDirectory);
}

export function getPostData(postIdentifier, postType) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, postType, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
}

export function getAllPosts(postType) {
  const postFiles = getPostsFiles(postType);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile, postType);
  });

  return allPosts;
}
