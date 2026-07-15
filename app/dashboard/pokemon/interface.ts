export interface PokemonList {
  counter: number;
  next: string;
  previous: null;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface SinglePokemon {
  id: string;
  name: string;
}