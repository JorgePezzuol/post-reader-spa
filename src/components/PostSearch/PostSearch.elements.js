import styled from "styled-components";
import { Link } from "react-router-dom";

export const PostSearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50vw;
`;

export const PostSearchInput = styled.input`
  border: 2px solid black;
  margin-bottom: 12px;
  height: 15px;
  padding: 15px;
`;

export const PostSearchButtonsContainer = styled.div`
  cursor: pointer;
`;

export const PostSearchButtonAsc = styled(Link)``;

export const PostSearchButtonDesc = styled(Link)`
  margin-left: 10px;
`;
