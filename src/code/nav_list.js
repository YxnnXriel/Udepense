import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Detail } from './detail';
import {Print} from './print'


export const NavPrint = () => {

  const Stack = createStackNavigator();
  
  return (
    
    <Stack.Navigator screenOptions={{headerShown : false}} >
      <Stack.Screen name="Print" component={Print} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator >

  );
}