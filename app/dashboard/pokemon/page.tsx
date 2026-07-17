import { PokemonGrid } from "@/app/components/pokemon/PokemonGrid";
import { PokemonList, SinglePokemon } from "@/app/interfaces/pokemon";

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
      <span className="text-5xl my-2">
        Listado de Pokemons <small>estatico</small>
      </span>
      <PokemonGrid pokemonList={ pokemonList } />
    </div>
  )
}

export default PokemonPage;