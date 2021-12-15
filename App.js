
import React, {useState} from 'react';
import { View, Text, Image, ScrollView, Button, StyleSheet } from 'react-native';
import Nametag from './components/Nametag';
import NewNameForm from './components/NewNameForm';
import ModalTest from './components/Modal';


const App = () => {
  let visibleState = null;
  const [formVisible, setformVisible] = useState(false)
  const [seeNames, setSeeNames] = useState(false)
  
  
  const [nameList, setNameList] = useState([{name: 'Charlie'}, {name: 'Timmy'}, {name: 'Calvin'}])
  

  if (formVisible){
    visibleState = <NewNameForm setNameList={setNameList} currentNames={nameList} setFormVisible={setformVisible} />
  } else if (seeNames){
    visibleState = 
    <View>
    {nameList.map((name, index) => <Nametag name={name} key={index}/>)}
    </View>
  }

  return (
    <ScrollView>
      <View style={styles.otherContainer} />
      <Text style={styles.headline}>My banger app</Text>
        <Button title='new name' onPress={() => setformVisible(!formVisible)}/>
      <View style={styles.container}>
        <Image
          source={{
            uri: 'https://static-s.aa-cdn.net/img/ios/899277921/b99975eca70bbca26e0f6429394f80fb?v=1',
          }}
          style={{ width: 200, height: 200}}
        />
      </View>
        <Button title='see name list' onPress={() => setSeeNames(!seeNames)}/>

      <View style={styles.container}>
        {visibleState}
      </View>
      <ModalTest />
    </ScrollView>
  );
}

var styles = StyleSheet.create({

  container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#DF9AA6',
      justifyContent: 'center',
      alignItems: 'center',
  },

  topBox: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'lightgray',
      justifyContent: 'center',
      alignItems: 'center',
  },
  headline: {
      fontWeight: 'bold',
      fontSize: 18,
  marginTop: 0,
  paddingTop:  5,
      width: 200,
      height: 80,
  backgroundColor: 'yellow',
      justifyContent: 'center',
      alignItems: 'center',
  },

otherContainer: {
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center',
  backgroundColor: 'green',
  height: 22
  },


});

export default App;
