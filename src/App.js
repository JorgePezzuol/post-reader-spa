import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalStyle } from "./globalStyles";
import styled from "styled-components";
import { UserList, PostList } from "./components";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

function App() {
  const API_URL = "http://localhost:5000";
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
      const data = await fetchEntity("posts");
      setPosts(data);
    };
    getAllPosts();
  }, []);

  useEffect(() => {
    const getAllUsers = async () => {
      const data = await fetchEntity("users");
      setUsers(
        data.map((user) => ({
          ...user,
          postsPerUser: posts.filter((post) => post.userId === user.id).length,
        }))
      );
    };
    getAllUsers();
  }, [posts]);

  const fetchEntity = async (entityName) => {
    const response = await fetch(`${API_URL}/${entityName}`);
    const data = await response.json();
    return data;
  };

  return (
    <Router>
      <Container>
        <GlobalStyle />
        <Route path="/users/:userId?">
          <UserList users={users} />
          <PostList posts={posts} />
        </Route>
      </Container>
    </Router>
  );
}

export default App;
