import React from 'react';
import {SafeAreaView,FlatList } from 'react-native';
import { DATA } from '../../utils/data';
import Cabecalho from './components/Cabecalho';
import Misterio from './components/Misterio';


const ListaMisterios = () =>{

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Misterio {...item}/>}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={<Cabecalho/>}
      />      
    </SafeAreaView>
  );
}

export default ListaMisterios;