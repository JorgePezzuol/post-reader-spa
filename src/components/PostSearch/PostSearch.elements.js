import styled from "styled-components";

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

export const PostSearchButtonAsc = styled.a``;

export const PostSearchButtonDesc = styled.a`
  margin-left: 10px;
`;
