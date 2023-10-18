import { useSelector } from "react-redux/es/hooks/useSelector"
import './CarList.css'
function CarList() {
    const carlist = useSelector((state) => {
        console.log(state.cars.cars);
        return state.cars.cars;
    })
  return (
      <div>
          {carlist.map((car) => {
              return <div className="list-container" key={car.id}>
                  <p> {car.name} - ${car.cost}  </p>
                  <button>Delete</button>
              </div>;
          })}
    </div>
  )
}

export default CarList