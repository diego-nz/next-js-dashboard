import type { PokemonList, SinglePokemon } from '@/app/interfaces/pokemon';
import { PokemonCard } from './PokemonCard';

interface Props {
  pokemonList: SinglePokemon[]
}

// const getPokemonList = async(limit = 20, offset = 0): Promise<SinglePokemon[]> => {
//   const data: PokemonList = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
//   .then( res => res.json());
//   const pokemonList = data.results.map( pokemon => ({
//     id: pokemon.url.split('/').at(-2)!,
//     name: pokemon.name
//   }))
//   return pokemonList;
// }

export const PokemonGrid = async({ pokemonList }: Props) => {
  // const pokemonList = await getPokemonList()
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={ pokemon }/>
      ))}

    </div>
  )
}
