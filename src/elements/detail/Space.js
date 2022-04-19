import React from "react";
import styled from 'styled-components'

const Grid = (props) => {

  const {
    children,
    size,
  } = props;

  const styles = {
    children: children,
    size: size,
  };

  return (
    <SpaceBox {...styles}>
      {children}
    </SpaceBox>
  )


}

Grid.defaultProps = {
  gridColoumn: "1fr",
  align: "left",
  size: "8px"
};

const SpaceBox = styled.div`
  width: ${(props) => (props.size)}
`;


export default Grid;