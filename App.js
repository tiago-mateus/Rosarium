import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ListaMisterios from './src/views/ListaMisterios';
import PrimeiroMisterio from './src/views/PrimeiroMisterio';
import SegundoMisterio from './src/views/SegundoMisterio';
import TerceiroMisterio from './src/views/TerceiroMisterio';
import QuartoMisterio from './src/views/QuartoMisterio';
import  QuintoMisterio from './src/views/QuintoMisterio';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  },
};

export default function App() {

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="ListaMisterios" >
          <Stack.Screen
            name="ListaMisterios"
            component={ListaMisterios}
            options={{headerShown: false,}}
          />

          <Stack.Screen
            name="PrimeiroMisterio"
            component={PrimeiroMisterio}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="SegundoMisterio"
            component={SegundoMisterio}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="TerceiroMisterio"
            component={TerceiroMisterio}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="QuartoMisterio"
            component={QuartoMisterio}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="QuintoMisterio"
            component={QuintoMisterio}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  }
});
