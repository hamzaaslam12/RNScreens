import React, { useState, } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {InputField, TextField, ImageField, TouchableButton, } from './CustomizeComponents/TextField'
import { styles } from './GlobalStyle';

export default function Screen1() {

    const [fName, setfName] = useState('')
    const [sName, setsName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <View style={styles.container}>

            <TextField
            textTitle = 'UPDATE INFORMATION'
            style = {styles.textField}
            />

        <View style={styles.box1}>

            <InputField
            placeholder='First Name'
            keyboardType = 'default'
            value = {fName}
            onChangeText = {(e) => setfName(e)} 
            style={styles.nameField}
            />
            
            <InputField
            placeholder='Second Name'
            keyboardType = 'default'
            value = {sName}
            onChangeText = {(e) => setsName(e)} 
            style={styles.nameField}
            />

        </View>

<View style={styles.box2}>
<InputField
            placeholder='Email'
            keyboardType = 'email-address'
            value = {email}
            onChangeText = {(e) => setEmail(e)} 
            style={styles.otherField}
            />

<InputField
            placeholder='Password'
            secureTextEntry = {true}
            keyboardType = 'password'
            value = {password}
            onChangeText = {(e) => setPassword(e)} 
            style={styles.otherField}
            />

</View>

<View>
<ImageField
source = {require('./pic/Logo.png')}
style = {styles.image}
/>

<TouchableButton
title = 'SAVE DATA'
style = {styles.touchableButton}
/> 

</View>

        </View>
    )
}
