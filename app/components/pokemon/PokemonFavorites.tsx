'use client';

import { useAppSelector } from "@/app/store";
import { PokemonGrid } from "./PokemonGrid";
// import { useState } from "react";

const PokemonFavorites = () => {
  const favoritePokemons = useAppSelector( state => Object.values(state.pokemons));
  // const [pokemons, setPokemons] = useState( favoritePokemons );

  return (
    <>
      {
        favoritePokemons.length ? <PokemonGrid pokemonList={favoritePokemons} /> : <NoFavorites />
      }
    </>
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <span className="text-red-500">No hay favoritos</span>
    </div>
  )
}

export default PokemonFavorites