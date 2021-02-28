import { Link } from "react-router-dom";
import styled from "styled-components";

export const UserListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 20vw;
  padding: 20px 20px;
`;

export const UserLink = styled(Link)`
  text-decoration: none;
  padding: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  background: ${props => props.active ? '#eee' : ''};
`;

export const UserName = styled.span``;

export const UserNumPostsBadge = styled.span`
  padding: 5px 10px;
  border-radius: 50%;
  background-color: purple;
  color: white;
`;

export const UserInputSearch = styled.input`
  border: 2px solid black;
  margin-bottom: 12px;
  height: 15px;
  padding: 15px;
`;
