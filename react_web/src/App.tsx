import React, { useState, useMemo } from 'react'
import CarList from './components/CarList'
import AddForm from './components/AddForm'
import FilterCar from './components/FilterCar'
import ModalWin from './components/UI/modal/ModalWin'
import MyButton from './components/UI/button/MyButton'
import { useCars } from './hooks/useCars'

function App() {
  const [cars, setCars] = useState([
    {id: 1, name: 'Toyota', model: 'Chaser', year: '1998' },
    {id: 2, name: 'Toyota', model: 'Camry', year: '2012' },
    {id: 3, name: 'Toyota', model: 'Corolla', year: '2005' }
  ])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState(false);
  const sortedAndSearchedCars = useCars(cars, filter.sort, filter.query)

  const createCar = (newCar) => {
    setCars(prevCars => [...prevCars, newCar])
    setModal(false)
  }

  const deleteCar = (car) => {
    setCars(prevCars => prevCars.filter(p => p.id !== car.id))
  }


  return (
    <div className="container mx-auto">
      <MyButton onClick={() => setModal(true)}>Добавить автомобиль</MyButton>
      <ModalWin visible={modal} setVisible={setModal}>
        <AddForm create={createCar} />
      </ModalWin>
      <hr className="my-2" />
      <FilterCar filter={filter} setFilter={setFilter} />
      {sortedAndSearchedCars.length !==  0
         ? <CarList cars={sortedAndSearchedCars} title="Список автомобилей" onDelete={deleteCar}/>
         : <h1 className="text-3xl font-bold underline text-center my-2">Список автомобилей пуст</h1>
      }
    </div>
  )
}

export default App
