import React from "react";
import styled from 'styled-components'

const Table = (props) => {

  const {
    table,
    tbody,
    tr,
    th,
    td,
    children,
    align,
    _onClick,
  } = props;

  const styles = {
    align: align,
  };

  if (table) {
    return (
      <TableWrap {...styles} onClick={_onClick}>{children}</TableWrap>
    );
  }

  if (tbody) {
    return (
      <Tbody {...styles} onClick={_onClick}>{children}</Tbody>
    );
  }

  if (tr) {
    return (
      <Tr {...styles} onClick={_onClick}>{children}</Tr>
    );
  }

  if (th) {
    return (
      <Th {...styles} onClick={_onClick}>{children}</Th>
    );
  }

  if (td) {
    return (
      <Td {...styles} onClick={_onClick}>{children}</Td>
    );
  }

}

Table.defaultProps = {
  gridColoumn: "auto auto",
  align: "left",
  _onClick: () => {},
};

const TableWrap = styled.div`
  width: 100%;
  border-top: 2px solid #522772;
  border-bottom: 1px solid #522772;
`;

const Tbody = styled.div`
  
`;

const Tr = styled.div`
  display: grid;
  column-gap: 20px;
  row-gap: 20px;
  grid-template-columns: 70px auto 120px 100px;
  border-bottom: 1px solid #e3e3e3;
  &:hover {
    background-color: #f7f7f7;
    cursor: pointer
  }
  &:first-child:hover {
    background-color: inherit;
    cursor: inherit;
  }
  &:last-child {
    border-bottom: none;
  }
`;

const Th = styled.div`
  text-align: ${(props) => (props.align)};
  padding: 22px 3px 23px;
  font-size: 12px;
`;

const Td = styled.div`
  text-align: ${(props) => (props.align)};
  padding: 22px 3px 23px;
  font-size: 12px;
`;

export default Table;