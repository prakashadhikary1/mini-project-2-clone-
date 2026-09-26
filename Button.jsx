import React from 'react'

const Button = (props) => {
  return (
    <button className="bg-red-600 rounded-lg  px-3 py-2">{props.title}</button>
  )
}

export default Button
