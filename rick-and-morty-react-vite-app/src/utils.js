const BASE_URL = "https://rickandmortyapi.com/api/";
export const CHARACTERS_URL = `${BASE_URL}/character/`;
export const LOCATIONS_URL = `${BASE_URL}/location/`;
export const EPISODES_URL = `${BASE_URL}/episode/`;

export const CHARACTERS_NAV_URL = "/characters?page=1&id=all";
export const LOCATIONS_NAV_URL = "/locations?page=1&id=all";
export const EPISODES_NAV_URL = "/episodes?page=1&id=all";

export function getCharacterURL(id) {
  return `/characters/${id}`;
}

export function getEpisodeURL(id) {
  return `/episodes/${id}`;
}

export function getLocationURL(id) {
  return `/locations/${id}`;
}
