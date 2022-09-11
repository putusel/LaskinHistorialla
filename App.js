import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from'@react-navigation/native-stack';
import CalculatorScreen from './Calculator';
import HistoryScreen from './History';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Calculator" component={CalculatorScreen} />
        <Stack.Screen name="History" component={HistoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
