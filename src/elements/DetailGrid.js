import React from "react";
import styled from 'styled-components'

const DetailGrid = (props) => {

  const {
    src,
    children,
    gridColoumn,
    align,
  } = props;

  const styles = {
    src: src,
    gridColoumn: gridColoumn,
    align: align,
  };

  return (
    <Grid {...styles}>
      {children}
    </Grid>
  )


}

DetailGrid.defaultProps = {
  gridColoumn: "1fr",
  align: "left",
};

const Grid = styled.div`
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: ${(props) => props.gridColoumn};
  text-align: ${(props) => (props.align)};
`;


export default DetailGrid;