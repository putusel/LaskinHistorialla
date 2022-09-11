import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, Dimensions, StyleSheet, TextInput } from 'react-native';


export default function CalculatorScreen({ navigation }) {

const [text, setText] = useState('');
const [text2, setText2] = useState('');
const [result, setData] = useState('');
const [data, setData2] = useState([]);

const buttonPressed = () => { 
   const result = Number(text)+Number(text2);
   setData(result);
   const history = text.toString() + ' + ' + text2.toString() + ' = ' + result.toString();
   setData2([...data, { key: history }]);
   setText('');
   setText2('');
  };
const buttonPressed2 = () => { 
   const result = Number(text)-Number(text2);
   setData(result);
   const history = text.toString() + ' - ' + text2.toString() + ' = ' + result.toString();
   setData2([...data, { key: history }]);
   setText('');
   setText2('');
    
  };
   return (  
    <View style={styles.container}>
      <Text style={styles.text}>Result: {result} </Text>
        <TextInput 
          style={styles.input} 
          keyboardType={'numeric'}
          placeholder="enter a number"
          onChangeText={text => setText(text)} value={text}
        />
        <TextInput 
          style={styles.input}
          keyboardType={'numeric'}
          placeholder="enter a number"
          onChangeText={text2 => setText2(text2)} value={text2}
        />
        <View style={{ width:Dimensions.get("window").width * 0.4, flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginBottom: 10 }}>
          <Button style={styles.button} onPress={buttonPressed} title="+" />
          <Button style={styles.button} onPress={buttonPressed2} title="–" />
          <Button style={styles.button}onPress={() => navigation.navigate('History', {data: data})} title="History"/> 
        </View> 
                 
       <StatusBar style="auto" />
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
    image : {
      width: 250,
      height: 100,
      marginTop: 10,
      marginBottom: 10
      
    },
    input : {
      width:200, 
      borderColor: 'gray', 
      borderWidth: 1,
      fontSize: 20,
    },
    text : {
      fontSize: 20,
    },
   
    
     
  });
