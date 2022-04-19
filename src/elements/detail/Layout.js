import React from "react";
import styled from 'styled-components'

const Layout = (props) => {

  const {
    width,
    children,
    margin,
  } = props;

  const styles = {
    width: width,
    margin: margin,
  };

  return (
    <Container {...styles}>
      {children}
    </Container>
  )


}

Layout.defaultProps = {
  width: "1050px",
  margin: "0 auto",
};

const Container = styled.div`
  width: ${(props) => (props.width)};
  margin: ${(props) => (props.margin)};
  padding-top: 20px;
`;


export default Layout;