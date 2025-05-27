import React, { useState } from 'react'
import CarList from './components/CarList'
import AddForm from './components/AddForm'
function App() {
  const [cars, setCars] = useState([
    {id: 1, name: 'Toyota', model: 'Chaser', year: 1998 },
    {id: 2, name: 'Toyota', model: 'Camry', year: 2012 },
    {id: 3, name: 'Toyota', model: 'Corolla', year: 2005 }
  ])

  const createCar = (newCar) => {
    setCars([...cars, newCar])
  }
  const deleteCar = (car) => {
    setCars(cars.filter(p => p.id !== car.id))
  }
  return (
    <div className="container mx-auto">
      <AddForm create={createCar} />
      {cars.length !==  0
         ? <CarList cars={cars} title="Список автомобилей" onDelete={deleteCar}/>
         : <h1 className="text-3xl font-bold underline text-center my-2">Список автомобилей пуст</h1>
      }
    </div>
  )
}

export default App
