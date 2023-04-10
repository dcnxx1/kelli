export enum LanguageCodes {
  English = "en-GB",
  USA = "en-US",
  Dutch = "nl-NL",
  French = "fr-FR",
}

export enum Language {
  English = "Great-Brittain",
  Netherlands = "Netherlands",
  USA = "United States",
  France = "France",
}

export interface Character {
  voiceId: string;
  languageCode: LanguageCodes;
  language: string;
  avatarKey: string;
  characterName: string;
  disabled: boolean;
}

export interface SelectLanguage {
  flag: string;
  country: string;
}

export const SelectableCharacters : Character[] = [
  {
    voiceId: "Kevin",
    languageCode: LanguageCodes.USA,
    avatarKey: "usa/kevin.png",
    characterName: "Kevin",
    language: LanguageCodes.USA,
    disabled: false,
  },
  {
    voiceId: "Joey",
    languageCode: LanguageCodes.USA,
    avatarKey: "usa/mark.png",
    characterName: "Mark",
    language: LanguageCodes.USA,

    disabled: false,
  },
  {
    voiceId: "Olaf",
    languageCode: LanguageCodes.USA,
    avatarKey: "usa/olaf.png",
    language: LanguageCodes.USA,

    characterName: "Olaf",
    disabled: true,
  },
  {
    voiceId: "Kendra",
    languageCode: LanguageCodes.USA,
    avatarKey: "usa/female.png",
    language: LanguageCodes.USA,

    characterName: "Kendra",
    disabled: false,
  },
  {
    voiceId: "Joe",
    languageCode: LanguageCodes.English,
    avatarKey: "english/joe.png",
    language: LanguageCodes.English,
    characterName: "Joe",
    disabled: false,
  },
  {
    voiceId: "Amy",
    languageCode: LanguageCodes.English,
    avatarKey: "english/coco.png",
    language: LanguageCodes.English,

    characterName: "Coco",
    disabled: false,
  },
  {
    voiceId: "Brian",
    languageCode: LanguageCodes.English,
    avatarKey: "english/businessman.png",
    language: LanguageCodes.English,
    characterName: "Brian",
    disabled: false,
  },
  {
    voiceId: "Stella",
    languageCode: LanguageCodes.French,
    disabled: false,
    characterName: "Stella",
    avatarKey: "french/stella.png",
    language: LanguageCodes.French,
  },
  {
    voiceId: "Lotte",
    languageCode: LanguageCodes.Dutch,
    avatarKey: "dutch/lotte.png",
    language: LanguageCodes.Dutch,
    characterName: "Lotte",
    disabled: true,
  },
  {
    voiceId: "Laura",
    languageCode: LanguageCodes.Dutch,
    avatarKey: "",
    language: LanguageCodes.Dutch,
    characterName: "Laura",
    disabled: false,
  },
  {
    voiceId: "Ruben",
    languageCode: LanguageCodes.Dutch,
    avatarKey: "dutch/ruben.png",
    language: LanguageCodes.Dutch,
    characterName: "Ruben",
    disabled: false,
  },
] 

export const Languages: SelectLanguage[] = [
  {
    flag: "usa.png",
    country: "United States",
  },
  {
    flag: "english.png",
    country: "Great-Brittain",
  },
  {
    flag: "france.png",
    country: "France",
  },
  {
    flag: "netherlands.png",
    country: "Netherlands",
  },
];
