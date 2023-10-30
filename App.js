import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/Login'
import Map from './components/Map'
import { SafeAreaProvider} from 'react-native-safe-area-context' 
import MapView from 'react-native-maps'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
       <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login}  />
          <Stack.Screen name="Map" component={Map} />
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
});
