import React from 'react'
import Car from './CarItem'
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const CarList = ({cars, title, onDelete}) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline text-center my-2">{title}</h1>
        <TransitionGroup>
          {cars.map((car) => (
            <CSSTransition
              key={car.id}
              timeout={500}
              classNames="cars"
            >
              <Car car={car} onDelete={onDelete} />
            </CSSTransition>
          ))}
        </TransitionGroup>
    </div>
  )
}

export default CarList
