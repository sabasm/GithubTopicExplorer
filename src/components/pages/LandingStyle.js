import styled from "styled-components";

const Article = styled.article`
  padding: 1rem 2rem;
  margin: 1rem;
  border: lightgray solid 1px;
  border-radius: 0.3rem;
  box-shadow: darkgray -0.2rem 0.2rem 0.2rem;
`;

const Li = styled.li`
  padding: 1rem;
  margin: 1rem;
  border: lightgray solid 1px;
  border-radius: 0.3rem;
  box-shadow: darkgray -0.1rem 0.1rem 0.2rem;
  &:hover {
    box-shadow: darkgray -0.2rem 0.2rem 0.3rem;
    cursor: pointer;
  }
`;

const Section = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
`;

export { Section, Li, Article };
