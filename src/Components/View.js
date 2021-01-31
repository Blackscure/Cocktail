import React from 'react'



const View = ({ items, isLoading }) => {
    return isLoading ? (
    <h1>Loading...</h1>
    ) : (
    <section className='cards'>
         {items.map((item) => (
             <div key={item.idDrink}>
                <h4>{item.strDrink}</h4>
                <img alt="" src={item.strDrinkThumb} />
             </div>
         ))}
    </section>
    )
}

export default View