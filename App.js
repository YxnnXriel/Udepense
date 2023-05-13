import { StyleSheet, Text, View, Image } from 'react-native';
import COLOR from './src/code/colors';
import { NavPrint } from './src/code/nav_list';
import { NavHome } from './src/code/nav_home';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Add from './src/code/add';
import { Home } from './src/code/home';


export default function App() {
  const tab = createBottomTabNavigator();

  return (
          <NavigationContainer >
              <tab.Navigator
                independent= {true}
                screenOptions={({route}) => ({
                  tabBarShowLabel:false,
                  headerShown: false,
                  tabBarStyle: {
                    position:'absolute',
                    bottom: 0,
                    left: 0,
                    elevation: 0,
                    height: 90
                  },
                  tabBarHideOnKeyboard: true
                })}
              >
                <tab.Screen name="NavHome" component={NavHome} options={{
                  tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Image 
                            source={require('./src/images/homeIcon.png')} 
                            resizeMode='contain'
                            style={{
                                tintColor: focused ? COLOR.Pink:COLOR.Black,
                                width: 25,
                                height:25
                            }}
                        />
                        <Text 
                            style={{
                                color: focused ? COLOR.Pink:COLOR.Black, fontSize: 12
                            }}
                        >HOME</Text>
                    </View>
                ),
                }}/>
                <tab.Screen name="Add" component={Add} options={{
                    tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Image 
                            source={require('./src/images/addIcon.png')} 
                            resizeMode='contain'
                            style={{
                                tintColor: focused ? COLOR.Pink:COLOR.Black
                            }}
                        />
                        <Text 
                            style={{
                                color: focused ? COLOR.Pink:COLOR.Black, fontSize: 12
                            }}
                        >ADD</Text>
                    </View>
                  ),
                }}/>
                <tab.Screen name="OtherNav" component={NavPrint} options={{
                    tabBarIcon: ({focused}) => (
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Image 
                            source={require('./src/images/listIcon.png')} 
                            resizeMode='contain'
                            style={{
                                tintColor: focused ? COLOR.Pink:COLOR.Black
                            }}
                        />
                        <Text 
                            style={{
                                color: focused ? COLOR.Pink:COLOR.Black, fontSize: 12
                            }}
                        >LIST</Text>
                    </View>
                  ),
                }}/>

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