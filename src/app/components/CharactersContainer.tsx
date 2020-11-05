import React from "react";
import { SpecificCharacter } from "../components/SpecificCharacter";
import { CharacterObject } from "../models/models";
import { EmptyPage } from "../components/EmptyPage";

import { v4 as uuidv4 } from "uuid";

interface CharactersContainerProps {
  listItems: CharacterObject["results"];
}
export function CharactersContainer({ listItems }: CharactersContainerProps) {
  return (
    <div className="main " style={{ background: "unset" }}>
      {listItems?.length === 0 ? (
        <EmptyPage />
      ) : (
        <div
          key={uuidv4()}
          className="container-fluid characters-container main-container-wrapper h-100"
        >
          {listItems?.map((item, index) => {
            return (
              <SpecificCharacter
                item={{
                  name: item.name,
                  height: item.height,
                  mass: item.mass,
                  hair_color: item.hair_color,
                  skin_color: item.skin_color,
                  eye_color: item.eye_color,
                  birth_year: item.birth_year,
                  gender: item.gender,
                  homeworld: item.homeworld,
                  films: item.films,
                  species: item.species,
                  vehicles: item.vehicles,
                  starships: item.starships,
                  created: item.created,
                  edited: item.edited,
                  url: item.url,
                }}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
