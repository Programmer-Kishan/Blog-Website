import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";

import Subheading from "../Helper/Headings/Subheading";
import BodyCard from "../Helper/BodyCard/BodyCard";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import classes from "./BlogComp.module.css";

import AIML from "../../Images/Technology/aiml.jpg";
import ARVR from "../../Images/Technology/arvr.jpg";
import Cloud from "../../Images/Technology/cloud.png";
import Cyber from "../../Images/Technology/cyber.jpg";
import IOT from "../../Images/Technology/iot.jpg";

import Adventure from "../../Images/Travel/adventure.jpg";
import Food from "../../Images/Travel/food.jpg";
import Guides from "../../Images/Travel/guides.jpg";
import Hacks from "../../Images/Travel/hacks.png";
import Sustainable from "../../Images/Travel/sustainable.jpg";

import Alternative from "../../Images/Health/alternative.jpg";
import Fitness from "../../Images/Health/fitness.jpg";
import HealthyFood from "../../Images/Health/heatlyfood.jpeg";
import MentalHealth from "../../Images/Health/mentalhealth.jpg";
import Prevention from "../../Images/Health/prevention.png";

const TECH_IMG = [AIML, Cyber, IOT, Cloud, ARVR];
const TRAVEL_IMG = [Adventure, Food, Guides, Hacks, Sustainable];
const HEALTH_IMG = [
  Alternative,
  Fitness,
  HealthyFood,
  MentalHealth,
  Prevention,
];

const BlogComp = () => {
  const [topicList, setTopicList] = useState();
  const [images, setImages] = useState();
  const [colorClass, setColorClass] = useState();
  const [buttonColor, setButtonColor] = useState();
  const { topic } = useParams();

  useEffect(() => {
    switch (topic) {
      case "Technology":
        setTopicList([
          "Artificial Intelligence and Machine Learning",
          "Cybersecurity and Privacy",
          "Internet of Things (IoT)",
          "Cloud Computing",
          "Augmented Reality and Virtual Reality",
        ]);
        setImages(TECH_IMG);
        setColorClass("techno");
        setButtonColor("primary");
        break;
      case "Travel":
        setTopicList([
          "Destination Guides and Recommendations",
          "Travel Tips and Hacks",
          "Adventure Travel",
          "Sustainable Travel",
          "Food and Culinary Experiences",
        ]);
        setImages(TRAVEL_IMG);
        setColorClass("travel");
        setButtonColor("warning");
        break;
      case "Health":
        setTopicList([
          "Nutrition and Healthy Eating",
          "Fitness and Exercise",
          "Mental Health and Well-being",
          "Disease Prevention and Management",
          "Alternative Medicine and Holistic Healing",
        ]);
        setImages(HEALTH_IMG);
        setColorClass("health");
        setButtonColor("success");
        break;
    }
  }, []);

  return (
    <BodyCard className={`${classes["topic-blog"]} ${classes[colorClass]}`}>
      <Subheading>
        <span>{topic[0]}</span>
        {topic.slice(1, topic.length)}
      </Subheading>
      <div className={classes["topic-cards"]}>
        {topicList &&
            topicList.map((ele, ind) => {
            return (
                <>
                <Card className={classes["topic-card"]} key={Math.random()}>
                    <Card.Img variant="top" src={images[ind]} /> 
                    <Card.Body>
                    <Card.Title>{ele}</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                        do eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Ut enim ad minim veniam
                    </Card.Text>
                    <NavLink to={`/blogs/${topic}/${ele}`}>
                        <Button variant={buttonColor}>Read Blog</Button>
                    </NavLink>
                    </Card.Body>
                </Card>
                </>
            );
            })}
      </div>
    </BodyCard>
  );
};

export default BlogComp;
