import type { DictionaryId } from "@/types";
import { dictionaries } from "./mocks";

const INFOJOBS_API_ENDPOINT = "https://api.infojobs.net/api/1/";

const API_TOKEN = import.meta.env.API_INFOJOBS_TOKEN;

export const query = (path: string) => {
  const url = `${INFOJOBS_API_ENDPOINT}${path}`;
  return fetch(url, {
    headers: {
      Authorization: `Basic ${API_TOKEN}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

export const getDictionary = (
  dictionaryId: DictionaryId
): Promise<
  Array<{ id: number; value: string; order: number; key: string }>
> => {
  if (!API_TOKEN) return Promise.resolve(dictionaries[dictionaryId]);
  return query(`/dictionary/${dictionaryId}`);
};
