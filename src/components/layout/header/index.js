import React from "react";
import * as Styled from "./style";

const Header = () => {
  return (
    <Styled.Header>
      <Styled.Navbar>
        <Styled.NavAnchord to="/">Home</Styled.NavAnchord>
      </Styled.Navbar>
    </Styled.Header>
  );
};

export default Header;
