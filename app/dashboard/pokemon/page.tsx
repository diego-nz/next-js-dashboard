import { PokemonList, SinglePokemon } from "./interface";
import Image from 'next/image';

const getPokemonList = async(limit = 20, offset = 0): Promise<SinglePokemon[]> => {
  const data: PokemonList = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then( res => res.json());
  const pokemonList = data.results.map( pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))
  return pokemonList;
}

export const PokemonPage = async() => {
  const pokemonList = await getPokemonList()
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemonList.map((pokemon) => (
          <Image 
            key={pokemon.id}
            alt={pokemon.name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
          />
        ))}
        
      </div>
    </div>
  )
}

export default PokemonPage;