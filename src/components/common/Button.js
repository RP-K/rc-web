import React from 'react'

const Button = ({name,click}) => {
  return (
    <div>
        <button className='bg-secondary-main px-3 py-0.5  border-2 text-white' onClick={click}>{name}</button>
    </div>
  )
}

export default Button