import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Alert, Image } from "react-native";
import CustomButton from "./src/components/CustomButton";


const App = () =>{

 let [number, setNumber] = useState(0);
  
    
  const continuar = () => {
    
    let sum=0;
    while(number>0){
      sum=sum+number%10;
      number=number/10;
    }
    Alert.alert(
    
      'Resultado',
      'Bienvenido '+ text  + ' tu numero de la suerte es: '+ sum,
      [
        {
            text: 'Aceptar',
        }
    ]
    );

    
  };
  const [text, onChangeText] = React.useState("");
  

  return(
    
    <View style={styles.Container}>
     <View>
     <Image source = {require('./img/imagen_number.jpg')}/>
     </View>

      <Text style={styles.Text}>Nombre del usuario:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      
      <View style={styles.ControlsContainer}>
        <Text style={styles.Age}>Edad del usuario:</Text>
        <TextInput
        style={styles.input}
        placeholder="Edad"
        keyboardType="numeric"
        //value={number}
      />
        <View style={styles.ButtonContainer}>
          <CustomButton text="continuar" onClick={continuar}/>
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
     alignItems: 'center',
      backgroundColor: '#4fe3e0',
      display: 'flex',
      height: '100%',
      justifyContent: 'center',
  },
  Text: {
    fontSize: 25,
    fontWeight: '700',
   letterSpacing: 2,
  },
  ControlsContainer: {
    alignItems: 'center',
    margin: 20,
    width: '100%',
  },
  Age: {
    color: '#4e086f',
    fontSize: 20,
    fontWeight: '800',
  },
  ButtonContainer: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
    width: '100%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
export default App;


