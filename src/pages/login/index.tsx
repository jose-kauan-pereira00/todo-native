import React from "react";
import { Image, Text, TextInput, View } from 'react-native';
import { style } from "./style";
import Logo from '../../assets/logo.png';

export default function Login(){
    return (
       <View style={style.container}>
            <View style={style.boxTop}>

                <Image 
                source={Logo}
                style={style.logo}
                resizeMode="contain"
                />
                <Text style={style.titulo}>Bem vindo de Volta!</Text>

            </View>

            <View style={style.boxMiddle}>

                <Text style={style.inputTitle}>ENDEREÇO DE E-MAIL</Text>
                    <View style={style.boxInput}>
                        <TextInput />
                    </View>
                

                <Text style={style.inputTitle}>SENHA</Text>
                 <View style={style.boxInput}>
                    <TextInput />
                </View>
            </View>

            <View style={style.boxBottom}>
                <Text> Senha</Text>
            </View>
       </View>
    )
}