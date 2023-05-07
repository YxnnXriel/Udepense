import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Add from './src/code/add';
import COLOR from './src/code/colors';
import { NavPrint } from './src/code/nav_list';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function App() {
  const tab = createBottomTabNavigator();

  return (
          <NavigationContainer>
              <tab.Navigator
                screenOptions={({route}) => ({
                  tabBarIcon: ({focused, color, size}) => {
                    let iconName

                    if(route.name == "Add a spend") {iconName = "add-outline"}
                    else if(route.name == "List") {iconName = "list-outline"}
                    else if(route.name == "Home") {iconName = "home-outline"}
                    else if(route.name == "About Us") {iconName = "create-outline"}

                    return <Ionicons name={iconName} size={25} color={'#000'}/>
                  }
                })}
              >
                <tab.Screen name="Home" component={Home}/>
                <tab.Screen name="Add a spend" component={Add}/>
                <tab.Screen name="List" component={Print}/>
                <tab.Screen name="About Us" component={AboutUs}/>
              </tab.Navigator>
          </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.Blanc,
  },
});

// npm i react-native-ionicons
//npm i react-native-vector-icons
//npm add react-native-vector-icons