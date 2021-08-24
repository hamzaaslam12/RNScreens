import React, { useState, } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {InputField, TextField, ImageField, TouchableButton, } from './CustomizeComponents/TextField'
import { styles } from './GlobalStyle';

export default function Screen5() {

    return (
        <View style={styles.container}>

            <TextField
            textTitle = 'Choose an account'
            style = {styles.textField}
            />

<View style = {styles.box1}>
<ImageField
source = {require('./pic/facebook.png')}
style = {styles.logo}
/>
<TouchableOpacity>
<TextField
            textTitle = 'Facebook'
            style = {styles.para}
            />

</TouchableOpacity>

</View>

<View style = {styles.box1}>

<ImageField
source = {require('./pic/google.png')}
style = {styles.logo}
/>

<TouchableOpacity>
<TextField
            textTitle = 'Google'
            style = {styles.para}
            />

</TouchableOpacity>

</View>


<View>

<ImageField
source = {require('./pic/Logo.png')}
style = {styles.image}
/>

<TextField
textTitle = 'By clicking on the social media icon you may receive a sms for verification. Message and data rate charge may apply.'
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
