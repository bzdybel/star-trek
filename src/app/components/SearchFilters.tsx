import React from "react";
import { CharacterParams } from "../models/models";
interface SearchFiltersProps {
  onSetSkinColor: (skinColor: string) => void;
  onSelectGender: (gender: string) => void;
  gender: CharacterParams["gender"];
  skinColor: CharacterParams["skinColor"];
}

export function SearchFilters({
  onSetSkinColor,
  onSelectGender,
  gender,
  skinColor,
}: SearchFiltersProps) {
  return (
    <div className="col-6 form-check checkboxes-wrapper  d-flex  justify-content-between ">
      <div className="min-width custom-control custom-checkbox checkbox-xl w-50">
        here will be filter
      </div>
      <div className="min-width custom-control custom-checkbox checkbox-xl w-50">
        here will be filter
      </div>
    </div>
  );
}
