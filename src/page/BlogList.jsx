import { blogPosts } from "../data/blogPosts";
import { useState } from "react";

export default function BlogList() {
  const [activeId, setActiveId] = useState(null);

  const handleClick = (id) => {
    setActiveId(prevId => (prevId === id ? null : id));
  };

  return (
    <div id="blog" className="max-w-3xl mx-auto p-4">
      <h1 className="text-center  p-14 text-3xl sm:text-5xl font-bold text-allbg dark:text-logobg">Blog</h1>
      {blogPosts.map((post) => (
        <div key={post.id} className="p-4 mb-4 border rounded-xl shadow-gray-500 shadow-md">
          <h2 className="text-xl font-semibold dark:text-white">{post.title}</h2>
          <p className="text-gray-600 dark:text-logobg text-sm">{post.date}</p>
          <p className="text-gray-800 dark:text-logobg mt-2">{post.summary}</p>

          <button
            className="mt-2 text-black hover:underline dark:text-logobg"
            onClick={() => handleClick(post.id)}
          >
            {activeId === post.id ? "Hide" : "Read More"}
          </button>

          {activeId === post.id && (
            <p className="prose mt-3 dark:text-logobg">{post.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}
