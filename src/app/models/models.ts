export type CharacterParams = {
  currentPage: number;
  gender: string;
  skinColor: string;
  searchValue: string;
};

export type characterObject = {
  items: Array<{
    id: number;
    name: string;
    description: string;
    rating: number;
    image: string;
    promo: boolean;
    active: boolean;
  }>;

  itemCount: number;
  totalItems: number;
  pageCount: number;
  next: string;
  previous: string;
};

export type CharacterProperties = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  vehicles: Array<string>;
  starships: Array<string>;
  created: string;
  edited: string;
  url: string;
};
export type CharacterObject = {
  items: Array<{
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: Array<string>;
    species: Array<string>;
    vehicles: Array<string>;
    starships: Array<string>;
    created: string;
    edited: string;
    url: string;
  }>;
};
export type CharacterSearchPayload = {
  searchValue: string;
  gender: string;
  skin_color: string;
};
