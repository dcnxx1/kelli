import { Image, StyleSheet } from "react-native";

interface Props {
    avatarKey: string
}

export default function Character({avatarKey} : Props) {
    return <Image source={require('../../images/characters/dutch/lotte.png')} />
}

const ImageStyle = StyleSheet.create({

})

