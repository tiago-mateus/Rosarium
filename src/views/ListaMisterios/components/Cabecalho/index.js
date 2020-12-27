import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {useFonts} from 'expo-font';

const Cabecalho = () =>{


    const [loaded] = useFonts({
        MontserratSemiBold: require('../../../../../assets/fonts/Montserrat-SemiBold.ttf'),
        MontserratExtaBoldItalic: require('../../../../../assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
      });
    
      if (!loaded) {
        return null;
      }
      
    return (
        <View style={styles.containerInfo}>
            <Text style={styles.textInfo}>27 DEZ | MIST. GLORIOSO</Text>
            <Text style={styles.textLema}>totus tuus mariae.</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    textInfo:{
      fontFamily: 'MontserratSemiBold',
      fontSize:17,
      color: '#272727',
    },
    textLema:{
      fontFamily: 'MontserratExtaBoldItalic',
      fontSize:16,
      color: '#3d565f'
    },
    containerInfo:{
      flexDirection: 'column',
      paddingHorizontal: 25,
      top: 50,
      marginBottom: 80,
    }
  });

  export default Cabecalho;