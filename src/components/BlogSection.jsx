import { useEffect, useState } from "react";
import axios from "axios";

const BlogSection = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await axios.get(
          "https://api.allorigins.win/get?url=" +
            encodeURIComponent("https://odysee.com/$/rss/@crypto:d3")
        );
        const parser = new DOMParser();
        const xml = parser.parseFromString(response.data.contents, "text/xml");
        const items = xml.querySelectorAll("item");

        // Map RSS feed items to desired format
        const postsData = Array.from(items).map((item) => {
          const title = item.querySelector("title").textContent;
          const link = item.querySelector("link").textContent;
          const description = item.querySelector("description").textContent;

          // Extract thumbnail URL from description
          const descriptionParser = new DOMParser();
          const descriptionDoc = descriptionParser.parseFromString(
            description,
            "text/html"
          );
          const img = descriptionDoc.querySelector("img");
          const thumbnail = img ? img.src : "";

          return { title, link, thumbnail };
        });

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
    <section className="p-6 bg-black text-white mb-20">
      <h2 className="text-2xl font-bold mt-10 mb-16 text-center uppercase">
        Latest Posts
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <article
            key={index}
            className="bg-gray-900 rounded-lg shadow-md overflow-hidden"
          >
            {post.thumbnail ? (
              <img
                src={post.thumbnail}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">No Image Available</p>
              </div>
            )}
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
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
