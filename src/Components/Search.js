import React, { useState } from 'react'

const Search = ({ getQuery }) => {
  const [text, setText] = useState('')

  const onChange = (event) => {
    setText(event.target.value)
    getQuery(event.target.value)
  }

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search by name'
          value={text}
          onChange={(event) => onChange(event)}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Search