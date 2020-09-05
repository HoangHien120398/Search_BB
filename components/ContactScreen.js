import React,{useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Alert
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

    CheckTextInput = () => {
        //const email_default = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        //Handler for the Submit onPress
        

        if (name != '') {
          //Check for the Name TextInput
          if (numberphone != '') 
           
          {
              if(email != '')
              {
                  if(note != ''){
                      //alert('Suceed')
                    navigation.navigate(Constant.ContactScreen.goTo)
                  }
                  else {
                    alert('Please Enter note');
                  }
              }
             else {
            alert('Please Enter email');
             }
        }
         else {
          alert('Please Enter numberphone');
        }
    }
    else{
        alert('Please Enter name');
    }
};
       

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
           onChangeText={name => setNumberphone({numberphone})}
           value = {numberphone}
           style={styles.textinfor}></TextInput>
           <TextInput 
           placeholder="Email "
           autoCapitalize="none"
           onChangeText={name => setEmail({email})}
           value = {email}
           style={styles.textinfor}></TextInput>
           <TextInput 
           placeholder="Ghi chú: "
           autoCapitalize="none"
           onChangeText={name => setNote({note})}
           value = {note}
           style={styles.textnote}></TextInput>
           
           <TouchableOpacity style={styles.buttonsend}
             onPress={CheckTextInput}
           >
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