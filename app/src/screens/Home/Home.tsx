import React from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'

export default function Home(){
    return <View style={ss.Homes}>
        <Text>Home.</Text>
    </View>
}


const ss = StyleSheet.create({
    Homes : {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
})