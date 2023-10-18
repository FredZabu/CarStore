import { CarSearch, CarForm, CarValue, CarList } from './components/index.js';

function App() {
  return (
    <div className='home'>
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  )
}

export default App