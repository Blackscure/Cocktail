import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Navbar from "./Components/Navbar"
import Search from './Components/Search';
import View from './Components/View'

  function App() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      const fetchItems = async () => {
        await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)
        .then((res, err) => {
          if (res.status === 200) {
            console.log("there is no err here")
            setIsLoading(false)
            setItems(Object.values(res.data.drinks));
          } else {
            console.log("there was an error: ", err)
          }
        })


      }
      fetchItems()

    }, [])


    return (
      <div>
        <Navbar/><br></br><br></br><br></br><br></br><br></br>
        <Search/>
        <View isLoading={isLoading} items={items} />
      </div>
    );
  }

  export default App;