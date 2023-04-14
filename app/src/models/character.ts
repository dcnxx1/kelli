enum LanguageCodes {
  English = "en-GB",
  USA = "en-US",
  Dutch = "nl-NL",
  French = "fr-FR",
}

export enum Language {
  English = "English",
  Netherlands = "Netherlands",
  UnitedStates = "UnitedStates",
  France = "France",
}

export interface Character {
  voiceId: string;
  languageCode: string;
  language: string;
  avatarKey: string;
  characterName: string;
  disabled: boolean;
}

export interface SelectLanguage {
  flag: string;
  country: string;
  code: string;
}

export enum AvatarKey {
  KevinAvatar = "KevinAvatar",
  OlafAvatar = "OlafAvatar",
  MarkAvatar = "MarkAvatar",
  KendraAvatar = "KendraAvatar",
  StellaAvatar = "StellaAvatar",
  JoeAvatar = "JoeAvatar",
  CocoAvatar = "CocoAvatar",
  BrianAvatar = "BrianAvatar",
  RubenAvatar = "RubenAvatar",
  LotteAvatar = " LotteAvatar",
  LauraAvatar = "LauraAvatar",
}

export const SelectableCharacters: Character[] = [
  {
    voiceId: "Kevin",
    languageCode: LanguageCodes.USA,
    avatarKey: AvatarKey.KevinAvatar,
    characterName: "Kevin",
    language: Language.UnitedStates,
    disabled: false,
  },
  {
    voiceId: "Joey",
    languageCode: LanguageCodes.USA,
    avatarKey: AvatarKey.MarkAvatar,
    characterName: "Mark",
    language: Language.UnitedStates,

    disabled: false,
  },
  {
    voiceId: "Olaf",
    languageCode: LanguageCodes.USA,
    avatarKey: AvatarKey.OlafAvatar,
    language: Language.UnitedStates,

    characterName: "Olaf",
    disabled: true,
  },
  {
    voiceId: "Kendra",
    languageCode: LanguageCodes.USA,
    avatarKey: AvatarKey.KendraAvatar,
    language: Language.UnitedStates,
    characterName: "Kendra",
    disabled: false,
  },
  {
    voiceId: "Joe",
    languageCode: LanguageCodes.English,
    avatarKey: AvatarKey.JoeAvatar,
    language: Language.English,
    characterName: "Joe",
    disabled: false,
  },
  {
    voiceId: "Amy",
    languageCode: LanguageCodes.English,
    avatarKey: AvatarKey.CocoAvatar,
    language: Language.English,

    characterName: "Coco",
    disabled: false,
  },
  {
    voiceId: "Brian",
    languageCode: LanguageCodes.English,
    avatarKey: AvatarKey.BrianAvatar,
    language: Language.English,
    characterName: "Brian",
    disabled: false,
  },
  {
    voiceId: "Léa",
    languageCode: LanguageCodes.French,
    disabled: false,
    characterName: "Stella",
    avatarKey: AvatarKey.StellaAvatar,
    language: Language.France,
  },
  {
    voiceId: "Lotte",
    languageCode: LanguageCodes.Dutch,
    avatarKey: AvatarKey.LotteAvatar,
    language: Language.Netherlands,
    characterName: "Lotte",
    disabled: true,
  },
  {
    voiceId: "Laura",
    languageCode: LanguageCodes.Dutch,
    avatarKey: AvatarKey.LauraAvatar,
    language: Language.Netherlands,
    characterName: "Laura",
    disabled: false,
  },
  {
    voiceId: "Ruben",
    languageCode: LanguageCodes.Dutch,
    avatarKey: AvatarKey.RubenAvatar,
    language: Language.Netherlands,
    characterName: "Ruben",
    disabled: false,
  },
];

export const Languages: SelectLanguage[] = [
  {
    flag: Language.UnitedStates,
    country: "United States",
    code: LanguageCodes.USA,
  },
  {
    flag: Language.English,
    country: "Great-Brittain",
    code: LanguageCodes.English,
  },
  {
    flag: Language.France,
    country: "France",
    code: LanguageCodes.French,
  },
  {
    flag: Language.Netherlands,
    country: "Netherlands",
    code: LanguageCodes.Dutch,
  },
];
