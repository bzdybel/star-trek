import { PlanetObject } from "./../app/models/models";
import axios from "axios";
import {
  CharacterObject,
  CharacterSearchPayload,
  CharacterParams,
} from "../app/models/models";
import qs from "qs";

const API_URL = process.env.REACT_APP_API_URL;

export const _internal_api = axios.create({
  baseURL: API_URL,
});
const constructUrl = (
  baseUrl: string,
  payload: {
    search: CharacterSearchPayload["searchValue"];
    page: CharacterParams["currentPage"];
  }
) => {
  return baseUrl + qs.stringify(payload, { addQueryPrefix: true });
};
export const fetchGetCharacters = async (
  payload: CharacterSearchPayload & CharacterParams
) => {
  return _internal_api
    .get<CharacterObject>(
      constructUrl(payload.direction ? payload.direction : "people/", {
        search: payload.searchValue,
        page: payload.currentPage,
      })
    )
    .then((response) => response.data);
};

export const fetchPlanets = async (next: PlanetObject["next"]) => {
  return _internal_api
    .get<PlanetObject>(next ? next : "/planets")
    .then((response) => response.data);
};
