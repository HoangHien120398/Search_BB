import React,{useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native';

import {
    Button
} from 'react-native-paper'

import 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constant from '../constant/Constant';


export default function ContactScreen({ navigation }) {

    const [name, setName] =useState('');
    const [numberphone, setNumberphone] = useState('');
    const [email, setEmail] = useState('');
    const [note, setNote] = useState('');

    return (
        <SafeAreaView style = {styles.container}>
           <Text style={styles.text}>Liên hệ với chúng tôi để biết thêm chi tiết về căn hộ này! </Text>
           <TextInput 
           placeholder="Họ và tên"
           autoCapitalize="none"
           onChangeText={name => setName({name})}
           value = {name}
           style={styles.textinfor}></TextInput>
           <TextInput 
           placeholder="Số điện thoại liên hệ "
           autoCapitalize="none"
           onChangeText={name => setName({name})}
           value = {name}
           style={styles.textinfor}></TextInput>
           <TextInput 
           placeholder="Email "
           autoCapitalize="none"
           onChangeText={name => setName({name})}
           value = {name}
           style={styles.textinfor}></TextInput>
           <TextInput 
           placeholder="Ghi chú: "
           autoCapitalize="none"
           onChangeText={name => setName({name})}
           value = {name}
           style={styles.textnote}></TextInput>
           
           <TouchableOpacity style={styles.buttonsend}>
                <Text style={styles.textsend}>Gửi</Text>
           </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#e8f3f1'
    },
    text :{
        fontSize : 28,
        color: '#5d706d',
        fontWeight:'bold',
        marginLeft: "6%",
        
    },
    textinfor: {
        height: 50,
        width: 300,
        borderColor: '#27b7a7',
        borderWidth: 2,
        borderRadius: 10,
        marginTop: "10%",
        backgroundColor: '#ecfdfa'
    
        
    },
    textnote: {
        height: 80,
        width: 300,
        borderColor: '#27b7a7',
        borderWidth: 2,
        marginTop: "10%",
        backgroundColor: '#ecfdfa'
    },
    buttonsend: {
        width: 150,
        height: 60,
        borderRadius: 10,
        borderColor:'black',
        backgroundColor: '#00aa9d',
        marginTop: "3%"
    },
    textsend: {
        fontSize: 30,
        color: 'white',
        fontWeight:'bold',
        marginTop: "5%",
        marginLeft: "30%",
        
        
    }
})