import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { Print } from './print';
import { Detail }from './detail';
import { NavigationContainer } from '@react-navigation/native';


export const NavPrint = () => {

  const Stack = createStackNavigator ();
  
  return (
      <Stack.Navigator screenOptions={{headerShown : false}} >
        <Stack.Screen name="Print" component={Print} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
  );
}