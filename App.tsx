import { StatusBar } from 'expo-status-bar';
import { Pressable,StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import FAB from './components/FAB';

export default function App() {


   const[count,setcount] = useState(10)
  return (
<View style={styles.container}>
  <Text style={styles.textHuge}>{count}</Text>

  {/* Comentado: Pressable para incrementar el contador */}
  {/*
  <Pressable style={styles.topLeft} onPress={() => setcount(count + 1)} >
    <Text >+1</Text>
  </Pressable>
  */}

  {/*
  <TouchableOpacity>
    <Text>+1</Text>
  </TouchableOpacity>
  */}
  <FAB label= "Hola soy Dani Hierro" onPress={()=> setcount(count+1)} onLongPress={()=> setcount(0)} position='left' />
  <StatusBar style='auto' />
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },


  textHuge:{
fontSize:120,
fontWeight:'thin',

  },

  floatingButton:{

 shadowColor: '#000',
 shadowOffset: { width: 0, height: 4}},

topLeft: {
    position: 'absolute',
    top: 20,
    left: 20,
    backgroundColor: '#E4572E',
    padding: 20,
    borderRadius: 15,
  },

});
