import './CarForm.css';
import { changeName, changeCost, addCar } from '../store/index.js';
import { useDispatch, useSelector } from 'react-redux';

function CarForm() {
    const dispatch = useDispatch();
    const {name, cost} = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        };
    })
  return (
      <div>
          <form action="" onSubmit={(event) => {
              event.preventDefault();
              dispatch(addCar({ name, cost }))
              
              
          }} >
              
              <div className="input-container">
                  <label htmlFor="">Car Name</label>
                  <input type="text" value={name} onChange={(event) => {
                      
                      dispatch(changeName(event.target.value))
                      console.log(name);
                  }} />
              </div>
              <div className="input-container">
                  <label htmlFor="">Car Value</label>
                  <input type='number' value={cost || ''} onChange={(event) => {
                      const costValue = parseInt(event.target.value) || 0;
                      dispatch(changeCost(costValue))
                  }} />
              </div>
              <button type="submit">Add Car</button>
          </form>
    </div>
  )
}

export default CarForm