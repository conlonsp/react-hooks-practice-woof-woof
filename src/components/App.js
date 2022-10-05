import React, { useState, useEffect } from "react";
import Filter from './Filter'
import DogBar from './DogBar'
import DogContainer from './DogContainer'

function App() {
  const [dogs, setDogs] = useState([])
  const [showDog, setShowDog] = useState({})
  const [goodDogs, setGoodDogs] = useState(false)

  useEffect(() => {
    fetch('http://localhost:3001/pups')
    .then(r => r.json())
    .then(dogs => setDogs(dogs))
  }, [setDogs])

  function handleClick(id) {
    const foundDog = dogs.find(dog => dog.id === id)
    setShowDog(foundDog)
  }

  function onUpdateDog(updatedDog) {
    const updatedDogs = dogs.map(dog => dog.id === updatedDog.id ? updatedDog : dog)
    setDogs(updatedDogs)
    setShowDog(updatedDog)
  }

  

  function handleGoodDogs() {
    const filtered = dogs.filter(dog => dog.isGoodDog === true)
    if(goodDogs !== true) {
      setGoodDogs(!goodDogs)
      setDogs(filtered)
    } else {
      setGoodDogs(!goodDogs)
      fetch('http://localhost:3001/pups')
      .then(r => r.json())
      .then(dogs => setDogs(dogs))
    }
  }

  return (
    <div className="App">
      <Filter goodDogs={goodDogs} handleGoodDogs={handleGoodDogs} />
      <DogBar handleClick={handleClick} dogs={dogs} />
      <DogContainer dog={showDog} onUpdateDog={onUpdateDog} />
    </div>
  );
}

export default App;
