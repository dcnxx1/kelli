import { Character, AvatarKey } from "../../models/character"
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

export default function getAvatar(avatarKey: string) : any{
    switch(avatarKey){
        case AvatarKey.KevinAvatar:
            return avatars.KevinAvatar
        case AvatarKey.OlafAvatar:
            return avatars.KevinAvatar
        case AvatarKey.MarkAvatar:
            return avatars.MarkAvatar
        case AvatarKey.KendraAvatar:
            return avatars.KendraAvatar
        case AvatarKey.StellaAvatar:
            return avatars.StellaAvatar
        case AvatarKey.JoeAvatar:
            return avatars.JoeAvatar
        case AvatarKey.CocoAvatar:
            return avatars.CocoAvatar
        case AvatarKey.BrianAvatar:
            return avatars.BrianAvatar
        case AvatarKey.RubenAvatar:
            return avatars.RubenAvatar
        case AvatarKey.LauraAvatar:
            return avatars.LauraAvatar
        case AvatarKey.LotteAvatar:
            return avatars.LotteAvatar
    }
}