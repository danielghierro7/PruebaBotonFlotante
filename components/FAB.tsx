 import React, { Component } from 'react'
 import { Pressable, Text, View } from 'react-native'
 

interface FABProps {
    label:string;
    color:string;
}

 const FAB:React.FC<FABProps> = ({label,color}) => {
return(
 <View>
    <Pressable style={{backgroundColor: color}}>
        <Text>
            {label}
        </Text>
    </Pressable>
 </View>


);



 };
 export default FAB;
 