import { View, Text, TouchableOpacity, Modal, Image } from 'react-native'
import React from 'react'

export default function Sucess(props) {
    const [showSuccess, setShowSucess] = React.useState(true)

    return (
        <View>
            <Modal
            animationType="fade"
            visible={showSuccess}
            transparent={true}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <View style={{ backgroundColor: '#fff', padding: 30, borderRadius: 10, alignItems: 'center' }}>
                        <Image source={require("../images/successIcon.png")} style={{   }} />
                        <Text style={{ fontSize: 18, marginVertical: 10 }}>{props.content}</Text>
                        <TouchableOpacity style={{height: 45, width: 80,backgroundColor: '#8BC34A', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8}}>
                            <Text style={{ color: '#fff' }}>Fermer</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}