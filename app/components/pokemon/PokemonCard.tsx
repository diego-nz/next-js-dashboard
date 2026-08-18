'use client';

import { SinglePokemon } from "@/app/interfaces/pokemon";
import Link from "next/link";
import Image from 'next/image';
import { useAppDispatch, useAppSelector } from "@/app/store";
import { toggleFavorite } from "@/app/store/pokemons/pokemonSlice";

interface Props {
  pokemon: SinglePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector( state => state.pokemons[id]);
  const dispatch = useAppDispatch();
  const onToggle = () => {
    dispatch( toggleFavorite(pokemon) );
  }

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center p-6 bg-gray-800 border-b">
          <Image
            key={pokemon.id}
            alt={pokemon.name}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            priority={false}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{name}</p>
          <div className="mt-5">
            <Link
              href={`pokemon/${name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              Más información
            </Link>
          </div>
        </div>
        <button type="button" onClick={ onToggle } className="w-full text-left px-4 py-2 hover:bg-gray-100 flex cursor-pointer">
          <div className="text-red-600">
            {
              isFavorite ? '+' : '-'
            }
          </div>
          <div className="pl-3">
            <p className="text-sm font-medium text-gray-800 leading-none">
              {
                isFavorite ? 'Es favorito' : 'No es favorito'
              }
            </p>
            <p className="text-xs text-gray-500">Click para cambiar</p>
          </div>
        </button>
      </div>
    </div>
  )
}
