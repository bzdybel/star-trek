import React from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import { SearchFilters } from "./SearchFilters";
import { Profile } from "./Profile";
import { CharacterParams } from "../models/models";

interface HeaderProps {
  filters: {
    searchValue: string;
    gender: CharacterParams["gender"];
    skinColor: CharacterParams["skinColor"];
  };
  onSetSkinColor: (skinColor: string) => void;
  onSelectGender: (gender: string) => void;
  onSearch: (searchText: string) => void;
  setSearchValue: (searchText: string) => void;
}

export function Header(params: HeaderProps) {
  const { onSetSkinColor, onSelectGender, onSearch, filters } = params;
  return (
    <>
      <div className="header-container container-fluid p-3">
        <div className="search-with-filters col-4 d-flex  col-md-push-3">
          <SearchBar onSearch={onSearch} searchValue={filters.searchValue} />
          <SearchFilters
            onSetSkinColor={onSetSkinColor}
            onSelectGender={onSelectGender}
            skinColor={filters.skinColor}
            gender={filters.gender}
          />
        </div>
      </div>
    </>
  );
}
