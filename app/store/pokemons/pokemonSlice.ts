import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { SinglePokemon } from '@/app/interfaces/pokemon';

interface PokemonsState {
  [key: string]: SinglePokemon
}

const initialState: PokemonsState = {
  '1': { id: '1', name: 'bulbasaur'}
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SinglePokemon>) {
      const pokemon = action.payload;
      const { id } = pokemon;
      if(!!state[id]) {
        delete state[id];
        return;
      }
      state[id] = pokemon;
    }
  }
});

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer