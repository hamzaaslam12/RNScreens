import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#80b3ff'  // change to blue  
    },
    box1: {
      justifyContent: 'space-evenly',
      flexDirection: 'row',
      marginTop: '5%',

    },

    box2: {
      alignContent: 'stretch',
      flexDirection: 'column',
      marginTop: '5%',
      marginLeft: '5%'
    },

    nameField: {
        color: '#ffffff',
        fontSize: 20,
        borderWidth: 2,
        borderColor: '#003d99',
        width: '100%'
  
    },

    otherField: {
        color: '#ffffff',
        fontSize: 20,
        borderWidth: 2,
        borderColor: '#003d99',
        marginBottom: '5%',
        width: '95%'
    },

    textField: {
        color: '#ffffff',
        fontSize: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '15%',
        // borderWith: 2,
        // borderColor: 'red'
    },

    image: {
        width: '50%',
        height: '45%',
        resizeMode: 'stretch',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '20%',
        // marginBottom: '1%'
    },

    touchableButton: {
        color: '#ffffff',
        fontSize: 20,
        marginLeft: 'auto', 
        marginRight: 'auto',
        marginTop: '2%' ,
        padding: '2%',
        // height: '15%'
    },

    normalField: {
      fontSize: 20,
      width: '10%',
      marginRight: '1%'
    },

    para: {
      fontSize: 20,
      color: '#ffffff',  //change to white
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '1%',
      marginBottom: '3%'
    },

    otpField: {
      borderColor: '#ffffff', //white
      borderRadius: 100,
      borderWidth: 2,
      fontSize: 20,
      textAlign: 'center'
    },

    logo: {
      width: 80,
      height: 50,
      resizeMode: 'stretch',
    }
}) 
