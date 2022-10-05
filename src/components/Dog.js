import React from 'react'

function Dog({ dog, onUpdateDog }) {
  const {id, image, name, isGoodDog} = dog;
  
  function handleClick() {
    fetch(`http://localhost:3001/pups/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        isGoodDog: !isGoodDog
      })
    })
    .then(r => r.json())
    .then(data => {
      onUpdateDog(data)
      dog.isGoodDog = data.isGoodDog
    })
  }

  return (
    <div>
      <img src={image} alt={name}/>
      <h2>{name}</h2>
      {id > 0 ?
        <button onClick={handleClick}>{isGoodDog ? 'Good Boy' : 'Bad Dog'}</button> 
      : 
        ''
      }
    </div>
  )
}

export default Dog