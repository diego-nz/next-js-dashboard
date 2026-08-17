import { SinglePokemon } from '@/app/interfaces/pokemon';
import { createSlice } from '@reduxjs/toolkit'

interface PokemonsState {
  [key: string]: SinglePokemon
}

const initialState: PokemonsState = {
  '1': { id: '1', name: 'bulbasaur'}
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {}
});

export const {} = pokemonsSlice.actions

export default pokemonsSlice.reducer