import React, { useEffect, useState } from "react";
import { getGHRelatedTopicsAndStarGazers } from "../../network/extAPI";
import { Section, Li, Article } from "./LandingStyle";

const Landing = () => {
  const [data, setData] = useState({
    topic: {
      name: "",
      CAPname: "",
      stargazerCount: 0,
      relatedTopics: [],
    },
  });

  const getData = async (name) => {
    await getGHRelatedTopicsAndStarGazers(name)
      .then((res) => {
        setData(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Section className="pageLimiter" id="landingPage">
      <h1>¡GitHub Topic Explorer!</h1>
      <Article>
        <h2>{data.topic.name}</h2>
        <span>
          stargazerCount: <b>{data.topic.stargazerCount}</b>
        </span>
      </Article>
      <br />
      <h3>relatedTopics:</h3>
      <ul>
        {data.topic.relatedTopics.map((topic, index) => {
          return (
            <Li key={topic.name} onClick={() => getData(topic.name)}>
              <span>
                <b>{topic.name}</b>
              </span>
              <br />
              <span>stargazerCount: {topic.stargazerCount}</span>
              <br />
              <span>view more...</span>
            </Li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Landing;
