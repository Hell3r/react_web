import React from 'react'

const MySelect = ({options, defaultValue, value, onChange}) => {
    return (
        <select value={value} onChange={e => onChange(e.target.value)} className="border-2 border-gray-300 rounded-md p-2 mx-2 my-2 bg-white text-black hover:bg-gray-100 cursor-pointer">
            <option disabled value="">{defaultValue}</option>
            {options.map((option => 
                <option key={option.value} value={option.value}>{option.name}</option>
            ))}
        </select>
    )
}

export default MySelect
