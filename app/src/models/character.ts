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

export enum AvatarKey {
  KevinAvatar = 'KevinAvatar',
  OlafAvatar = 'OlafAvatar',
  MarkAvatar = 'MarkAvatar',
  KendraAvatar = 'KendraAvatar',
  StellaAvatar = 'StellaAvatar',
  JoeAvatar = 'JoeAvatar',
  CocoAvatar = 'CocoAvatar',
  BrianAvatar = 'BrianAvatar',
  RubenAvatar = 'RubenAvatar',
  LotteAvatar = ' LotteAvatar',
  LauraAvatar = 'LauraAvatar',
}

export const SelectableCharacters: Character[] = [
  {
    voiceId: "Kevin",
    languageCode: LanguageCodes.USA,
    avatarKey: AvatarKey.KevinAvatar,
    characterName: "Kevin",
    language: LanguageCodes.USA,
    disabled: false,
  },
  {
    voiceId: "Joey",
    languageCode: LanguageCodes.USA,
    avatarKey: AvatarKey.MarkAvatar,
    characterName: "Mark",
    language: LanguageCodes.USA,

    disabled: false,
  },
  {
    voiceId: "Olaf",
    languageCode: LanguageCodes.USA,
    avatarKey: AvatarKey.OlafAvatar,
    language: LanguageCodes.USA,

    characterName: "Olaf",
    disabled: true,
  },
  {
    voiceId: "Kendra",
    languageCode: LanguageCodes.USA,
    avatarKey: AvatarKey.KendraAvatar,
    language: LanguageCodes.USA,
    characterName: "Kendra",
    disabled: false,
  },
  {
    voiceId: "Joe",
    languageCode: LanguageCodes.English,
    avatarKey: AvatarKey.JoeAvatar,
    language: LanguageCodes.English,
    characterName: "Joe",
    disabled: false,
  },
  {
    voiceId: "Amy",
    languageCode: LanguageCodes.English,
    avatarKey: AvatarKey.CocoAvatar,
    language: LanguageCodes.English,

    characterName: "Coco",
    disabled: false,
  },
  {
    voiceId: "Brian",
    languageCode: LanguageCodes.English,
    avatarKey: AvatarKey.BrianAvatar,
    language: LanguageCodes.English,
    characterName: "Brian",
    disabled: false,
  },
  {
    voiceId: "Stella",
    languageCode: LanguageCodes.French,
    disabled: false,
    characterName: "Stella",
    avatarKey: AvatarKey.StellaAvatar,
    language: LanguageCodes.French,
  },
  {
    voiceId: "Lotte",
    languageCode: LanguageCodes.Dutch,
    avatarKey: AvatarKey.LotteAvatar,
    language: LanguageCodes.Dutch,
    characterName: "Lotte",
    disabled: true,
  },
  {
    voiceId: "Laura",
    languageCode: LanguageCodes.Dutch,
    avatarKey: AvatarKey.LauraAvatar,
    language: LanguageCodes.Dutch,
    characterName: "Laura",
    disabled: false,
  },
  {
    voiceId: "Ruben",
    languageCode: LanguageCodes.Dutch,
    avatarKey: AvatarKey.RubenAvatar,
    language: LanguageCodes.Dutch,
    characterName: "Ruben",
    disabled: false,
  },
];

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
