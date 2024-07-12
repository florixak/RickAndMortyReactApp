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

export const MainCharacters = [
  {
    name: "Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    description:
      "Rick is a brilliant but extremely irresponsible scientist who often drinks alcohol and has a cynical outlook on life. His behavior is impulsive and frequently puts himself and others in danger due to his experiments and adventures. Despite having a close relationship with his grandson Morty, his egocentrism and recklessness often complicate their lives.",
  },
  {
    name: "Morty Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    description:
      "Morty is Rick's fourteen-year-old grandson who is often reluctantly dragged into his grandfather's crazy adventures. He is much more emotional and compassionate than Rick, which often leads to conflicts between them. Morty is also frequently the victim of Rick's experiments and dangerous missions, making him a often stressed and confused teenager.",
  },
  {
    name: "Summer Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    description:
      "Summer is Morty's seventeen-year-old sister who is much more confident and assertive than her brother. She often tries to get involved in Rick's adventures and prove her worth. She has a complicated relationship with her family but is loyal and willing to help when needed.",
  },
  {
    name: "Beth Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    description:
      "Beth is Rick's daughter and the mother of Morty and Summer. She works as a veterinarian and often tries to cope with Rick's presence in her household. She is very ambitious and has a complex of inferiority, partly due to her father. Her marriage to Jerry is often strained, but she tries to keep the family together.",
  },
  {
    name: "Jerry Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    description:
      "Jerry is Beth's husband and the father of Morty and Summer. He is unemployed and often insecure about his role in the family. He tends to be naive and easily manipulated, which often makes him the target of Rick's mockery. Despite this, he tries to be a good father and husband, even though it doesn't always work out.",
  },
];
