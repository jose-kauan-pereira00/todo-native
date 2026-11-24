import React from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { style } from "./style";
import Logo from '../../assets/logo.png';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { themes } from "../../global/themes";

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
                        <TextInput style={style.input}/>
                        <MaterialIcons name="email"
                        size={20}
                        color={themes.colors.gray}/>
                    </View>
                

                <Text style={style.inputTitle}>SENHA</Text>
                 <View style={style.boxInput}>
                        <TextInput style={style.input}/>
                        <MaterialIcons name="remove-red-eye"
                        size={20}
                        color={themes.colors.gray}/>
                    </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button}>
                    <Text>Entrar</Text>
                </TouchableOpacity>
            </View>
       </View>
    )
}