import React, { useState } from "react";
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { style } from "./style";
import Logo from '../../assets/logo.png';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { themes } from "../../global/themes";

export default function Login(){
    const[email,setEmail] =  useState('');
    const[password, setPassword] = useState('');

     async function getLoguin(){
        try{
            if(!email || !password){
                return Alert.alert('Informe os campos obrigatorios');
            }
            if(email == 'admin' && password == 'admin'){
                Alert.alert('logado com sucesso');
            }else{
                Alert.alert('Usuario ou Senha incorreta!')
            }
              
        } catch(err){
            console.log(err);
        }
        
    }

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
                        <TextInput 
                        style={style.input}
                        value={email}
                        onChangeText={ (e) => setEmail(e)}/>
                        <MaterialIcons name="email"
                        size={20}
                        color={themes.colors.gray}/>
                    </View>
                

                <Text style={style.inputTitle}>SENHA</Text>
                 <View style={style.boxInput}>
                        <TextInput style={style.input}
                        value={password}
                        onChangeText={setPassword}/>
                        <MaterialIcons name="remove-red-eye"
                        size={20}
                        color={themes.colors.gray}/>
                    </View>
            </View>

            <View style={style.boxBottom}>
                <TouchableOpacity style={style.button} onPress={() => getLoguin()}>
                    <Text style={style.textButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <Text style={style.textoConta}>
                Não Possui Conta? <Text style={{color:themes.colors.primary}}>Crie uma</Text>
            </Text>
       </View>
    )
}