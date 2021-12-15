import React, {useState} from "react";
import { View, Text, Button, TextInput, Modal, StyleSheet} from 'react-native'
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

export default function NewNameForm(props){
  const {setNameList, currentNames, setFormVisible} = props
  const [Name, setName] = useState()
  const [nameModal, setNameModal] = useState(false)
  
  function NameSubmit(){
    const newNameList = currentNames.concat({name: Name})
    setNameList(newNameList)
    setNameModal(true);
  
  } 
    
  
  return(
    <View>
      <Text>This is the new name form</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        onChangeText={Name => setName(Name)}
      />
      <Button title='add Name' onPress={() => NameSubmit()} />
      <Text>name to add {Name}</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={nameModal}
        onRequestClose={() => {
          setNameModal(false);
          setFormVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable style={{borderRadius: 20, padding: 10, elevation: 2}} onPress={() => setNameModal(false)}>
            <Text>{Name} has been added to the List!</Text>
            </Pressable>
          </View>
        </View>
        </Modal>

    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});