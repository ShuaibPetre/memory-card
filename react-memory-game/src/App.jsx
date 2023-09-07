import { createContext, useState } from 'react'
import Card from './Card/card'
import StartScreen from './startscreen'
export const NumberArray = createContext(null)
import "./App.css"

export default function App() {
    const [score, setScore] = useState(0)
    const [pokeIDs, setPokeIDs] = useState([])
    const [sortedArray, setSortedArray] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    const [topscore, setTopScore] = useState(0)
    const [startGame, setStartGame] = useState(0)

    const handleChange = (e) => {
      console.log(e.target.value)
      if (e.target.value == 'Easy') setSortedArray([1,2,3])
      if (e.target.value == 'Medium') setSortedArray([1,2,3,4,5,6])
      if (e.target.value == 'Hard') setSortedArray([1,2,3,4,5,6,7,8,9])
    }

    const handleCard = (e) => {
        const thisID = e.target.id
        setPokeIDs([...pokeIDs, thisID])
        if (pokeIDs.includes(thisID)) return resetscore()
        let newscore = score + 1
        if (newscore == 251) return alert('you win')
        console.log(pokeIDs)
        setScore(newscore)
        getrandomarray(e)
    }

    let max = 151
    let min = 1

    const getrandomarray = (e) => {
        const newcards = []
        for (let index = 0; index < sortedArray.length; index++) {
            let random = Math.floor(Math.random() * (+max + 1 - +min)) + +min
            newcards.push(random)
        }
        setSortedArray(newcards)
        return checkarray(e)
    }

    const checkarray = (e) => {
        e.preventDefault()
        const checked = []
        sortedArray.forEach((e1) => {
            console.log(e1)

            pokeIDs.forEach((e2) => {
                if (e2 == e1) checked.push(e1)
            })
        })
        if (checked.length == 9) return getrandomarray()
        console.log(checked)
    }
    const resetscore = () => {
        if (score >= topscore) setTopScore(score)
        setScore(0)
    }

    const handleStart = () => {
      setStartGame(1)
    }
    return (
        <div className="container">
          {(startGame === 0) ? (<div className="startscreen">
              <StartScreen onClick={handleStart} onChange={handleChange}/></div>) : (
                <div className="game">
                <div className="score">
                  <div className="scoreDiv">
                  Current Score: {score} <br />
                  Top Score: {topscore}
                </div>
                </div>
                <div className="board">
                
               <div className="cards">
                  {sortedArray.map((card, index) => (
                      <NumberArray.Provider
                          value={sortedArray}
                          key={index}
                          id={index}
                      >
                          <button onClick={handleCard}>
                              <Card score={score} index={index} array={pokeIDs} />
                          </button>
                      </NumberArray.Provider>
                  ))}
              </div>
                </div>
              </div>
              )}
            
            
        </div>
    )
}
