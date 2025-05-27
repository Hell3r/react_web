import React, { useState } from 'react'


const AddForm = ({create}) => {
    const [name, setName] = useState('')
    const [model, setModel] = useState('')
    const [year, setYear] = useState(0)

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
        setYear(0)
    }
  return (
    <div className="container mx-auto">
      <form>
        <input className="border-2 border-gray-300 rounded-md p-2 mx-2 my-2" 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Название" />
        <input className="border-2 border-gray-300 rounded-md p-2 mx-2 my-2" 
          type="text" 
          value={model} 
          onChange={(e) => setModel(e.target.value)} 
          placeholder="Модель" />
        <input className="border-2 border-gray-300 rounded-md p-2 mx-2 my-2" 
          type="text" 
          value={year} 
          onChange={(e) => setYear(Number(e.target.value))} 
          placeholder="Год" />
        <button className="bg-blue-500 text-white p-2 rounded-md" type="submit" onClick={addCar}>Добавить</button>
      </form>
    </div>
  )
}

export default AddForm
