import React from 'react';
import { View, Text, ImageBackground,TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useFonts} from 'expo-font';

const Item = ({titulo,img, id, contemplacoes}) =>{

    const navigation = useNavigation();


    return(
      <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start', marginHorizontal: 20}}>
          <TouchableOpacity onPress={() => navigation.push('PrimeiroMisterio', {contemplacoes})}>
            <ImageBackground source={img} imageStyle={{ borderRadius: 5, height: 95}} style={styles.buttons}>
              <Text style={styles.textButtons}>{titulo}</Text>
            </ImageBackground>
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  textButtons:{
   fontFamily: 'MontserratSemiBold',
   fontSize: 22,
   color:'white', 
   textAlign: 'center',
   position: 'relative', 
   top: 35 
  },
  buttons:{
    marginBottom: 100
  }
 });
export default Item;