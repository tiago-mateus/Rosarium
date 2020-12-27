import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {useFonts} from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const QuintoMisterio = ({route}) =>{

    const navigationteste = useNavigation();
    const {contemplacoes} = route.params;
    const [loaded] = useFonts({
        MontserratExtraBold: require('../../../assets/fonts/Montserrat-ExtraBold.ttf'),
        MontserratExtraBoldItalic: require('../../../assets/fonts/Montserrat-ExtraBoldItalic.ttf'),
        MontserratBold: require('../../../assets/fonts/Montserrat-Bold.ttf'),
      });
      if (!loaded) {
        return null;
      }

    return(
    <View style={{flex: 1}}>
        <ImageBackground source={contemplacoes.quintomisterio.img} imageStyle={{ height: '100%'}} style={{flex: 1,  flexDirection: 'column',justifyContent: 'flex-end'}}>
            <Text style={styles.textMisterio}>{contemplacoes.quintomisterio.titulo}</Text>
            <Text style={styles.textContemplacao}>{contemplacoes.quintomisterio.contemplacao}</Text>
            <Text style={styles.textOfereciemento}>{contemplacoes.quintomisterio.oferecimento}</Text>
            <Text style={styles.textOracao}>Pai-Nosso, dez Ave-Marias, Glória-ao-Pai.</Text>
            
            <TouchableOpacity onPress={() => navigationteste.push('Oracoes', {contemplacoes})} style={styles.buttonMisterio}>
                <Text style={{color: 'white', alignSelf: 'center', fontSize: 15,fontFamily: 'MontserratExtraBoldItalic'}}>Orações</Text>
            </TouchableOpacity> 

        </ImageBackground>
        

    </View>
    );
}


const styles = StyleSheet.create({
    textMisterio:{
     fontFamily: 'MontserratExtraBold',
     fontSize: 22,
     color:'white', 
     textAlign: 'center',
     marginBottom: 10
    },
    textContemplacao:{
        fontFamily: 'MontserratExtraBoldItalic',
        fontSize: 19,
        color:'white', 
        textAlign: 'center',
        marginBottom: 10,
        maxWidth: '93%',
        alignSelf: 'center'
    },
    textOfereciemento:{
        fontFamily: 'MontserratBold',
        fontSize: 13,
        color:'white', 
        textAlign: 'center',
        marginBottom: 10,
        maxWidth: '93%',
        alignSelf: 'center'

    },
    textOracao:{
        fontFamily: 'MontserratExtraBoldItalic',
        fontSize: 15,
        color:'white', 
        textAlign: 'center',
        marginBottom: 20

    },
    buttonMisterio:{
        marginBottom:20,
        height: 60,
        borderRadius: 5,
        width: '70%',
        backgroundColor: '#002747',
        alignSelf: 'center',
        justifyContent: 'center',
    }
   });
export default QuintoMisterio;