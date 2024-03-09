import { marks } from "lib/marks";
import { LabelSelect, SearchContainer, SelectContainer } from "./SearchBar.styled";

const SearchBar = () => {
  return (
    <SearchContainer>
      <SelectContainer>
      <LabelSelect htmlFor="marks">Car brand</LabelSelect>
      <select name="marks" id="marks">
        <option value="">Enter the text</option>
        {marks.map((mark) => (
          <option value={mark.toLowerCase()} key={mark}>
            {mark}
          </option>
        ))}
      </select></SelectContainer>
    </SearchContainer>
  );
};

export default SearchBar;
