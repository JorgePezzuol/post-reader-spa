import styled from "styled-components";

export const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px 20px;
`;

export const PostCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 50vw;
  margin-top: 15px;
  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  
`;

export const PostCardBody = styled.div`
  padding: 15px 20px;
`;

export const PostDescription = styled.p`
  padding-top: 10px;
`;

export const PostDatetime = styled.p`
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`;
