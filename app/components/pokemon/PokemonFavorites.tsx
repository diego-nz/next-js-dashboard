'use client';

import { useAppSelector } from "@/app/store";
import { PokemonGrid } from "./PokemonGrid";

const PokemonFavorites = () => {
  const favoritePokemons = useAppSelector( state => Object.values(state.pokemons));
  return (
    <PokemonGrid pokemonList={favoritePokemons} />
  )
}

export default PokemonFavorites