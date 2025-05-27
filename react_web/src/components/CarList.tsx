import React from 'react'
import Car from './CarItem'


const CarList = ({cars, title, onDelete}) => {
  return (
    <div className="container mx-auto p-4 border-2 border-gray-300 rounded-md">
      <h1 className="text-3xl font-bold underline text-center my-2">{title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cars.map((car) => (
          <Car car={car} key={car.id} onDelete={onDelete} />
        ))}
      </div>
    </div>
  )
}

export default CarList
