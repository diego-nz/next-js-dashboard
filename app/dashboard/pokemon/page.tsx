const getPokemonList = async(limit = 20, offset = 0) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
  .then( res => res.json());
  return data;
}

export const PokemonPage = async() => {
  const pokemonList = await getPokemonList()
  return (
    <div>
      {JSON.stringify(pokemonList)}
    </div>
  )
}

export default PokemonPage;