import React from 'react'

interface CardProps {
    onClick: () => void;
    label:string
    className:string
    name:string
    defaultChecked:boolean
  }

const Category: React.FC<CardProps> = ({onClick,label,className,name,defaultChecked}) => {


  return (
            <div className={className}>
                <label htmlFor={label} className='cursor-pointer'>{label} </label>
                <input type="radio" className='hidden' name={name} id={label} onChange={onClick}  defaultChecked={defaultChecked} />
            </div>
  )
}

export default Category