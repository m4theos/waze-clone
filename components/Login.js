import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { SafeAreaView } from 'react-native'; // Correct the import order

export default function Login({navigation}) {
  return (
    <View>
      <Button title='Login with firebase ' onPress={() => navigation.navigate("Map")}/>
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
});
