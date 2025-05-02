import { blogPosts } from "../data/blogPosts";

export default function BlogPost() {
  

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-600 mb-6">{post.date}</p>
      
    </div>
  );
}
