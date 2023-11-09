import React, { useEffect, useState } from "react";
import img from "../../../public/banner.jpg";
import { useParams } from "react-router-dom";

const BlogContent = () => {
  const { id } = useParams();
  // console.log(id)
  const [blogs, setBlogs] = useState({});
  const {
    Introduction,
    tools,
    date,
    title,
    subtitle,
    image,
    image1,
    photopia,
    pixelEditor,
  } = blogs;
  useEffect(() => {
    fetch(`/blog/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, [id]);

  return (
    <>
      <div>
        <img src={img} alt="" />
      </div>
      <div className="mx-2 md:mx-40 my-5">
        <p className="text-xs text-gray-400 mt-8">{date}</p>
        <h1 className="text-2xl font-bold mb-1">{title}</h1>
        <p>{subtitle}</p>
        <h3 className="mt-4">{pixelEditor}</h3>
        <img className="md:mx-10 md:my-10 my-3" src={image} alt="" />
        <h3>{photopia}</h3>
        <img className="md:mx-10 md:my-10 my-3" src={image1} alt="" />
        <h3>{Introduction}</h3>
        <div>
          {tools &&
            tools.map((t) => (
              <>
                <h3 className="text-xl font-semibold list-item" key={t.icon}>
                  {t.icon}
                </h3>
                <h3 key={t.function}>{t.function}</h3>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default BlogContent;
