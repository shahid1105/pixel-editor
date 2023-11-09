import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  // console.log(blogs);
  return (
    <div className="mx-2 md:mx-52 my-5">
      {blogs?.map((b) => (
        <div key={b.id}>
          <p className="text-xs text-gray-400 mt-8">{b.date}</p>
          <Link to={`/blog/${b.id}`}>
            <h1 className="text-2xl font-bold mb-1">{b.title}</h1>
          </Link>
          <p>{b.subtitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
