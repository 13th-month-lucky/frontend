import React, { useEffect, useState } from "react";
import axios from "axios";

const News = (props) => {
  const [news, setNews] = useState([]);
  const code = props.code;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`/api/etfnews/${code}`);
        const newsData = response.data;
        setNews(newsData[0].data);
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, [code]);

  console.log(news);
  return (
    <>
      {news.map((item) => (
        <div
          key={item.id}
          onClick={() => {
            window.open(item.news_link);
          }}
          className="mt-3 border-2 rounded-lg p-3"
        >
          <div className="flex felx-row">
            {item.news_img ? (
              <div className="mr-4">
                <img className="w-40 h-20" src={item.news_img} alt="News" />
              </div>
            ) : (
              <div></div>
            )}
            <div>
              <div className="font-bold mt-5">{item.news_title}</div>
            </div>
          </div>
          <div className="flex flex-col mt-3">
            <div className="text-xs">{item.news_content}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default News;
