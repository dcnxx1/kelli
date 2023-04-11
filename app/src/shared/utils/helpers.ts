import { AvatarKey, Language } from "../../models/character";
const avatars = {
  KevinAvatar: require("../images/characters/usa/kevin.png"),
  OlafAvatar: require("../images/characters/usa/olaf.png"),
  MarkAvatar: require("../images/characters/usa/mark.png"),
  KendraAvatar: require("../images/characters/usa/female.png"),
  StellaAvatar: require("../images/characters/french/stella.png"),
  JoeAvatar: require("../images/characters/english/joe.png"),
  CocoAvatar: require("../images/characters/english/coco.png"),
  BrianAvatar: require("../images/characters/english/businessman.png"),
  RubenAvatar: require("../images/characters/dutch/ruben.png"),
  LotteAvatar: require("../images/characters/dutch/lotte.png"),
  LauraAvatar: require("../images/characters/dutch/laura.png"),
};

const flags = {
  English: require("../images/flags/english.png"),
  UnitedStates: require("../images/flags/usa.png"),
  France: require("../images/flags/france.png"),
  Netherlands: require("../images/flags/netherlands.png"),
};

export default function getAvatar(avatarKey: string): any {
  switch (avatarKey) {
    case AvatarKey.KevinAvatar:
      return avatars.KevinAvatar;
    case AvatarKey.OlafAvatar:
      return avatars.OlafAvatar;
    case AvatarKey.MarkAvatar:
      return avatars.MarkAvatar;
    case AvatarKey.KendraAvatar:
      return avatars.KendraAvatar;
    case AvatarKey.StellaAvatar:
      return avatars.StellaAvatar;
    case AvatarKey.JoeAvatar:
      return avatars.JoeAvatar;
    case AvatarKey.CocoAvatar:
      return avatars.CocoAvatar;
    case AvatarKey.BrianAvatar:
      return avatars.BrianAvatar;
    case AvatarKey.RubenAvatar:
      return avatars.RubenAvatar;
    case AvatarKey.LauraAvatar:
      return avatars.LauraAvatar;
    case AvatarKey.LotteAvatar:
      return avatars.LotteAvatar;
  }
}

export function getFlags(flag: string) {
  switch (flag) {
    case Language.UnitedStates:
      return flags.UnitedStates;
    case Language.English:
      return flags.English;
    case Language.France:
      return flags.France;
    case Language.Netherlands:
      return flags.Netherlands;
  }
}

