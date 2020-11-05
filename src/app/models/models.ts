export type CharacterParams = {
  currentPage: number;
  gender: string;
  planet: string;
  searchValue: string;
  id: string;
  species: string;
};
export type Params ={
  params: {
    id: string
  }
}

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
  count: number,
  next: string | null,
  previous: string | null, 
  results: Array<{
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
  direction: string | null
};

export type CharacterSearchPayloadNextPrevious ={
  next: string,
  previous: string,
  direction: string
}
export type PlanetObject={
  next: null | string
  results: Array<{
			name: string
			rotation_period: string
			orbital_period: string
			diameter: string
			climate: string
			gravity: string
			terrain: string
			surface_water:string
			population: string
			residents:  Array<string>
			films: Array<string>
			created: string
			edited: string
			url: string
  }>
}

export type PlanetModel={
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water:string
  population: string
  residents:  Array<string>
  films: Array<string>
  created: string
  edited: string
  url: string
}

export type UsersModel ={ 
  users: Array<{
    login: string,
    password: string
  }>
}

export type UserModel = {
  user:{
    login: string,
    password: string
    token: string
  }
}