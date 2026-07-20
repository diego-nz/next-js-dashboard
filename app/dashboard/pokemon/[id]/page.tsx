import { Metadata } from "next";

interface Props {
  params: Promise<{id: string}>;
}

export async function generateMetadata({params}: Props): Promise<Metadata> {
  const { id, name } = await getPokemon((await params).id);
  return {
    title: `#${id} - ${name}`,
    description: `Página del pokemon ${ name }`,
  }
}

const getPokemon = async(id: string): Promise<{id: string, name: string}> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    cache: 'force-cache',
    // Six months
    // next: {
    //   revalidate: 60 * 60 * 30 * 6
    // },
  }).then(res => res.json());
  return pokemon;
}

const PokemonIdPage = async({ params }: Props) => {
  const { id } = await params;
  const pokemon = await getPokemon(id);
  return (
    <div>PokemonPage {id} {pokemon.name}</div>
  )
}

export default PokemonIdPage