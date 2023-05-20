import { View , StyleSheet, Text, TouchableOpacity, TextInput, Modal, Image} from "react-native"
import COLOR from "./colors";
import { Row, Rows, Table, TableWrapper } from "react-native-table-component";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Dimensions } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { db } from "../api/firebase_api";
import { setDoc, doc, Firestore, getDoc, getDocs } from "firebase/firestore";
import 'firebase/firestore';

const datas = [
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

export const Detail = ({navigation, route}) =>{
    const data = route.params

    const [Nom,onChangeNom] = React.useState(data.datas.designation)
    const [NomE,onChangeNomE] = React.useState(Nom)
    
    const [Prix,onChangePrix] = React.useState(String(data.datas.prix))
    const [PrixE,onChangePrixE] = React.useState(Prix)
    
    const [Qte,onChangeQte] = React.useState(String(data.datas.qte))
    const [QteE,onChangeQteE] = React.useState(Qte)
    
    const [Dates,onChangeDates] = React.useState(data.datas.Date)
    const [DatesE,onChangeDatesE] = React.useState(Dates)
    
    const [Observation,onChangeObservation] = React.useState(data.datas.observation)
    const [ObservationE,onChangeObservationE] = React.useState(Observation)
    
    const [show, setShow] = React.useState(false)
    const [showDelete, setShowDelete] = React.useState(false)
    
    const [value, setValue] = React.useState(data.datas.categorie);
    const [valueE, setValueE] = React.useState(value);
    const [isFocus, setIsFocus] = React.useState(false);
    const [isFocusE, setIsFocusE] = React.useState(false);

    const updateData = async() => {
        const idExpense = data.datas.id
        if(
            (NomE.length != 0) &&
            (PrixE.length != 0) &&
            (QteE.length != 0) && 
            (valueE.length != 0)  
        ) {
            await setDoc(doc(db, 'depenses', idExpense), {
                designation: NomE,
                qte: Number(QteE),
                prix: Number(PrixE),
                Date: DatesE,
                observation:String(ObservationE),
                categorie:String(valueE) 
            }).then(()=>{
                setShow(false)
                alert('Updated Succesfully')
                navigation.navigate('Print')
            }).catch((e) => console.error(e))
        }
        if(
            (NomE.length <= 0) ||
            (PrixE.length <= 0) ||
            (QteE.length <= 0) ||
            (valueE.length <= 0) 
        ) {
            alert('fill the gaps')
        }
    }
o

    const Delete = async() => {
        const idExpense = data.datas.id
        
    }   

    return(
        <View style = {styles.background}>

            {/* modal pour edit */}
            <Modal
                transparent={true}
                visible={show}
            >
                <View style = {styles.modal}>
                    <View style = {styles.modalContent}>
                        <View style={{position: 'absolute', right: 15, top: 15}}>
                            <TouchableOpacity onPress={()=>setShow(false)}>
                                <Image source={require('../images/closeIcon.png')} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.title}>Edit</Text>
                        <ScrollView>
                            <View style={styles.container}>
                                <Text style = {styles.Text}> Nom de l'article :  </Text>
                                <TextInput
                                    placeholderTextColor={COLOR.Gray}
                                    style = {styles.inputTextt}
                                    placeholder="Pain, Pomme de terre ... "
                                    value={NomE}
                                    onChangeText = {onChangeNomE}
                                />

                                <Text style = {styles.Text}> Quantité :  </Text>
                                <TextInput
                                    placeholderTextColor={COLOR.Gray}
                                    style = {styles.inputTextt}
                                    placeholder="12 "
                                    value={QteE}
                                    onChangeText = {onChangeQteE}
                                    keyboardType = "numeric"
                                />
                                <Text  style = {styles.Text}> Prix :  </Text>
                                <TextInput
                                    placeholderTextColor={COLOR.Gray}
                                    style = {styles.inputTextt}
                                    placeholder="1750fr"
                                    value={PrixE}
                                    onChangeText = {onChangePrixE}
                                    keyboardType = "numeric"
                                />
                                <Text  style = {styles.Text}> Categorie :  </Text>
                                <Dropdown
                                    style={[styles.dropdown, isFocusE && { borderColor: 'blue' }]}
                                    placeholderStyle={styles.placeholderStyle}
                                    selectedTextStyle={styles.selectedTextStyle}
                                    inputSearchStyle={styles.inputSearchStyle}
                                    iconStyle={styles.iconStyle}
                                    data={datas}
                                    search
                                    maxHeight={300}
                                    width={Dimensions.get('window').width -80}
                                    labelField="label"
                                    valueField="value"
                                    placeholder={!isFocus ? 'Select item' : '...'}
                                    searchPlaceholder="Search..."
                                    value={value}
                                    onFocus={() => setIsFocusE(true)}
                                    onBlur={() => setIsFocusE(false)}
                                    onChange={item => {
                                    setValueE(item.value);
                                    setIsFocusE(false);
                                    }}
                                />
                               
                                <Text  style = {styles.Text}> Date :  </Text>
                                <TextInput
                                    placeholderTextColor={COLOR.Gray}
                                    style = {styles.inputTextt}
                                    placeholder="21/05/2023"
                                    value={DatesE}
                                    onChangeText = {onChangeDatesE}
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
                                    value={ObservationE}
                                    multiline={true}
                                    numberOfLines={10}
                                    onChangeText = {onChangeObservationE}
                                /> 
                                <View>
                                    <TouchableOpacity style={styles.button} activeOpacity = {.6} onPress = { () => updateData() }>
                                        <Text style={{fontSize:25, color:COLOR.Blanc,}}>Modifier</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </Modal> 
            {/* fin modal */}

            {/* modal suppression */}
            <Modal
                visible={showDelete}
                animationType="fade"
                transparent={true}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitle}>Voulez-vous supprimer ?</Text>
                        <View style={styles.modalButtonsContainer}>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.cancelButton]}
                                onPress={()=>setShowDelete(false)}
                            >
                            <Text style={styles.buttonText}>Annuler</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.modalButton, styles.confirmButton]}
                                onPress={()=> Delete()}
                            >
                            <Text style={styles.buttonText}>Confirmer</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>

            {/* fin modal */}


            <Text style = {styles.title}>Detail</Text>
            <ScrollView>
                <View style={styles.container}>
                    
                    <Text  style = {styles.Text}> Nom de l'article :  </Text>
                    <Text style={styles.inputText}>{Nom}</Text>
 
                    <Text  style = {styles.Text}> Quantité :  </Text>
                    <Text style={styles.inputText}>{Qte}</Text>

                    <Text  style = {styles.Text}> Prix :  </Text>
                    <Text style={styles.inputText}>{Prix}</Text>

                    <Text  style = {styles.Text}> Categorie :  </Text>
                    <Text style={styles.inputText}>{value}</Text>

                    
                    <Text  style = {styles.Text}> Date :  </Text>
                    <Text style={styles.inputText}>{Dates}</Text>

                    <Text  style = {styles.Text}> Observation :  </Text>
                    {
                        Observation.length > 0 ? 
                            <Text style={styles.inputText}>{Observation}</Text>
                        :<Text style={styles.inputText}>RAS</Text>
                    }

                    <View style={{flexDirection:"row", marginBottom: 15, marginTop: -20, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity style={styles.button} activeOpacity = {.6} onPress = { () => setShow(true) }>
                            <Text style={{fontSize:25, color:COLOR.Blanc,}}>Modifier</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} activeOpacity = {.6} 
                            onPress={()=>setShowDelete(true)}
                        >
                            <Text style={{fontSize:25, color:COLOR.Blanc,}}>Supprimer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            
            </ScrollView>    
        </View>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor: "#fff",
        marginBottom: 90,
        marginHorizontal: 25,
    },
    button:{
        marginTop: 0,
        padding: 0,
        alignItems: 'center',
    },
    background : {
        paddingTop: 50,
        height : '100%',
        backgroundColor : COLOR.Blanc,
    },
    inputText : {
        marginVertical: 15,
        height: 55,
        borderRadius: 25,
        paddingLeft: 15,
        borderColor: COLOR.GrisC,
    },
    dropdown : {
        marginVertical: 15,
        height: 55,
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
        paddingHorizontal: 40,
        paddingVertical: 5,
        backgroundColor: COLOR.Pink,
        borderRadius: 25,
        alignItems: 'center',
        marginHorizontal: 10
        
    },
    Text:{
        fontSize : 16,
        fontWeight : 'bold',  
        color : COLOR.DarkPurple , 
    },
    modal: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width -50,
        padding: 10,
        borderRadius: 15,
        marginVertical: 100,
        shadowColor: '#000',
        elevation: 5,
    },
    modalDelete: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalDeleteContent: {
        backgroundColor: 'white',
        width: Dimensions.get('window').width -80,
        padding: 10,
        borderRadius: 15,
        marginVertical: 100,
        shadowColor: '#000',
        elevation: 5,
    },
    inputTextt: {
        marginVertical: 15,
        height: 55,
        backgroundColor: COLOR.White,
        borderRadius: 25,
        paddingLeft: 15,
        borderColor: COLOR.GrisC,
        marginHorizontal: 0
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 20,
        minWidth: 280,
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
      },
      modalButtonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      modalButton: {
        padding: 8,
        borderRadius: 4,
        minWidth: 80,
      },
      cancelButton: {
        backgroundColor: '#eee',
      },
      confirmButton: {
        backgroundColor: COLOR.Pink,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
      },
})