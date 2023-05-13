import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import Add from './add';

import { Home } from './home';

export const NavHome = () => {

  const Stack = createStackNavigator ();
  
  return (
      <Stack.Navigator screenOptions={{headerShown : false}} >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Add" component={Add} />
      </Stack.Navigator>
  );
}