import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {InputField, TextField, ImageField, TouchableButton, } from './CustomizeComponents/TextField'
import { styles } from './GlobalStyle';

export default function Screen2() {

    const [number, setNumber] = useState()
    return (
        <View style={styles.container}>
            <TextField
            textTitle = 'Enter your mobile number'
            style = {styles.textField}
            />

            <View style={styles.box1}>

                <Text style = {styles.normalField}>+92</Text>
                
                <InputField
                placeholder='Phone Number'
                keyboardType = 'number-pad'
                value = {number}
                onChangeText = {(e) => setNumber(e)} 
                style={styles.nameField}
                />
            </View>

<View>
            <TextField
            textTitle = 'Or Login with Social Network'
            style = {styles.para}
            />

<ImageField
source = {require('./pic/Logo.png')}
style = {styles.image}
/>

<TextField
textTitle = 'After continuing you will receive a verification SMS. Message and rates will apply.'
style = {styles.para}
/>

<TouchableButton
title = 'Continue'
style = {styles.touchableButton}
/> 

</View>
        </View>
    )
}
