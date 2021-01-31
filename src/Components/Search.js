import React from 'react'

function Search() {
    return (
        <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search by name'
          //value={text}
          //onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
    )
}

export default Search
