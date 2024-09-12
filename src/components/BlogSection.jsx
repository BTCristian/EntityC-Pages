import React, { useEffect, useState } from "react";
import axios from "axios";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        // Fetch RSS feed
        const response = await axios.get(
          "https://api.allorigins.win/get?url=" +
            encodeURIComponent("https://odysee.com/$/rss/@crypto:d3")
        );
        const parser = new DOMParser();
        const xml = parser.parseFromString(response.data.contents, "text/xml");
        const items = xml.querySelectorAll("item");

        // Map RSS feed items to desired format
        const postsData = Array.from(items).map((item) => ({
          title: item.querySelector("title").textContent,
          link: item.querySelector("link").textContent,
          description: item.querySelector("description").textContent,
          thumbnail:
            item.querySelector("media\\:thumbnail")?.getAttribute("url") || "",
        }));
        setPosts(postsData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeed();
  }, []);

  if (loading)
    return <p className="text-center text-lg font-medium">Loading...</p>;
  if (error)
    return (
      <p className="text-center text-lg font-medium text-red-500">
        Error: {error.message}
      </p>
    );

  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-center">Latest Posts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <article
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {post.thumbnail && (
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-700 text-base mb-4">{post.description}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Read More
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
