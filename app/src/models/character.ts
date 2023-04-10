export enum LanguageCodes {
  English = "en-GB",
  USA = "en-US",
  Dutch = "nl-NL",
  French = "fr-FR",
}

export interface Character {
  voiceId: string;
  languageCode: LanguageCodes;
  avatarKey: string;
  characterName: string;
  disabled: boolean;
}

export const EnglishCharacters: Character[] = [
  {
    voiceId: "Joe",
    languageCode: LanguageCodes.English,
    avatarKey: "english/joe.png",
    characterName: "Joe",
    disabled: false,
  },
  {
    voiceId: "Amy",
    languageCode: LanguageCodes.English,
    avatarKey: "english/coco.png",
    characterName: "Coco",
    disabled: false,
  },
  {
    voiceId: "Brian",
    languageCode: LanguageCodes.English,
    avatarKey: "english/businessman.png",
    characterName: "Brian",
    disabled: false,
  },
];

export const USACharacters: Character[] = [
  {
    voiceId: "Kevin",
    languageCode: LanguageCodes.USA,
    avatarKey: "usa/kevin.png",
    characterName: "Kevin",
    disabled: false,
  },
  {
    voiceId: "Joey",
    languageCode: LanguageCodes.USA,
    avatarKey: "usa/mark.png",
    characterName: "Mark",
    disabled: false,
  },
  {
    voiceId: "Olaf",
    languageCode: LanguageCodes.USA,
    avatarKey: "usa/olaf.png",
    characterName: "Olaf",
    disabled: true,
  },
  {
    voiceId: "Kendra",
    languageCode: LanguageCodes.USA,
    avatarKey: "usa/female.png",
    characterName: "Kendra",
    disabled: false,
  },
];

export const DutchCharacters: Character[] = [
  {
    voiceId: "Lotte",
    languageCode: LanguageCodes.Dutch,
    avatarKey: "dutch/lotte.png",
    characterName: "Lotte",
    disabled: true,
  },
  {
    voiceId: "Laura",
    languageCode: LanguageCodes.Dutch,
    avatarKey: "",
    characterName: "Laura",
    disabled: false,
  },
  {
    voiceId: "Ruben",
    languageCode: LanguageCodes.Dutch,
    avatarKey: "dutch/ruben.png",
    characterName: "Ruben",
    disabled: false,
  },
];

export const FrenchCharacters: Character[] = [
  {
    voiceId: "Stella",
    languageCode: LanguageCodes.French,
    disabled: false,
    characterName: "Stella",
    avatarKey: "french/stella.png",
  },
];
