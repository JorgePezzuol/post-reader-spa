import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  UserListContainer,
  UserLink,
  UserName,
  UserNumPostsBadge,
  UserInputSearch,
} from "./UserList.elements";

const UserList = ({ users }) => {
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const { userId } = useParams();

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  return (
    <UserListContainer>
      <UserInputSearch
        type="text"
        placeholder="Search for users..."
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {filteredUsers.map((user, index) => (
        <UserLink active={parseInt(userId) === user.id ? 0 : 1}  key={index} to={`/users/${user.id}`}>
          <UserName>{user.name}</UserName>
          <UserNumPostsBadge>{user.postsPerUser}</UserNumPostsBadge>
        </UserLink>
      ))}
    </UserListContainer>
  );
};

export default UserList;
