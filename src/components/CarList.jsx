import { useSelector, useDispatch } from "react-redux";
import { removeCar } from '../store/index.js';
import './CarList.css'
function CarList() {
    const dispatch = useDispatch();
    const carlist = useSelector((state) => {
        const { cars, searchTerm } = state.cars;
        return cars.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        })
    })
  return (
      <div>
          {carlist.map((car) => {
              return <div className="list-container" key={car.id}>
                  <p> {car.name} - ${car.cost}  </p>
                  <button onClick={() => {
                      dispatch(removeCar(car.id))
                  }}>Delete</button>
              </div>;
          })}
    </div>
  )
}

export default CarList