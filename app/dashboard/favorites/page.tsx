import { PokemonGrid } from "@/app/components/pokemon/PokemonGrid";

export const metadata = {
  title: 'Favoritos',
  description: 'This is favorites description'
}

export const PokemonPage = async() => {

  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">
        Pokemon Favoritos <small>global state</small>
      </span>
      <PokemonGrid pokemonList={ [] } />
    </div>
  )
}

export default PokemonPage;