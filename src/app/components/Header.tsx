import React from "react";
import { SearchBar } from "./SearchBar";
import { SearchFilters } from "./SearchFilters";
import { PlanetModel } from "../models/models";

interface HeaderProps {
  filters: {
    searchValue: string;
  };
  onSetPlanet: (planet: PlanetModel) => void;
  onSearch: (searchText: string) => void;
  setSearchValue: (searchText: string) => void;
}

export function Header(params: HeaderProps) {
  const { onSetPlanet, onSearch, filters } = params;
  return (
    <>
      <div className="header-container container-fluid d-flex justify-content-center  h-25 p-0">
        <div className="search-with-filters  d-flex  col-md-push-3">
          <SearchBar onSearch={onSearch} searchValue={filters.searchValue} />
          <SearchFilters onSetPlanet={onSetPlanet} />
        </div>
      </div>
    </>
  );
}
