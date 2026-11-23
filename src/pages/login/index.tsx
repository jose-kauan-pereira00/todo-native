import React from "react";
import { Text, View } from 'react-native';
import { style } from "./style";

export default function Login(){
    return (
       <View style={style.container}>
            <View style={style.boxTop}>
                <Text> TOP</Text>
            </View>

            <View style={style.boxMiddle}>
                <Text> MIDDLE</Text>
            </View>

            <View style={style.boxBottom}>
                <Text> BOTTOM</Text>
            </View>
       </View>
    )
}