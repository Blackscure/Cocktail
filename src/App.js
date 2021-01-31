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
        const result = await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`)

        console.log(result.data)

        setItems(result.data)
        //setIsLoading(false)

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
