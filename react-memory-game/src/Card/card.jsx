import { useContext, useEffect, useState } from 'react'
import { NumberArray } from '../App'

export default function Card(props) {
    const [picture, setPicture] = useState(null)
    const [pokemon, setPokemon] = useState(null);
    const numbers = useContext(NumberArray)
    // eslint-disable-next-line react/prop-types
    const index = props.index
    const thisPoke = numbers[index]

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        const fetchData = async () => {
            const link = 'https://pokeapi.co/api/v2/pokemon/'
            let thisID = link + thisPoke
            const response = await fetch(thisID, { signal })
            const data = await response.json()
            const imageUrl = data.sprites.front_default
            setPokemon(data.name)
            setPicture(imageUrl)
        }
        fetchData()

        return () => {
            controller.abort()
        }
    }, [thisPoke])
    return (
        <div className="card">
            <div className="front">
                <img id={thisPoke} src={picture} alt="" />
                <div className="name">{pokemon}</div>
            </div>
            <div className="back"></div>
        </div>
    )
}
