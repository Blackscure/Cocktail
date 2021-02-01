import React from 'react'




const View = ({ items, isLoading }) => {
    return isLoading ? (
    <h1>Loading...</h1>
    ) : (
        
    <section className='cards'>
         {items.map((item) => (
             <div key={item.idDrink}>
                  <img alt="" src={item.strDrinkThumb} />
                <h4>{item.strDrink}</h4>
                <h3>Ingridients</h3>
                <li>{item.strIngredient1}</li>
                <li>{item.strIngredient2}</li>
                <li>{item.strIngredient3}</li>
                <h3>Details</h3>
                <p>{item.strInstructions}</p>
             </div>
         ))}
    </section>
    )
}

export default View