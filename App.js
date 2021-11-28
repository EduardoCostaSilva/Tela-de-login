import { StatusBar } from 'expo-status-bar';
import React, { cloneElement, Component } from 'react';
import {Alert, TouchableOpacity, TextInput, StyleSheet, Text, View, Image } from 'react-native';

export default function App  () {
  
 
  return (

    
    <View style={styles.container}>
       
     
       <Image
          source={require("./assets/icon-facebook.png")}
          style={styles.logo}
        />

       
        <Text style={styles.Textlogo}>Facebook</Text>

        <TextInput

        style={styles.Form} 
        
        placeholder="Email"  
        />
        <TextInput

        style={styles.Form}
        
        secureTextEntry={true}

        placeholder="Password"  
        />

        <TouchableOpacity

          style={styles.Button}

          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.ButtonLogin}>Log in</Text>

        </TouchableOpacity>
     

      <Text style={styles.ButtonSing}>Sign Up for Facebook.</Text>
    </View>
    
     

    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#455CB1', 
    justifyContent: 'center',
    padding: 20,

  },

  logo:{
    width:65 , 
    height:65, 
    top:120,
   

  },
  Textlogo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff', 
    padding:65,  
  },
  Form:{
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    marginBottom: 30,
    padding: 10,


  },
  Button:{
    width: '100%',
    height: 50,
    backgroundColor: '#31499e',
    alignItems: "center",
    justifyContent: "center",


  },
  ButtonLogin:{

    fontSize: 16,
    color: '#fff',
  },

  ButtonSing:{

    color: '#fff',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 50,
  },

});
