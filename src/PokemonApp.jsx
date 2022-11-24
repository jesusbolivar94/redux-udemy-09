import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "./store/slices/pokemon"

export const PokemonApp = () => {

  const dispatch = useDispatch()
  const { page, pokemons, isLoading } = useSelector( ( state ) => state.pokemons )

  useEffect(() => {

    dispatch( getPokemons() )

  }, [])

  return (
    <>
        <h1>Pokemon</h1>
        <hr/>

        <span>Loading: { isLoading ? 'True' : 'False' }</span><br/>

        <ul>
          {
            pokemons.map( (pokemon, n) => (
              <li key={n}>{pokemon.name}</li>
            ))
          }
        </ul>

        <button disabled={ isLoading ? 'disabled' : false } onClick={ () => dispatch( getPokemons( page ) ) }>
          Next
        </button>
    </>
  )
}
