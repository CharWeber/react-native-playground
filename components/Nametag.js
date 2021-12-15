import React from "react";
import { View, Text, Image } from 'react-native';

export default function Nametag(props){
  const {name} = props;
  return(
    <View>
      <Text>{name.name}</Text>
      <Image
      source ={{
        uri: 'https://picsum.photos/200'
      }}
      style={{width:200, height: 200 }}
      />
    </View>
  )
}