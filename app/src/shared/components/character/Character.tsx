import { Image, StyleSheet } from "react-native"
import { Character } from "../../models/character"
 
interface Props {
    imageSource: Character
}

export default function Character({imageSource} : Props){
    return <Image style={ImageStyle.Character} source={require(`../../images/characters/${imageSource}`)} />
}

const ImageStyle = StyleSheet.create({
    Character: {

    }
})
