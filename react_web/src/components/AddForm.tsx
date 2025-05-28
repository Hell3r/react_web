import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const AddForm = ({create}) => {
    const [name, setName] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState('')

    const addCar = (e) => {
        e.preventDefault()
        const newCar = {
            id: Date.now(),
            name: name,
            model: model,
            year: year
        }
        create(newCar)
        setName('')
        setModel('')
        setYear('')
    }
  return (
    <div className="container mx-auto">
      <form>
        <MyInput value={name} onChange={(e) => setName(e.target.value)} placeholder="Название" />
        <MyInput value={model} onChange={(e) => setModel(e.target.value)} placeholder="Модель" />
        <MyInput value={year} onChange={(e) => setYear(e.target.value)} placeholder="Год" />
        <MyButton onClick={addCar}>Добавить</MyButton>
      </form>
    </div>
  )
}

export default AddForm
