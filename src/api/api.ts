import axios from "axios";
import { CharacterObject, CharacterSearchPayload } from "../app/models/models";
import qs from "qs";

const API_URL = process.env.REACT_APP_API_URL;

export const _internal_api = axios.create({
  baseURL: API_URL,
});
const constructUrl = (
  baseUrl: string,
  // payload: {
  //   search: charactersParamsActive["searchValue"];
  //   limit: charactersParamsActive["itemsPerPage"];
  //   page: charactersParamsActive["currentPage"];
  //   promo: charactersParamsActive["isPromo"];
  //   active: charactersParamsActive["skinColor"];
  // }
) => {
  // return baseUrl + qs.stringify(payload, { addQueryPrefix: true });
};

export const fetchGetCharacters = async (payload: CharacterSearchPayload) => {
  // return _internal_api
  //   .get<CharacterObject>(
  //     constructUrl("character", {
  //       search: payload.searchValue,
  //       limit: payload.itemsPerPage,
  //       page: payload.currentPage,
  //       promo: payload.isPromo,
  //       active: payload.skinColor,
  //     })
  //   )
  //   .then((response) => response.data);

 return _internal_api
    .get<CharacterObject>('people/').then((response) => response.data);
  
};
