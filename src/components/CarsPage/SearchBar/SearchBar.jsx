import { marks } from "lib/marks";
import Select from "react-select";
import {
  LabelSelect,
  SearchContainer,
  SelectContainer,
} from "./SearchBar.styled";
import SelectPrice from "./SelectPrice/SelectPrice";

const SearchBar = ({setFilter, setPrice}) => {

  const handleChange = (e) => {
    if(e === null) {
      setFilter('');
     return;
    } else {
      setFilter(e.value);
    }
  };

  return (
    <SearchContainer>
      <SelectContainer>
        <LabelSelect htmlFor="marks">Car brand</LabelSelect>
        <Select
          onChange={handleChange}
          options={marks}
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
            }),
          }}
        />
      </SelectContainer>
      <SelectPrice setPrice={setPrice}/>
    </SearchContainer>
  );
};

export default SearchBar;
