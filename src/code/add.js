import {
    View , 
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity
 } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import COLOR from "./colors";
import { depenseCollection } from "../api/firebase_collection";
import { addDoc } from "firebase/firestore";
import { ScrollView } from "react-native-gesture-handler";
import { Dropdown } from "react-native-element-dropdown";

const data = [
    { label: 'Nourriture', value: '1' },
    { label: 'Necessaire Maison', value: '2' },
    { label: 'Autres (Imprévus)', value: '3' },
    { label: 'Aide (Social)', value: '4' },
    { label: 'Transport', value: '5' },
    { label: 'Loyer', value: '6' },
    { label: 'Factures', value: '7' },
    { label: 'Enfants', value: '8' },
    { label: 'Offrandes', value: '9' },
    { label: 'Personnel Maison', value: '10' },
    { label: 'Besoins Personnels', value: '11' },
];


const Add = ({navigation}) => {

    // Article, prix , Qte , Date , 

    const [Nom,onChangeNom] = React.useState(null)
    const [Prix,onChangePrix] = React.useState(null)
    const [Qte,onChangeQte] = React.useState(null)
    const [Dates,onChangeDates] = React.useState(null)
    const [Observation,onChangeObservation] = React.useState("")
    const [value, setValue] = React.useState(null);
    const [isFocus, setIsFocus] = React.useState(false);

    const PrintObject = async () => {
        
        if(
            (Nom.length <= 0) ||
            (Prix.length <= 0) ||
            (Qte.length <= 0) ||
            (value.length <= 0) 
        ) {
            alert('Remplissez tous les champs')
        } else {
            await addDoc(depenseCollection,
                {
                    designation: Nom,
                    qte: Number(Qte),
                    prix: Number(Prix),
                    Date: Dates,
                    observation:String(Observation),
                    categorie:String(data[value-1].label)    
                }
            )
            onChangeNom(null)
            onChangePrix(null)
            onChangeQte(null)
            onChangeDates(null)
            onChangeObservation("")
            setValue(null)
            setIsFocus(false)    
        }

    }

    return (
        <View style = {styles.background}>
            <Text style = {styles.title}> Ajouter une depense </Text>
            <ScrollView>
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
                    <Text  style = {styles.Text}> Categorie :  </Text>
                    <Dropdown
                        style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        search
                        maxHeight={300}
                        width={Dimensions.get('window').width -80}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        value={value}
                        onFocus={() => setIsFocus(true)}
                        onBlur={() => setIsFocus(false)}
                        onChange={item => {
                            setValue(item.value);
                            setIsFocus(false);
                        }}
                    />

                    <Text  style = {styles.Text}> Date :  </Text>
                    <TextInput
                        placeholderTextColor={COLOR.Gray}
                        style = {styles.inputText}
                        placeholder="21/05/2023"
                        value={Dates}
                        onChangeText = {onChangeDates}
                    />
                    <Text  style = {styles.Text}> Observation :  </Text>
                    <TextInput
                        placeholderTextColor={COLOR.Gray}
                        placeholder="Observation"
                        style={{
                            marginVertical: 15,
                            height: 100,
                            backgroundColor: COLOR.White,
                            borderRadius: 25,
                            paddingLeft: 15,
                            borderColor: COLOR.GrisC,
                        }}
                        value={Observation}
                        multiline={true}
                        numberOfLines={10}
                        onChangeText = {onChangeObservation}
                    />
                    <View>
                        <TouchableOpacity style={styles.button} activeOpacity = {.6} onPress = { () => PrintObject() }>
                            <Text style={{fontSize:25, color:COLOR.Blanc,}}>Ajouter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    background : {
        paddingTop: 50,
        height : '100%',
        backgroundColor : COLOR.Blanc,
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
        marginTop: 10,
        padding: 10,
        backgroundColor: COLOR.Pink,
        borderRadius: 25,
        alignItems: 'center',
        marginHorizontal: 50,
        marginBottom: 20
        
    },
    Text:{
        fontSize : 14,
        fontWeight : 'bold',  
        color : COLOR.DarkPurple , 
    },
    container:{
        marginHorizontal: 25,
        marginBottom: 90
    },
    dropdown: {
        marginVertical: 15,
        height: 55,
        backgroundColor: COLOR.White,
        borderRadius: 25,
        paddingHorizontal: 15,
        borderColor: COLOR.GrisC,
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
})

export default Add;