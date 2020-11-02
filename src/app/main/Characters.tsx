import React, { useState } from "react";
import { Header } from "../components/Header";
import { CharacterParams, CharacterObject } from "../models/models";
import { useQuery } from "react-query";
import { fetchGetCharacters } from "../../api/api";
import { CharactersContainer } from "../components/CharactersContainer";
import { Pagination } from "../components/Pagination";

export const Characters = () => {
  const [currentPage, setCurrentPage] = useState<
    CharacterParams["currentPage"]
  >(1);
  const [skinColor, setSkinColor] = useState<CharacterParams["skinColor"] | "">(
    ""
  );
  const [gender, setGender] = useState<CharacterParams["gender"] | "">("");
  const [searchValue, setSearchValue] = useState<
    CharacterParams["searchValue"]
  >("");

  const charactersRequestState = useQuery<CharacterObject, CharacterParams>({
    queryKey: [{ currentPage, skinColor, gender, searchValue }],
    queryFn: fetchGetCharacters,
    config: {
      onError: () => console.log("Error"),
    },
  });
  const characters = charactersRequestState?.data as CharacterObject;
  const onNextRequest = () => {
    // currentPage < characters.pageCount
    //   ? setCurrentPage(currentPage + 1)
    //   : setCurrentPage(characters.pageCount);
  };
  const onPreviousRequest = () => {
    currentPage > 1 ? setCurrentPage(currentPage - 1) : setCurrentPage(1);
  };
  const onSpecificNumberClick = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  const onSetSkinColor = (skinColor: string): void => {
    skinColor !== null && setSkinColor(skinColor);
  };
  const onSelectGender = (gender: string): void => {
    gender !== null && setGender(gender);
  };
  const onSearch = (searchValue: string): void => {
    setSearchValue(searchValue);
  };
  return (
    <>
      {/* {charactersRequestState.isLoading ? (
        <div className="d-flex h-100 w-100 align-items-center justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : ( */}
      <div className="h-100">
        <Header
          filters={{
            searchValue,
            gender,
            skinColor,
          }}
          onSetSkinColor={onSetSkinColor}
          onSelectGender={onSelectGender}
          onSearch={onSearch}
          setSearchValue={setSearchValue}
        />
        <CharactersContainer listItems={characters?.items} />
        {/* {characters?.totalItems > 0 && (
          <Pagination
            pageCount={characters?.pageCount}
            onNextRequest={onNextRequest}
            onPreviousRequest={onPreviousRequest}
            onSpecificNumberClick={onSpecificNumberClick}
            currentPage={currentPage}
          />
        )} */}
      </div>
      {/* )}   */}
    </>
  );
};
