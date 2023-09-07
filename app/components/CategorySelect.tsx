import React, { useState, useEffect } from 'react'

interface CardProps {
  onClick: (params: string) => void;
}

const Category: React.FC<CardProps> = ({ onClick }) => {

  const [selectedValue, setSelectedValue] = useState('');

  function SelectCategory(event: any) {

    if (event && event.target) {

      if (selectedValue === '') {

        const newValue = event.target.value;

        setSelectedValue(newValue);

      }

      onClick(selectedValue)

    }

  }

  return (
    
      <>
        <select value={selectedValue} className="appearance-none w-1/2 md:w-2/5 ml-10 md:ml-0  bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline left-24" onChange={SelectCategory}>
          <option value="All">All</option>
          <option value="Blog">Blog</option>
          <option value="Motorcycle">Motorcycle</option>
          <option value="Other">Other</option>
        </select>
        
      </>
  
  )
}

export default Category