import React, { useState, } from 'react'
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import {InputField, TextField, ImageField, TouchableButton, } from './CustomizeComponents/TextField'
import { styles } from './GlobalStyle';

export default function Screen3() {

    const [number, setNumber] = useState()

    return (
        <View style={styles.container}>

<TextField
            textTitle = 'Mobile Verification'
            style = {styles.textField}
            />

<TextField
textTitle = 'Enter your OTP'
style = {styles.para}
/>

<View style = {styles.box1}>
       <TextInput 
       style={styles.otpField}
       keyboardType= 'number-pad'
       value={number}
       onChangeText={(e) => setNumber}
       /> 
       <TextInput 
       style={styles.otpField}
       keyboardType= 'number-pad'
       value={number}
       onChangeText={(e) => setNumber}
       /> 
       <TextInput 
       style={styles.otpField}
       keyboardType= 'number-pad'
       value={number}
       onChangeText={(e) => setNumber}
       /> 
       <TextInput 
       style={styles.otpField}
       keyboardType= 'number-pad'
       value={number}
       onChangeText={(e) => setNumber}
       /> 
</View>

<TextField
            textTitle = 'Did not receive the code. '
            style = {styles.para}
            />
<TextField
            textTitle = 'Resend new code. '
            style = {styles.para}
            />

<View>
<ImageField
source = {require('./pic/Logo.png')}
style = {styles.image}
/>

<TouchableButton
title = 'Next'
style = {styles.touchableButton}
/> 

</View>

        </View>
    )
}
