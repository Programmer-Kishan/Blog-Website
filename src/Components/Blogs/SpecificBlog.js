import React from 'react';
import { useParams } from "react-router-dom";

import BodyCard from '../Helper/BodyCard/BodyCard';

const SpecificBlog = () => {

    const { subTopic } = useParams()
    console.log("Hello " + subTopic);

  return (
    <BodyCard>
        <h1>{subTopic}</h1>
    </BodyCard>
  )
}

export default SpecificBlog