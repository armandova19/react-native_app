import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

interface Props {
    text: String;
    onClick: () => void;
}
const Component = (props: Props) => {
    const {text,onClick} = props;
    return(
        <TouchableOpacity style={styles.Button} onPress={onClick}>
            <Text style={styles.ButtonText}>{text}</Text>
          </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    Button: {
      backgroundColor: '#e20c79',
      padding: 10,
      width: 150,
    },
    ButtonText:{
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      
    },
});

export default Component;