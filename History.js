import * as React from 'react';
import { View, Text, StyleSheet, FlatList, useState } from 'react-native';

export default function HistoryScreen({ route, navigation }) {

   const{ data } = route.params;
     
   return (  
    <View style={styles.container}>
        <Text style={styles.text}>History</Text>
        <FlatList style={styles.list}
          data={data}
          renderItem={({ item }) =>
            <Text>{item.key}</Text>
        }/>
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
    }
  });