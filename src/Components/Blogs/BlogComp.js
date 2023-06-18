import React, { useState, useEffect } from 'react';
import { NavLink, useParams } from "react-router-dom";

import BodyCard from '../Helper/BodyCard/BodyCard';

const BlogComp = () => {

    const [topicList, setTopicList] = useState()
    const { topic } = useParams()

    useEffect(() => {
        switch(topic) {
            case "tech":
                setTopicList([
                    "Artificial Intelligence and Machine Learning",
                    "Cybersecurity and Privacy",
                    "Internet of Things (IoT)",
                    "Cloud Computing",
                    "Augmented Reality and Virtual Reality",
                ])
                break;
            case "travel":
                setTopicList([
                    "Destination Guides and Recommendations",
                    "Travel Tips and Hacks",
                    "Adventure Travel",
                    "Sustainable Travel",
                    "Food and Culinary Experiences",
                ])
                break;
            case "health":
                setTopicList([
                    "Nutrition and Healthy Eating",
                    "Fitness and Exercise",
                    "Mental Health and Well-being",
                    "Disease Prevention and Management",
                    "Alternative Medicine and Holistic Healing",
                ])
                break;
        }
    }, [])

  return (
    <BodyCard>
        {topicList && topicList.map(ele => {
            return <NavLink to={`/blogs/${topic}/${ele}`} key={Math.random()}>{ele}</NavLink>
        })}
    </BodyCard>
  )
}

export default BlogComp