import React from 'react'


function Search() {
    return (
        <div>
            <form>
                <h3>I'm looking for</h3>
                <input ref="srch" type="search" id="search" placeholder="Search..." />
                <button>Go</button>
                <hr />
            </form>
            
        </div>
    )
}

export default Search
