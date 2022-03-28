import React, { useState } from 'react';

function Home() {
  const [city, setCity] = useState('')
  const [date, setDate] = useState('')
  const [guests, setGuests] = useState('')
  const [list, setList] = useState([])

  function Search() {
    setList([{ id: Math.random(), date: date, guests: guests, city: city }])
    console.log(list)
  }

  return (
    <div className='Home'>
      <h1 className='H1'>Rething your</h1>
      <h1 className='H1'>living and renting</h1>
      <h3 className='H3'>Make your stay painless with us</h3>
      <div className='Form'>
        <input type="text" id="inputID" value={city} placeholder="Select your cities" onChange={(e) => setCity(e.target.value)} />
        <input type="text" id="inputID" value={date} placeholder="Select your date" onChange={(e) => setDate(e.target.value)} />
        <input type="text" id="inputID" value={guests} placeholder="Select your guests" onChange={(e) => setGuests(e.target.value)} />
        <button id="inputID" className='Button1' onClick={Search}>Search</button>
      </div>
    </div>
  )
}

export default Home
