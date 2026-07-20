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
//
  interface Sprites {
    front_default: string;
    back_default: string;
    front_shiny: string;
    back_shiny: string;
    other?: {
      dream_world: {
        front_default: string;
      };
    };
  }

  interface MoveEntry {
    move: {
      name: string;
      url: string;
    };
  }

  interface TypeEntry {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }

  export interface Pokemon {
    id: number;
    name: string;
    weight: number;
    sprites: Sprites;
    moves: MoveEntry[];
    types: TypeEntry[];
  }