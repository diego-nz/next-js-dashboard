import type { SinglePokemon } from '@/app/interfaces/pokemon';
import { PokemonCard } from './PokemonCard';

interface Props {
  pokemonList: SinglePokemon[]
}

export const PokemonGrid = async({ pokemonList }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={ pokemon }/>
      ))}

    </div>
  )
}
