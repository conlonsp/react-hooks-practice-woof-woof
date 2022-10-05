import React from 'react'
import Dog from './Dog'

function DogContainer({ dog, onUpdateDog }) {
  return (
    <div id="dog-summary-container">
      <h1>DOGGO:</h1>
      <div id="dog-info">
        <Dog dog={dog} onUpdateDog={onUpdateDog} />
      </div>
    </div>
  )
}

export default DogContainer