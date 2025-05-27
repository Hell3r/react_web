import React, { useState, useMemo } from 'react'
import CarList from './components/CarList'
import AddForm from './components/AddForm'
import MySelect from './UI/select/MySelect'
import MyInput from './UI/input/MyInput'
import FilterCar from './components/FilterCar'

function App() {
  const [cars, setCars] = useState([
    {id: 1, name: 'Toyota', model: 'Chaser', year: '1998' },
    {id: 2, name: 'Toyota', model: 'Camry', year: '2012' },
    {id: 3, name: 'Toyota', model: 'Corolla', year: '2005' }
  ])
  const [filter, setFilter] = useState({sort: '', query: ''})

  const createCar = (newCar) => {
    setCars([...cars, newCar])
  }

  const deleteCar = (car) => {
    setCars(cars.filter(p => p.id !== car.id))
  }

  const sortedCars = useMemo(() => {
    console.log('sortedCars')
    if (filter.sort) {
      return [...cars].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return cars
  }, [filter.sort, cars])
  
  const sortedAndSearchedCars = useMemo(() => {
    return sortedCars.filter(car => car.name.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedCars])


  return (
    <div className="container mx-auto">
      <AddForm create={createCar} />
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
