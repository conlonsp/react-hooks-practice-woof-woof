import React from 'react'

function Filter({ goodDogs, handleGoodDogs }) {
  return(
    <div id="filter-div">
      <button onClick={handleGoodDogs} id="good-dog-filter">Filter good dogs: {goodDogs === false ? 'OFF' : 'ON'}</button>
    </div>
  )
}

export default Filter