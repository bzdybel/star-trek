import React, { useState } from "react";
import { Header } from "../components/Header";
import {
  CharacterParams,
  CharacterObject,
  CharacterSearchPayload,
  PlanetModel,
} from "../models/models";
import { useQuery } from "react-query";
import { fetchGetCharacters } from "../../api/api";
import { CharactersContainer } from "../components/CharactersContainer";
import { Pagination } from "../components/Pagination";
import { getIdFromUrl } from "../utils/utils";

export const Characters = () => {
  const [currentPage, setCurrentPage] = useState<
    CharacterParams["currentPage"]
  >(1);
  const [planet, setPlanet] = useState<PlanetModel>();
  const [searchValue, setSearchValue] = useState<
    CharacterParams["searchValue"]
  >("");
  const [direction, setDirection] = useState<
    CharacterSearchPayload["direction"]
  >("");

  const charactersRequestState = useQuery<CharacterObject, CharacterParams>({
    queryKey: [{ currentPage, searchValue, direction }],
    queryFn: fetchGetCharacters,
    config: {
      onError: () => console.log("Error"),
    },
  });
  let characters = charactersRequestState?.data as CharacterObject;

  const onNextOrPreviousRequest = (direction: string) => {
    if (
      direction === "next" &&
      currentPage < Math.ceil(characters?.count / 10)
    ) {
      setDirection(characters.next);
      setCurrentPage(currentPage + 1);
    } else if (currentPage > 1) {
      setDirection(characters.previous);
      setCurrentPage(currentPage - 1);
    }
  };
  const onSpecificNumberClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const onSetPlanet = (planet: PlanetModel): void => {
    setPlanet(planet);
  };
  const onSearch = (searchValue: string): void => {
    setCurrentPage(1);
    setSearchValue(searchValue);
  };
  return (
    <>
      {charactersRequestState.isLoading ? (
        <div className="d-flex h-100 w-100 align-items-center justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="main">
          <Header
            filters={{
              searchValue,
            }}
            onSetPlanet={onSetPlanet}
            onSearch={onSearch}
            setSearchValue={setSearchValue}
          />
          <CharactersContainer
            listItems={
              planet
                ? characters?.results.filter(
                    (character) =>
                      getIdFromUrl(character.homeworld) ===
                      getIdFromUrl(planet?.url)
                  )
                : characters?.results
            }
          />
          {characters?.count > 0 && (
            <Pagination
              pageCount={Math.ceil(characters?.count / 10)}
              onNextOrPreviousRequest={onNextOrPreviousRequest}
              onSpecificNumberClick={onSpecificNumberClick}
              currentPage={currentPage}
            />
          )}
        </div>
      )}
    </>
  );
};
