import React from 'react'
import MyButton from '../UI/button/MyButton'








const Car = ({ car, onDelete }) => {
  return (
    <div className="border-2 border-gray-300 rounded-md p-4 hover:bg-gray-100 transition-all duration-300 justify-center">
          <div className="flex justify-between items-center"> 
            {car.name} {car.model} - {car.year}
          </div>
          <MyButton onClick={() => onDelete(car)}>Удалить</MyButton>
    </div>
  )
}

export default Car;