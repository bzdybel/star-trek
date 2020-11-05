import React from "react";
import { CharacterParams, CharacterProperties, Params } from "../models/models";
import { useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";
import { fetchGetCharacters } from "../../api/api";
import { useParams } from "react-router-dom";

export function CharacterDetails() {
  const params = useParams<Params["params"]>();
  const charactersRequestState = useQuery<CharacterProperties, CharacterParams>(
    {
      queryKey: [{ direction: `/people/${params.id}/` }],
      queryFn: fetchGetCharacters,
      config: {
        onError: () => console.log("Error"),
      },
    }
  );
  const character = charactersRequestState?.data as CharacterProperties;
  return (
    <>
      {charactersRequestState.isLoading ? (
        <div className="d-flex h-100 w-100 align-items-center justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="h-100 w-100 d-flex justify-content-center  align-items-center">
          <div className=" character-details-main-container-wrapper">
            <div className="h-100 " style={{ background: "unset" }}>
              <div
                key={uuidv4()}
                className="container-fluid characters-container main-container-wrapper h-100 d-flex justify-content-center align-items-center"
              >
                <div className="h-100 d-flex justify-content-center h-50 w-50 align-items-center">
                  <div
                    key={uuidv4()}
                    className="character-container w-100 character-conteiner-details"
                  >
                    {character && (
                      <>
                        <div className="character-name character-name-details">
                          {character.name || "-"}
                        </div>
                        <div className="character-birthday">
                          {character.birth_year}
                        </div>
                        <div className="character-gender">
                          {character.gender}
                        </div>
                        <div className="character-skin-color">
                          {character.skin_color}
                        </div>
                        <div className="character-skin-color">
                          {character.height}
                        </div>
                        <div className="character-skin-color">
                          {character.mass}
                        </div>
                        <div className="character-skin-color">
                          {character.hair_color}
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
