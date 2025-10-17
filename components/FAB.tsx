 import { useState } from 'react';
import { View, Text,Pressable,StyleSheet } from 'react-native'

interface Props {
 label: string;
 onPress: () => void;
 onLongPress: () => void;
  position?: 'left' | 'right';
}



export default function FAB({label,onPress,onLongPress,position="right"}:Props){

    const[count,setCount]=useState(0);
 return (
 
 
 <Pressable
 style={[styles.floatingButton ,styles.right]}
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


 right:{
    right:30,
    bottom:0,
 }
});
