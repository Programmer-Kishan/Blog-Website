import React from 'react';

import Subheading from '../Helper/Headings/Subheading';
import NewsCard from "./NewsCard";
import newsData from './news.json';

import classes from "./News.module.css";


const News = () => {

  return (
    <div className={classes["news-box"]}>
        <Subheading>
            <span>O</span>ur <span>N</span>ewsfeed
        </Subheading>
        <div>
            {newsData.news.map(ele => {
                return <NewsCard 
                    key = {Math.random()}
                    topic = {ele.topic}
                    title = {ele.title}
                    description = {ele.description}
                    author = {ele.author}
                    date = {ele.date}
                />
            })}
        </div>
    </div>
  )
}

export default News;