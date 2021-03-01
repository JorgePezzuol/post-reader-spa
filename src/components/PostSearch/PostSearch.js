import {
  PostSearchContainer,
  PostSearchButtonAsc,
  PostSearchButtonDesc,
  PostSearchButtonsContainer,
  PostSearchInput,
} from "./PostSearch.elements";

const PostSearch = ({ setSearchPost, setSort }) => {
  return (
    <PostSearchContainer>
      <PostSearchButtonsContainer>
        <PostSearchButtonAsc to="?sort=asc" onClick={() => setSort('asc')}>Asc</PostSearchButtonAsc>
        <PostSearchButtonDesc to="?sort=desc" onClick={() => setSort('desc')}>Desc</PostSearchButtonDesc>
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
