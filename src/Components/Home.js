
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../App.css'
import Navbar from "./Navbar"
import Search from './Search';
import View from './View'

 

  function Home() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect(() => {
      const fetchItems = async () => {

        await axios(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
        .then((res, err) => {
          if (res.status === 200) {
            setIsLoading(false)
          
            setItems(Object.values(res.data.drinks));
          } else {
            console.log("there was an error: ", err)
          }
        })
      }
      fetchItems()

    }, [query])


    return (
      <div>
        <Navbar/>
        <Search getQuery={(query) => setQuery(query) }/>
        <View isLoading={isLoading} items={items} />
      </div>
    );
  }

  export default Home;
