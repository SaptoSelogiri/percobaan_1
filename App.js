import React,{useState} from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert,Image,TextInput } from 'react-native';




export default function App(){

  const [nama,setNama] =useState('sapto');
  const [kodePos,setkodePos]= useState('57652');

  return(
    
    <View style={styles.container}>
      <Text>tulis nama</Text>
       <TextInput
        style={styles.logo}
        placeholder='e.g sapto'
        onChangeText={(val)=>setNama(val)}/>
        
      <Text>tulis kode pos anda</Text>
        <TextInput
          style={styles.logo}
          keyboardType= 'numeric'
          placeholder='e.g.57652'
          onChangeText={(val)=>setkodePos(val)}/>
      <Button
      title='INPUT'
      color='green'
      onPress={()=>Alert.alert('Data Input','Nama Anda '+nama+'\n Kode Pos yang Anda '+kodePos)}
      />
      
    </View>
   
   
    
)}

const styles =StyleSheet.create({
  container :{
    flex:1,
    backgroundColor: '#fff',
    alignItems:'center',
    justifyContent:'center'
  },
  logo :{
    borderWidth:4,
    borderColor:'blue',
    pudding:8,
    margin:10,
    width:200
  }
})