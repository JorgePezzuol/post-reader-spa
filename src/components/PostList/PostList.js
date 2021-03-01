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
import useQueryParam from "../../useQueryParam";

const PostList = ({ posts }) => {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchPost, setSearchPost] = useState("");
  const { userId } = useParams();
  const [sort, setSort] = useQueryParam("sort", "");

  useEffect(() => {
    setFilteredPosts(
      posts.filter((post) =>
        post.description.toLowerCase().includes(searchPost.toLowerCase())
      )
    );
  }, [searchPost, posts]);

  return (
    <PostListContainer>
      <PostSearch setSearchPost={setSearchPost} setSort={setSort} />
      {filteredPosts
        .filter((post) => {
          return userId > 0 ? post.userId === parseInt(userId) : filteredPosts;
        })
        .sort((a, b) => {
          return sort === "asc"
            ? new Date(a.datetime) - new Date(b.datetime)
            : new Date(b.datetime) - new Date(a.datetime);
        })
        .map((post, index) => (
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
