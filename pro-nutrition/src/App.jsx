import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import FoodBox from './components/FoodBox'
import foodData  from './resources/FoodData'

function App(){

  const [search, setSearch] = useState("")

  const noResult = foodData.filter((e) => {
    return e.name.toLowerCase().includes(search.toLowerCase())
  })
  
  let searchedContent = null;
  if (noResult.length === 0) {
    searchedContent = <p>No results </p>; 
  } else {
    searchedContent = noResult.map((e, i) => {
      return <FoodBox data={e} index={i} />
    })
  }

  console.log(foodData)
  return(
    <>  
      <h1>Pro NUTRITION</h1>
      <Search setSearch={setSearch}/>
      {/* <p>{search}</p> */}
      {searchedContent}
    </>
  )
}

export default App