import React from "react";
import { CharacterProperties } from "../models/models";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { getIdFromUrl } from "../utils/utils";

interface ProductProps {
  item: CharacterProperties;
}

export function SpecificCharacter({ item }: ProductProps) {
  return (
    <Link
      to={`/character/${getIdFromUrl(item.url)}`}
      style={{ textDecoration: "none" }}
    >
      <div key={uuidv4()} className="character-container">
        <div className="character-name">{item.name || "-"}</div>
        <div className="character-birthday">{item.birth_year}</div>
        <div className="character-gender">{item.gender}</div>
        <div className="character-skin-color">{item.skin_color}</div>
      </div>
    </Link>
  );
}
