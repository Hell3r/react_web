import React from 'react'

const MyButton = ({children, ...props}) => {
    return (
        <button className="bg-blue-500 text-white p-2 rounded-md mx-2 my-2 hover:bg-blue-700" {...props}>
            {children}
        </button>
    )
}

export default MyButton