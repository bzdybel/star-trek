import React, { useEffect, useState } from "react";

import { PlanetObject, PlanetModel } from "../models/models";
import { useQuery } from "react-query";
import { fetchPlanets } from "../../api/api";
import { v4 as uuidv4 } from "uuid";

interface SearchFiltersProps {
  onSetPlanet: (planet: PlanetModel) => void;
}
export function SearchFilters({ onSetPlanet }: SearchFiltersProps) {
  const [planets, setPlanets] = useState<PlanetObject["results"]>([]);
  const [nextPlanet, setNextPlanet] = useState<PlanetObject["next"]>("");

  const planetsRequestState = useQuery<PlanetObject>({
    queryKey: [],
    queryFn: fetchPlanets,
    config: {
      onError: () => console.log("Error"),
    },
  });

  const planetsData = planetsRequestState?.data as PlanetObject;
  useEffect(() => {
    const newPlanets = planetsData?.results;
    if (newPlanets) {
      setPlanets((planets) => [...planets, ...newPlanets]);
    }
    if (planetsData?.next) {
      setNextPlanet(planetsData?.next);
    }
  }, [planetsData, nextPlanet]);

  const onPlanetChange = (value: string) => {
    const selectedPlanetObject = planets.find(
      (planet) => planet.name === value
    ) as PlanetModel;
    onSetPlanet(selectedPlanetObject);
  };
  return (
    <div className="checkboxes-wrapper  d-flex  justify-content-between align-items-start ">
      <select
        onChange={(item) => onPlanetChange(item.target.value)}
        className="form-control form-control-lg filter"
      >
        {planets.map((planet) => (
          <option key={uuidv4()} className="filter-option">
            {planet.name}
          </option>
        ))}
      </select>
    </div>
  );
}
