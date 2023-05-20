import { Text , View , StyleSheet , FlatList, TouchableOpacity, SafeAreaView
 } from "react-native";
import COLOR from "./colors";
import React from "react";

import { db } from "../api/firebase_api";
import {getDocs} from "firebase/firestore"
import { depenseCollection } from "../api/firebase_collection";


export const Print = ({navigation}) => {
    
    const [depense, SetDepense] = React.useState([])


    React.useEffect(()=>{
        const getDepense = async () => {
            const data = await getDocs(depenseCollection);
            SetDepense(
                data.docs.map((doc) => ({...doc.data(), id : doc.id}))
            )           
        }
        getDepense();
    })

    const renderItem  = ({item,index}) => {
        return (
            <View>
                <TouchableOpacity activeOpacity={.8}>
                    <View style={styles.base}>
                        <View>
                            <Text style={styles.name}> {item.designation} </Text>
                            <Text style={styles.name}> {item.Date} </Text>
                        </View>

                        <View>
                            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Detail', {datas:item})}>
                                <Text style={styles.btnText}>Voir Plus</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }


    return (
        <SafeAreaView style = {styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>Liste des depenses</Text>
            </View>
            <FlatList keyExtractor={(item) => item.id} data = {depense} renderItem = {renderItem} />
        </SafeAreaView>
    );

}

const styles = StyleSheet.create({
    base:{
        flex : 1,
        flexDirection: 'row',
        paddingVertical: 15,
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: 15,
        marginVertical:10,
        boxShadow:'1px 2px 9px #5C5C5C',
        marginHorizontal:35,
        // borderRadius: 8,
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        color: COLOR.DarkPurple,
    },
    textContainer: {
        marginLeft: 35,
        marginBottom: 35
    },
    title: {
        fontSize:22,
        fontWeight:800,
        color: COLOR.Purple,
        // borderBottomWi   th: .7,
        // width: '54%'
    },
    container:{
        flex:1,
        paddingTop : 80,
        backgroundColor : COLOR.Blanc
    },
    button: {
        padding: 10,
        backgroundColor: COLOR.Pink,
        borderRadius: 25
    },
    btnText: {
        color: COLOR.Blanc
    }

})
