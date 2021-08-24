import React from 'react'
import { Text, TextInput, View, Image, TouchableOpacity } from 'react-native'

export function InputField(props) {
    return (
        <View>
            <TextInput
            style={props.style}
            secureTextEntry={props.secureTextEntry}
            placeholder={props.placeholder}
            keyboardType={props.keyboardType}
            value={props.value}
            onChangeText={props.onChangeText}
            />
        </View>
    )
}

export function TextField(props) {
    return (
        <View>
            <Text style={props.style}>{props.textTitle}</Text>
        </View>
        )
}


export function ImageField(props) {
    return (
        <View>
            <Image
            source={props.source}
            style = {props.style}
            />
        </View>
        )
}

export function TouchableButton(props) {
    return (
        <View>
            <TouchableOpacity style = {{
                borderColor: '#003d99',
                backgroundColor: '#003d99',
                borderStyle: 'solid',
                borderWidth: 3,
                borderRadius: 100,
                width: '80%',
                marginLeft: 'auto',
                marginRight: 'auto',
        }}>
                <Text style = {props.style}>{props.title}</Text>
            </TouchableOpacity>
        </View>
        )
}





