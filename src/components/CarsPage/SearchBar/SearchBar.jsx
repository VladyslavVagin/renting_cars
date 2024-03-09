import { marks } from "lib/marks";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import {
  LabelSelect,
  SearchBtn,
  SearchContainer,
  SelectContainer,
} from "./SearchBar.styled";

const SearchBar = () => {
  return (
    <SearchContainer>
      <SelectContainer>
        <LabelSelect htmlFor="marks">Car brand</LabelSelect>
        <Select
          options={marks}
          makeAnimated={makeAnimated}
          placeholder={"Enter the text"}
          maxMenuHeight={272}
          isClearable={true}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              border: "none",
              width: "224px",
              height: "48px",
              background: "#f7f7fb",
              borderRadius: "14px",
              fontSize: "18px",
              fontWeight: "500",
              color: "black",
              fontFamily: "Manrope",
              cursor: "pointer",
            }),
            option: (baseStyles, state) => ({
              ...baseStyles,
              border: "none",
              fontSize: "16px",
              fontWeight: "500",
              fontFamily: "Manrope",
              lineHeight: "125%",
              color: state.isFocused
                ? "rgba(18, 20, 23, 0.938)"
                : "rgba(18, 20, 23, 0.2)",
            }),
            valueContainer: (baseStyles) => ({
              ...baseStyles,
              borderRadius: "14px",
              boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
            })
          }}
        />
      </SelectContainer>
      <SearchBtn type="button">Search</SearchBtn>
    </SearchContainer>
  );
};

export default SearchBar;
