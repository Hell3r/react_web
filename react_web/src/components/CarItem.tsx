import React from 'react'

const Car = ({ car, onDelete }) => {
  return (
    <div className="border-2 border-gray-300 rounded-md p-4 hover:bg-gray-100 transition-all duration-300 justify-center">
          <div className="flex justify-between items-center"> 
            {car.name} {car.model} - {car.year}
          </div>
          <button className="bg-blue-500 text-white p-2 rounded-md mx-2 my-2 hover:bg-blue-700" onClick={() => onDelete(car)}>Удалить</button>
    </div>
  )
}

export default Car;