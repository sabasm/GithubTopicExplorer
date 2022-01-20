import React, { useEffect, useState } from "react";
import { getGHRelatedTopicsAndStarGazers } from "../../network/extAPI";

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
    <section className="pageLimiter" id="landingPage">
      <h1>¡GitHub Topic Explorer!</h1>
      <br />
      <h2>{data.topic.name}</h2>
      <span>stargazerCount: {data.topic.stargazerCount}</span>
      <br />
      <br />
      <h3>relatedTopics:</h3>
      <br />
      <ul>
        {data.topic.relatedTopics.map((topic, index) => {
          return (
            <li key={topic.name}>
              <span>
                <b>{topic.name}</b>
              </span>
              <br />
              <span>stargazerCount: {topic.stargazerCount}</span>
              <br />
              <span onClick={() => getData(topic.name)}>view more...</span>
              <br />
              <br />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Landing;
