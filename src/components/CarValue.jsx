import './CarValue.css';
import { useSelector } from 'react-redux';
function CarValue() {

    const totalCost = useSelector((state) => {
        const { cars, searchTerm } = state.cars;
        return cars.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        }).reduce((acc, car) => {
          return acc + car.cost
        }, 0)
    })
  return (
      <div className="carValue-container">
          <div>
              <h3>Total Value</h3>
              <p>${totalCost}</p>
          </div>
    </div>
  )
}

export default CarValue