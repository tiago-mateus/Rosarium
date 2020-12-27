import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {useFonts} from 'expo-font';
import { useNavigation } from '@react-navigation/native';

const ContemplacaoMisterios = ({route}) =>{

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
      let i = 1;
alert(i+1);
    return(
    <View style={{flex: 1}}>
        <ImageBackground source={require('../../../assets/misterios/1misteriogozoso.jpg')} imageStyle={{ height: '100%'}} style={{flex: 1,  flexDirection: 'column',justifyContent: 'flex-end'}}>
            <Text style={styles.textMisterio}>{contemplacoes.primeiromisterio.titulo}</Text>
            <Text style={styles.textContemplacao}>Anunciação do Arcanjo Gabriel</Text>
            <Text style={styles.textOfereciemento}>{contemplacoes.primeiromisterio.oferecimento}</Text>
            <Text style={styles.textOracao}>Pai-Nosso, dez Ave-Marias, Glória-ao-Pai.</Text>
        </ImageBackground>
        
        <TouchableOpacity onPress={() => navigationteste.push('ContemplacaoMisterios', {contemplacoes})}>
            <Text style={{color: 'white', backgroundColor: 'blue'}}>tetse</Text>
        </TouchableOpacity>
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
        marginBottom: 10
    },
    textOfereciemento:{
        fontFamily: 'MontserratBold',
        fontSize: 13,
        color:'white', 
        textAlign: 'center',
        marginBottom: 10

    },
    textOracao:{
        fontFamily: 'MontserratExtraBoldItalic',
        fontSize: 15,
        color:'white', 
        textAlign: 'center',
        marginBottom: 20

    }
   });
export default ContemplacaoMisterios;