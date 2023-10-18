import './CarSearch.css'
import { useDispatch } from 'react-redux'
import { searchTerm } from '../store'
function CarSearch() {
  const dispatch = useDispatch();
  return (
      <div className="search-container">
          <h3>My Cars</h3>
          <div>
              <form action="" >
                  <label htmlFor="">Search</label>
          <input type="text" name="" id="" onChange={(event) => {
            dispatch(searchTerm(event.target.value))
                  }} />
              </form>
          </div>
    </div>
  )
}

export default CarSearch