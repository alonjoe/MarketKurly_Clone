import React from "react";
import styled from 'styled-components'

const Grid = (props) => {

  const {
    src,
    children,
    gridColoumn,
    align,
    gap,
    width,
    is_flex,
  } = props;

  const styles = {
    src: src,
    gridColoumn: gridColoumn,
    align: align,
    gap: gap,
    width: width,
  };

  if (is_flex) {
    return (
      <WrapFlex {...styles}>
        {children}
      </WrapFlex>
    )
  }

  return (
    <WrapGrid {...styles}>
      {children}
    </WrapGrid>
  )


}

Grid.defaultProps = {
  gridColoumn: "1fr",
  align: "left",
  gap: "60px",
  width: "inherit",
};

const WrapGrid = styled.div`
  display: grid;
  column-gap: ${(props) => props.gap};
  grid-template-columns: ${(props) => props.gridColoumn};
  text-align: ${(props) => (props.align)};
  width: ${(props) => (props.width)};
`;

const WrapFlex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${(props) => (props.width)};
`;

export default Grid;