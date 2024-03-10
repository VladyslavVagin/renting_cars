import Select from "react-select";
import { prices } from "lib/prices";
import {
  LabelSelect,
  SearchContainer,
  SelectContainer,
} from "./SelectPrice.styled";
import { useCar } from "hook/useCar";

const SelectPrice = ({ setPrice }) => {
  const { cars, filteredCars } = useCar();

  const handleChangePrice = (event) => {
    if (event === null) {
      setPrice("");
    } else {
      setPrice(event.value);
      // if(filteredCars.length > 0) {
      //     const filteredByPriceModel = filteredCars.filter(car => car.rentalPrice === event.value);
      //     console.log(filteredByPriceModel);
      // } else {
      //     const filteredAllByPrice = cars.filter(car => car.rentalPrice === event.value);
      //     console.log(filteredAllByPrice);
      // }
    }
  };

  return (
    <SearchContainer>
      <SelectContainer>
        <LabelSelect htmlFor="prices">Price/ 1 hour</LabelSelect>
        <Select
          onChange={handleChangePrice}
          options={prices}
          placeholder={"To $"}
          maxMenuHeight={272}
          isClearable={true}
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              border: "none",
              width: "125px",
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
    </SearchContainer>
  );
};

export default SelectPrice;