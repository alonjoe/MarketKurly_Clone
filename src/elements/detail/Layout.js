import React from "react";
import styled from 'styled-components'

const Layout = (props) => {

  const {

    children,
  } = props;

  const styles = {
  };

  return (
    <Container>
      {children}
    </Container>
  )


}

Layout.defaultProps = {
};

const Container = styled.div`
  width: 1050px;
  margin: 0 auto;
  padding-top: 20px;
`;


export default Layout;