import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'react-native-svg'
import COLOR from './colors'

const Card = (props) => {
  return (
    <View style={styles.cardView}>
      <View style={styles.left}>
        <Text style={{color: COLOR.Black, fontWeight: 'bold', fontSize: 20}}>{props.month}</Text>
        <Text style={{color: COLOR.Black, fontWeight: 'bold', fontSize: 17}}>{props.sum}$</Text>
      </View>
      <TouchableOpacity style={styles.button} activeOpacity={0.2}>
          <Image 
            source={require('../images/addIcon.png')}
            tintColor={COLOR.DarkPurple} 
          />
      </TouchableOpacity>
    </View>
    
  )
}

// shadowColor: COLOR.Black, 
// shadowOpacity: 0.25,
// elevation: 5,

const styles = StyleSheet.create({
    cardView: {
        width: 200,
        height: 100, 
        backgroundColor: COLOR.White,
        padding: 15, 
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 25,
        alignItems: 'center',
        marginRight: 10,
        
    },
    left: {
        display:'flex', 
        flexDirection:'column',
    },
    button: {
        width: 50,
        height: 50,
        backgroundColor: COLOR.Pink,
        borderRadius: 50,
        display:'flex',
        justifyContent:'center',
        alignItems: 'center',
      },
})

export default Card;