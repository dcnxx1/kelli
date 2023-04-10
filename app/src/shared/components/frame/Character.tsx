import { Image, StyleSheet } from "react-native";

interface Props {
    uri?: string
}

export default function Character({uri} : Props) {
    return <Image source={{uri: uri}} style={ImageStyle.Image}/>
}

const ImageStyle = StyleSheet.create({
    Image: {
        alignSelf: 'center',
    }
})

