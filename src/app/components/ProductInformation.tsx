import React from "react";
import { CharacterProperties } from "../models/models";

const MAX_VISIBLE_TEXT = 170;

interface characterInformationProps {
  name: CharacterProperties["name"];
  // description: CharacterProperties["description"];
  customClass?: string;
}

export function characterInformation({
  name,
  // description,
  customClass,
}: characterInformationProps) {
  const calculateDispalyDescription = (description: string) => {
    if (description.length > MAX_VISIBLE_TEXT) {
      return `${description.substr(0, MAX_VISIBLE_TEXT).trim()}...`;
    }
    return description;
  };
  return (
    <>
      <div
        className={`character-information-wrapper h-50 ${customClass}  d-flex flex-column justify-content-center align-items-center `}
      >
        <p className="character-title d-flex justify-content-start align-items-center h-25">
          {name}
        </p>
        <p className="character-description d-flex justify-content-start align-items-start h-75 mb-0">
          {/* {calculateDispalyDescriptio n(description)} */}
        </p>
      </div>
    </>
  );
}
