import { View, Text,StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import Card from './card';
import {
  LineChart,
} from "react-native-chart-kit";
import COLOR from './colors';

import {PrintListHome} from "./list_for_home"


export const Home = ({navigation}) => {


  return (
    <View style={styles.mainHome}>
      
      <View style={styles.topHeader}>
        <TouchableOpacity style={styles.button} activeOpacity={0.2}>
          
        </TouchableOpacity>
        <Text style={{fontSize: 22, fontWeight: 'bold', color: COLOR.Pink}}>UDepense</Text>
        <TouchableOpacity style={styles.button} activeOpacity={0.2}>
          <Image 
            source={require('../images/userIcon.png')}
            tintColor={COLOR.Black} 
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.topHeaderr}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: COLOR.Black}}>Home</Text>
        <TouchableOpacity style={styles.buttondown} activeOpacity={0.2} onPress={() =>navigation.navigate('Add')} >
          <Text style={{fontSize: 22, fontWeight: 'bold', color: COLOR.Pink, fontSize: 18}}>Add</Text>
          <Image 
            source={require('../images/addIcon.png')}
            tintColor={COLOR.Pink} 
            style={{width:18, height:18, marginLeft: 5}}
          />
        </TouchableOpacity>
      </View>
      
      <View>
        <ScrollView style={styles.cardsView} horizontal={true} showsHorizontalScrollIndicator={false}>
          <Card month="January" sum="500" />
          <Card month={"February"} sum={"2100"}/>
          <Card month={"March"} sum={"1200"}/>
          <Card month={"April"} sum={"1270"}/>
          <Card month={"May"} sum={"2000"}/>
          <Card month={"June"} sum={"2500"}/>
          <Card month={"July"} sum={"20"}/>
          <Card month={"August"} sum={"2700"}/>
          <Card month={"September"} sum={"3200"}/>
          <Card month={"October"} sum={"5200"}/>
          <Card month={"November"} sum={"2100"}/>
          <Card month={"December"} sum={"240"}/>
        </ScrollView>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: COLOR.Black, marginTop: 15, marginBottom: 10}}>Stats</Text>
            <LineChart
              data={{
                  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "oct", "Nov", "Dec"],
                  datasets: [
                  {
                      data: [1, 2, 3, 1, 8, 5, 1, 8, 0.2, 3, 2, 7, 6]
                  }
                ]
              }}
              width={Dimensions.get("window").width -30} // from react-native
              height={220}
              yAxisLabel="$"
              yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                  backgroundColor: COLOR.White,
                  backgroundGradientFrom: COLOR.White,
                  backgroundGradientTo: COLOR.White,
                  decimalPlaces: 2, // optional, defaults to 2dp
                  color: (opacity = 0.7) => `rgba(255,0, 0, ${opacity})`,
                  labelColor: (opacity = 1) => `rgba(0,0,0,${opacity})`,
                  style: {
                    borderRadius: 16
                  },
                  propsForDots: {
                  r: "4",
                  strokeWidth: "2",
                  stroke: COLOR.Pink
                  },
              }}
              bezier
              style={{
                  marginVertical: 8,
                  borderRadius: 16,
              }}
              verticalLabelRotation={60}
              xLabelsOffset={-5}
            />
          </View>
          <View>
              <PrintListHome/>
          </View>
      </ScrollView>

    </View>

    
  );
}


const styles = StyleSheet.create({
    mainHome: {
      flex: 1,
      paddingTop: 40,
      paddingHorizontal: 15,
      backgroundColor: "#fff",
      marginBottom: 90
    },
    topHeader: {
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center'
    },
    topHeaderr: {
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
      marginTop: 15
    },
    button: {
      width: 50,
      height: 50,
      borderRadius: 50,
      display:'flex',
      justifyContent:'center',
      alignItems: 'center',
    },
    buttondown: {
      display: "flex",
      flexDirection: 'row',
      alignItems:'center'
    },
    cardsView: {
      flexDirection: 'row', 
      marginTop: 25, 
      flexGrow: 0,
      paddingVertical: 8
    }
})