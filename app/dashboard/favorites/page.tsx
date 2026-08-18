'use client';
import PokemonFavorites from '../../components/pokemon/PokemonFavorites';

export const PokemonPage = () => {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemon Favoritos <small>global state</small>
      </span>
      <PokemonFavorites />
    </div>
  )
}

export default PokemonPage;