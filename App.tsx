import { StatusBar } from 'expo-status-bar';
import { Pressable,StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

export default function App() {


   const[count,setcount] = useState(10)
  return (
    <View style={styles.container}>
      <Text style={styles.textHuge}>{count}</Text>

      <Pressable onPress={() => setcount(count + 1)} >
        <Text style={styles.floatingButton}>+1</Text>
      </Pressable>

      <TouchableOpacity>
        <Text>+1</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },


  textHuge:{
fontSize:120,
fontWeight:'thin',

  },
  
  floatingButton:{
 position: 'absolute',
 bottom: -200,
 right: -200,
 backgroundColor: '#65558F',
 padding: 20,
 borderRadius: 15,
 shadowColor: '#000',
 shadowOffset: { width: 0, height: 4},



}});
