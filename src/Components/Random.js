import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar';
import '../App.css'
 
function Random() {

  const [images, setImages] = useState("");
  //const [isLoading, setIsLoading] = useState(true)

  const getimages = async () => {
    await axios(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
    .then((res, err) => {
      if (res.status === 200) {
        console.log("No error")
        //setIsLoading(false)
        setImages(Object.values(res.data.drinks));
      } else {
        console.log("error: ", err)
      }
    })
  }

  useEffect(() => {
    getimages()
  }, [])
  
  

  return (
    <div className="Randombtn">
      <Navbar/>
       <h1>Random Images</h1>
      <section className='cards'>
         { images && images.map((image) => (
             <div key={image.idDrink}>
                  <img alt="" src={image.strDrinkThumb} />
                <h4>{image.strDrink}</h4><br></br>
                <button onClick={getimages}>Get Random Image</button>
                
             </div>
         ))}
    </section>
    </div>
  );
}

export default Random;
