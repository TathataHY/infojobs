import type { DICTIONARY_TYPE } from "./constants";

export type DictionaryId =
  (typeof DICTIONARY_TYPE)[keyof typeof DICTIONARY_TYPE];
