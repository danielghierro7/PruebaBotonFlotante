 import { useState } from 'react';
import { View, Text,Pressable,StyleSheet } from 'react-native'

interface Props {
 label: string;
 onPress: () => void;
 onLongPress: () => void;
  position?: 'izquierda' | 'derecha' | 'arriba'  | 'abajo' | 'centro';
}



export default function FAB({label,onPress,onLongPress,position="derecha"}:Props){

    const[count,setCount]=useState(0);
 return (
 
 
 <Pressable
 style={[styles.floatingButton ,position==="izquierda" ? styles.izquierda : position==="derecha" ? styles.derecha : position==="arriba" ? styles.]}
 onPress={onPress}
 onLongPress={onLongPress}
 >
 <Text style={{ color: "white", fontSize: 20 }}>{label} </Text>
     </Pressable>

)}


     const styles = StyleSheet.create({
 floatingButton: {
 position: 'absolute',

 backgroundColor: '#65558F',
 padding: 20,
 borderRadius: 15,
 shadowColor: '#000',
 shadowOffset: { width: 0, height: 4},
 shadowOpacity: 0.3,
 elevation: 3,
 shadowRadius: 4,
  
 },


 derecha:{
    right:30,
    bottom:0,
    left:undefined,
 },

 izquierda:{
    left:30,
    right:undefined,
    bottom:0,
 },
 arriba:{},
abajo:{},
  centro:{},



});
