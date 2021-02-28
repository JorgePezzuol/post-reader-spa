import {
  PostSearchContainer,
  PostSearchButtonAsc,
  PostSearchButtonDesc,
  PostSearchButtonsContainer,
  PostSearchInput,
} from "./PostSearch.elements";

const PostSearch = ({ setSearchPost }) => {
  return (
    <PostSearchContainer>
      <PostSearchButtonsContainer>
        <PostSearchButtonAsc>Asc</PostSearchButtonAsc>
        <PostSearchButtonDesc>Desc</PostSearchButtonDesc>
      </PostSearchButtonsContainer>
      <PostSearchInput
        type="text"
        placeholder="Search for posts..."
        onChange={(e) => setSearchPost(e.target.value)}
      />
    </PostSearchContainer>
  );
};

export default PostSearch;
