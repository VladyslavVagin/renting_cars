import { useSelector } from "react-redux"
import { selectCars } from "../../../redux/selectors"
import CarsCard from "../CarsCard/CarsCard";
import { ListCars } from "./CarsListCards.styled";

const CarsListCards = () => {
const allCars = useSelector(selectCars);
console.log(allCars);

  return (
    <div>
        <ListCars>
            {allCars.map((car, index) => (
             <CarsCard car={car} key={`${car.id}-${index}`}/>  
            ))}
        </ListCars>
    </div>
  )
}

export default CarsListCards