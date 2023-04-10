import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { theme } from '../../shared/themes'
import { Frame } from '../../shared/components'

export default function Home(){
    return <View style={ss.Homes}>
        <Frame avatarKey={"dutch/ruben.png"} />
    </View>
}


const ss = StyleSheet.create({
    Homes : {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: theme.colors.kelliGold
    },
})