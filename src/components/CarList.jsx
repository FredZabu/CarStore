import { useSelector, useDispatch } from "react-redux";
import { removeCar } from '../store/index.js';
import './CarList.css'
function CarList() {
    const dispatch = useDispatch();
    const {carlist, name} = useSelector((state) => {
        const { cars, searchTerm } = state.cars;
        const { name } = state.form;
        return {
            carlist:cars.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        }),
        name: name
        }
    })
  return (
      <div>
          {carlist.map((car) => {
              return <div className="list-container" key={car.id}>
                  <p className={` ${name && car.name.toLowerCase().includes(name.toLowerCase())? 'changer': 'tochanger'}`}> {car.name} - ${car.cost}  </p>
                  <button onClick={() => {
                      dispatch(removeCar(car.id))
                  }}>Delete</button>
              </div>;
          })}
    </div>
  )
}

export default CarList