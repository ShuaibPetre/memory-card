import { createContext, useState } from "react";
import Card from "./Card/card"
export const NumberArray = createContext(null)


export default function App() {
const [score, setScore] = useState(0)
const [pokeIDs, setPokeIDs] = useState([])
const [sortedArray, setSortedArray] = useState([1,2,3,4,5,6,7,8,9])
const [topscore, setTopScore] = useState(0);


  const handleCard = (e) => {
    const thisID = e.target.id
    setPokeIDs([...pokeIDs, thisID])
    if(pokeIDs.includes(thisID)) return resetscore()
    let newscore = (score + 1)
    if (newscore == 251) return alert("you win")
    console.log(pokeIDs)
    setScore(newscore)
    getrandomarray(e)
  }
  
let max = 151
let min = 1


const getrandomarray = (e) => { 
  const newcards = []
  for (let index = 0; index < 9; index++) {
  let random = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
  newcards.push(random)
}
setSortedArray(newcards)
return checkarray(e)
}

const checkarray = (e) => {
  e.preventDefault();
  const checked = []
  sortedArray.forEach((e1)=>{
          console.log(e1)

    pokeIDs.forEach((e2)=> {
    if(e2==e1) checked.push(e1)
  })})
  if(checked.length == 9) return getrandomarray()
  console.log(checked)
}
const resetscore = () => {
  if (score >= topscore) setTopScore(score)
  setScore(0)
}

  return (
    <div className="container">
      <div className="startscreen"></div>
        
      <div className="scoreDiv">
        current score: {score}
        Top Score: {topscore}
        <button onClick={getrandomarray}>randomclick</button>
      </div>
      <div className="cards">
        {sortedArray.map((card,index) => 
        <NumberArray.Provider value={sortedArray} key={index} id={index}>
          <button onClick={handleCard}>
          <Card score={score} index={index} array={pokeIDs} /> {card}</button>
          </NumberArray.Provider>)}
      </div>
      </div>
  )
}