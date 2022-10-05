import React from 'react'

function DogBar({ dogs, handleClick }) {

  return (
    <div id="dog-bar">
      {dogs.map(dog => {
        return (
          <span onClick={()=>handleClick(dog.id)} key={dog.id}>{dog.name}</span>
        )
      })}
    </div>
  )
}

export default DogBar