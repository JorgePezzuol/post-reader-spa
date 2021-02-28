import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostSearch from "../PostSearch/PostSearch";
import {
  PostListContainer,
  PostCard,
  PostCardBody,
  PostDescription,
  PostDatetime,
} from "./PostList.elements";

const PostList = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchPost, setSearchPost] = useState("");
  const { userId } = useParams();

  useEffect(() => {
    setFilteredPosts(
      posts.filter(
        (post) =>
          post.description.toLowerCase().includes(searchPost.toLowerCase()) &&
          post.userId === parseInt(userId)
      )
    );
  }, [searchPost, posts, userId]);

  return (
    <PostListContainer>
      <PostSearch setSearchPost={setSearchPost} />
      {filteredPosts.map((post, index) => (
        <PostCard key={index}>
          <PostCardBody>
            <PostDatetime>{post.datetime}</PostDatetime>
            <PostDescription>{post.description}</PostDescription>
          </PostCardBody>
        </PostCard>
      ))}
    </PostListContainer>
  );
};

export default PostList;
