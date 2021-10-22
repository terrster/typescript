export interface RootObject {
  count: number;
  next: string;
  previous?: any;
  results: Result[];
}

export interface Result {
  name: string;
  url: string;
}

export interface pokeinfo {
  form_name: string;
  form_names: any[];
  form_order: number;
  id: number;
  is_battle_only: boolean;
  is_default: boolean;
  is_mega: boolean;
  name: string;
  names: any[];
  order: number;
  pokemon: Pokemon;
  sprites: Sprites;
  types: Type[];
  version_group: Pokemon;
}

export interface Type {
  slot: number;
  type: Pokemon;
}

export interface Sprites {
  back_default: string;
  back_female?: any;
  back_shiny: string;
  back_shiny_female?: any;
  front_default: string;
  front_female?: any;
  front_shiny: string;
  front_shiny_female?: any;
}

interface Pokemon {
  name: string;
  url: string;
}