import {
    View , 
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity
 } from "react-native";



import React from "react";
import COLOR from "./colors";

import { depenseCollection } from "../api/firebase_collection";
import { addDoc } from "firebase/firestore";


const Add = () => {

    // Article, prix , Qte , Date , 

    const [Nom,onChangeNom] = React.useState(null)
    const [Prix,onChangePrix] = React.useState(null)
    const [Qte,onChangeQte] = React.useState(null)
    const [Dates,onChangeDates] = React.useState(null)

    const PrintObject = async () => {
        await addDoc(depenseCollection,
            {
                designation: Nom,
                qte: Number(Qte),
                prix: Number(Prix),
                Date: Dates    
            }
        )
        onChangeNom(null)
        onChangePrix(null)
        onChangeQte(null)
        onChangeDates(null)
    }

    return (
        <View style = {styles.background}>
            <Text style = {styles.title}> Ajouter une depense </Text>
            <View style={styles.container}>
                
                <Text  style = {styles.Text}> Nom de l'article :  </Text>
                <TextInput
                    placeholderTextColor={COLOR.Gray}
                    style = {styles.inputText}
                    placeholder="Pain, Pomme de terre ... "
                    value={Nom}
                    onChangeText = {onChangeNom}
                />

                <Text  style = {styles.Text}> Quantité :  </Text>
                <TextInput
                    placeholderTextColor={COLOR.Gray}
                    style = {styles.inputText}
                    placeholder="12 "
                    value={Qte}
                    onChangeText = {onChangeQte}
                    keyboardType = "numeric"

                />
                <Text  style = {styles.Text}> Prix :  </Text>
                <TextInput
                    placeholderTextColor={COLOR.Gray}
                    style = {styles.inputText}
                    placeholder="1750fr"
                    value={Prix}
                    onChangeText = {onChangePrix}
                    keyboardType = "numeric"
                />
                
                <Text  style = {styles.Text}> Date :  </Text>
                <TextInput
                    placeholderTextColor={COLOR.Gray}
                    style = {styles.inputText}
                    placeholder="1750fr"
                    value={Dates}
                    onChangeText = {onChangeDates}
                />
            <View>
                <TouchableOpacity style={styles.button} activeOpacity = {.6} onPress = { () => PrintObject() }>
                    <Text style={{fontSize:25, color:COLOR.Blanc,}}>Ajouter</Text>
                </TouchableOpacity>
            </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    background : {
        paddingTop: 50,
        height : '100%'
    },
    inputText : {
        marginVertical: 15,
        height: 55,
        backgroundColor: COLOR.White,
        borderRadius: 25,
        paddingLeft: 15,
        borderColor: COLOR.GrisC,
    },
    title:{
        marginLeft:25,
        marginTop:30,
        marginBottom: 30,
        fontSize: 25,
        fontWeight: 800,
        justifyContent : 'center',
        alignItems : 'center',
        color: COLOR.Purple,
    },
    button:{
        marginTop: 50,
        padding: 10,
        backgroundColor: COLOR.Pink,
        borderRadius: 25,
        alignItems: 'center',
        marginHorizontal: 50,
        
    },
    Text:{
        fontSize : 14,
        fontWeight : 'bold',  
        color : COLOR.DarkPurple , 
    },
    container:{
        marginHorizontal: 25,
    }
})

export default Add;