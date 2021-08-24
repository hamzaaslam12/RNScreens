import React, { useState, } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {InputField, TextField, ImageField, TouchableButton, } from './CustomizeComponents/TextField'
import { styles } from './GlobalStyle';

export default function Screen4() {

    const [fName, setfName] = useState('')
    const [sName, setsName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    return (
        <View style={styles.container}>

<Image
source = {require('./pic/check.png')}
style = {{ width: '50%', height: '20%', resizeMode: 'center', marginLeft: 'auto', marginRight: 'auto', marginTop: '7%'}}
/>

            <TextField
            textTitle = 'Your are ready to go!'
            style = {styles.textField}
            />
            
<TextField
textTitle = {`Thanks for taking your time to create the account with us. Let's explore the luxury services around you.`}
style = {styles.para}
/>

<View>
<ImageField
source = {require('./pic/Logo.png')}
style = {styles.image}
/>

<TouchableButton
title = 'Get Started'
style = {styles.touchableButton}
/> 

</View>

        </View>
    )
}
